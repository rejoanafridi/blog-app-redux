import { getRelatedBlog } from "./relatedBlogsApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
	relatedBlogs: [],
	isLoading: false,
	isError: false,
	error: "",
};

// async thunk
export const fetchRelatedBlog = createAsyncThunk(
	"relatedBlog/fetchRelatedBlog",
	async ({ tags, id }) => {
		const relatedBlogs = await getRelatedBlog({ tags, id });
		return relatedBlogs;
	}
);

const relatedBlogSlice = createSlice({
	name: "relatedBlog",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchRelatedBlog.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchRelatedBlog.fulfilled, (state, action) => {
				state.isLoading = false;
				state.relatedBlogs = action.payload;
			})
			.addCase(fetchRelatedBlog.rejected, (state, action) => {
				state.isLoading = false;
				state.relatedBlogs = [];
				state.isError = true;
				state.error = action.error?.message;
			});
	},
});

export default relatedBlogSlice.reducer;
