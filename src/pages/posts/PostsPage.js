import React, { useEffect } from "react";
import GoHome from "../../components/ui/GoHome";
import { useDispatch, useSelector } from "react-redux";
import BlogPostCardDetails from "../../components/blogPostDetails/BlogPostCardDetails";
import RelatedsPosts from "../../components/relatedPost/RelatedsPosts";
import { fetchSingleBlog } from "../../features/singleBlogs/singleBlogsSlice";

import { useParams } from "react-router-dom";
import Loading from "../../components/ui/Loading";
const PostsPage = () => {
	const dispatch = useDispatch();
	const {
		singleBlog: blog,
		isLoading,
		isError,
		error,
	} = useSelector((state) => state.blog);

	const { postId } = useParams();
	useEffect(() => {
		dispatch(fetchSingleBlog(postId));
	}, [dispatch, postId]);

	const { id, tags } = blog || {};
	// what to do
	let content;
	if (isLoading) content = <Loading />;
	if (!isLoading && isError)
		content = <div className="col-span-12">{error}</div>;
	if (!isError && !isLoading && !blog?.id) {
		content = <div className="col-span-12">No Video Found !!</div>;
	}

	if (!isError && !isLoading && blog?.id) {
		content = (
			<section className="post-page-container">
				<BlogPostCardDetails blog={blog} />

				<aside>
					<h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
						Related Posts
					</h4>
					<RelatedsPosts currentBlogId={id} tags={tags} />
				</aside>
			</section>
		);
	}

	return (
		<section className="wrapper">
			<GoHome />
			{content}
		</section>
	);
};

export default PostsPage;
