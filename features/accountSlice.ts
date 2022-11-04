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
            const response:any = await agent.post(`/auth/login`, JSON.stringify(data));
            const { token } = response.data
            localStorage.setItem("jwt-code-blog", JSON.stringify({token}));
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
        setLogIn: (state, action) => {
            state.loggedIn = action.payload;
        },
        setLogOut: (state) => {
            state.loggedIn = false;
        }
    },
    extraReducers: (builder) =>{ 
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.loggedIn = true;
        });
    }
});

export const { setLogOut, setLogIn } = accountSlice.actions;
export default accountSlice.reducer;