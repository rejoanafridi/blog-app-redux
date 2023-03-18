import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/blogs/blogsSlice";
import singleBlogReducer from "../features/singleBlogs/singleBlogsSlice";

import relatedBlogsReducer from "../features/relatedBlogs/relatedBlogsSlice";
import filterReducer from "../features/filters/filtersSlice";

export const store = configureStore({
	reducer: {
		blogs: blogsReducer,
		blog: singleBlogReducer,
		relatedBlogs: relatedBlogsReducer,
		filter: filterReducer,
	},
});
