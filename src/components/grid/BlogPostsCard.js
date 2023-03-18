import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogPostCardItem from "./BlogPostCardItem";
import { fetchBlogs } from "../../features/blogs/blogsSlice";
import Loading from "../ui/Loading";

const BlogPostsCard = () => {
	const { blogs, isLoading, isError, error } = useSelector(
		(state) => state.blogs
	);
	const { selectSort } = useSelector((state) => state.filter);
	console.log(selectSort);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchBlogs());
	}, [dispatch]);
	let content;
	if (isLoading) content = <Loading />;
	if (!isLoading && isError)
		content = <div className="col-span-12">{error}</div>;
	if (!isError && !isLoading && blogs.length === 0) {
		content = <div className="col-span-12">No videos found!</div>;
	}

	if (!isError && !isLoading && blogs.length > 0) {
		content = blogs.map((blog) => (
			<BlogPostCardItem key={blog.id} blog={blog} />
		));
	}

	return (
		<main className="post-container" id="lws-postContainer">
			{content}
		</main>
	);
};

export default BlogPostsCard;
