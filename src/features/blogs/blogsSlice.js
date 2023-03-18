import { getBlogs } from "./blogsApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
	blogs: [],
	isLoading: false,
	isError: false,
	error: "",
};

// async thunk function
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async (selectSort) => {
	const blog = await getBlogs(selectSort);
	return blog;
});

const blogsSlice = createSlice({
	name: "blogs",
	initialState,

	extraReducers: (builder) => {
		builder
			.addCase(fetchBlogs.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchBlogs.fulfilled, (state, action) => {
				state.isLoading = false;
				state.blogs = action.payload;
			})
			.addCase(fetchBlogs.rejected, (state, action) => {
				state.isLoading = false;
				state.blogs = [];
				state.isError = true;
				state.error = action.error?.message;
			});
	},
});

export default blogsSlice.reducer;

