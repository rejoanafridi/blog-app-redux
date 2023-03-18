import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SIngleRelatedPost from "./SIngleRelatedPost";
import Loading from "../ui/Loading";
import { fetchRelatedBlog } from "../../features/relatedBlogs/relatedBlogsSlice";

const RelatedsPosts = ({ currentBlogId, tags }) => {
	const dispatch = useDispatch();
	const { relatedBlogs, isLoading, error, isError } = useSelector(
		(state) => state.relatedBlogs
	);
	useEffect(() => {
		dispatch(fetchRelatedBlog({ tags, id: currentBlogId }));
	}, [dispatch, tags, currentBlogId]);
	let content = null;

	if (isLoading) content = <Loading />;
	if (!isLoading && isError)
		content = <div className="col-span-12">{error}</div>;

	if (!isError && !isLoading && relatedBlogs?.length === 0)
		content = <div className="col-span-12">No related videos found</div>;

	if (!isError && !isLoading && relatedBlogs?.length > 0) {
		content = relatedBlogs.map((blog) => (
			<SIngleRelatedPost key={blog.id} blog={blog} />
		));
	}

	return <div className="space-y-4 related-post-container">{content}</div>;
};

export default RelatedsPosts;
