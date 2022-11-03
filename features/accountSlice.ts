import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import agent from "../helpers/agent";
import { LoginResponse } from "../interfaces/LoginResponse";
import { User } from "../interfaces/User";

interface AccountState {
    user: User | null;
    loggedIn: boolean;
    errors: any[] | null;
}

const initialState: AccountState = {
    user: null,
    loggedIn: false,
    errors: []
}

export const loginUser = createAsyncThunk<LoginResponse, Object>(
    "account/loginUser",
    async (data, thunkAPI) => {
        try {
            const response = await agent.post(`/auth/login`, JSON.stringify(data));
            localStorage.setItem("jwt", response.data.token);
            toast.success("User Logged In");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({error});
        }
    }
)

export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setLoggedInUser: (state, action) => {
            state.loggedIn = action.payload;
        }
    },
    extraReducers: (builder) =>{ 
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.loggedIn = true;
        });
    }
})