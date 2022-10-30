import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import agent from "../helpers/agent";
import { Post } from "../interfaces/Post";

export const slice = "";

interface PostState {
    posts: Post[] | null;
    singlePost: Post | null;
    loading: boolean;
    errors: any[] | null;
}

const initialState: PostState = {
    posts: null,
    singlePost: null,
    loading: false,
    errors: []
}

export const getAllPosts = createAsyncThunk<Post[]>(
    "post/getAllBlogs",
    async (_, thunkAPI) => {
        try {
            const response = await agent.get("/posts");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({error})
        }
    }
)

export const getSinglePost = createAsyncThunk<Post, string | any>(
    "post/getSinglePost",
    async (id, thunkAPI) => {
        try {
            const response = await agent.get(`/posts/post/${id}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({error});
        }
    }
)

export const createPost = createAsyncThunk<Post, Object>(
    "post/createPost",
    async (data, thunkAPI) => {
        try {
            const response = await agent.post(`/posts/post`, JSON.stringify(data));
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({error})
        }
    }
)

export const updatePost = createAsyncThunk<Post, Post|any>(
    "post/updatePost",
    async (data, thunkAPI) => {
        const {id, ...obj} = data
        try {
            const response = await agent.put(`/posts/post/${id}`, data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({error});
        }
    }
)

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        clearSinglePost: (state) => {
            state.singlePost = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        });
        builder.addCase(getSinglePost.pending, (state) => {
            state.loading =  true;
        });
        builder.addCase(getSinglePost.fulfilled, (state, action) => {
            state.loading = false;
            state.singlePost = action.payload
        });
        builder.addCase(updatePost.fulfilled, (state, action) => {
            state.singlePost = action.payload;
        });
    }
});

export const { clearSinglePost } = postSlice.actions;
export default postSlice.reducer;