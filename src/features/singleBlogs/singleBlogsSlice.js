import { getSingleBlog } from "./singleBlogsApi";
import blogsSlice from "../blogs/blogsSlice";
import axios from "../../utils/axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
	singleBlog: {},
	isLoading: false,
	isError: false,
	error: "",
	isSave: false,
	data: {},
};

// async thunk function
export const fetchSingleBlog = createAsyncThunk(
	"blog/fetchSingleBlog",
	async (id) => {
		const blog = await getSingleBlog(id);
		return blog;
	}
);

export const updateSaveBlogPatch = createAsyncThunk(
	"blog/updateSave",
	async ({ id, blog }) => {
		try {
			const response = await axios.patch(`/blogs/${id}`, blog);

			return response.data;
		} catch (error) {
			return error.response.data;
		}
	}
);
export const incrementLikesPatch = createAsyncThunk(
	"blog/incrementLikes",
	async ({ id, blog }) => {
		try {
			const response = await axios.patch(`/blogs/${id}`, blog);

			return response.data;
		} catch (error) {
			return error.response.data;
		}
	}
);

const singleBlogSlice = createSlice({
	name: "singleBlog",
	initialState,
	reducers: {
		saved: (state, action) => {
			state.singleBlog.isSaved = true;
		},
		incrementLike: (state, action) => {
			state.singleBlog.likes++;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSingleBlog.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchSingleBlog.fulfilled, (state, action) => {
				state.isLoading = false;
				state.singleBlog = action.payload;
			})
			.addCase(fetchSingleBlog.rejected, (state, action) => {
				state.isLoading = false;
				state.singleBlog = {};
				state.isError = true;
				state.error = action.error?.message;
			});

		// .addCase(updateSaveBlogPatch.pending, (state) => {
		// 	state.isError = false;
		// 	state.isLoading = true;
		// })
		// .addCase(updateSaveBlogPatch.fulfilled, (state, action) => {
		// 	state.isLoading = false;
		// 	state.error = null;
		// })
		// .addCase(incrementLikesPatch.pending, (state, action) => {
		// 	state.isLoading = true;
		// 	state.isError = false;
		// })
		// .addCase(incrementLikesPatch.fulfilled, (state, action) => {
		// 	state.isLoading = false;
		// 	state.error = null;
		// });
	},
});

export default singleBlogSlice.reducer;
export const { saved, incrementLike } = singleBlogSlice.actions;
