import { getBlogs } from "../blogs/blogsApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
	selectSort: "",
};

export const fetchSortingBlogs = createAsyncThunk(
	"sorting/fetchSortingBlogs",
	async (selectSort) => {
		const blog = await getBlogs(selectSort);
		return blog;
	}
);

const filtersSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		filterSelected: (state, action) => {
			state.selectSort = action.payload;
		},
		tagRemoved: (state, action) => {
			const indexToRemove = state.selectTags.indexOf(action.payload);

			if (indexToRemove !== -1) {
				state.selectSort.splice(indexToRemove, 1);
			}
		},
	},
});

export default filtersSlice.reducer;
export const { filterSelected, tagRemoved } = filtersSlice.actions;
