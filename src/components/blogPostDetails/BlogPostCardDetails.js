import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Tags from "../ui/Tags";
import {
	fetchSingleBlog,
	incrementLike,
	incrementLikesPatch,
	saved,
	updateSaveBlogPatch,
} from "../../features/singleBlogs/singleBlogsSlice";

const BlogPostCardDetails = ({ blog }) => {
	const dispatch = useDispatch();

	const { id, image, isSaved, likes, title, tags, createdAt, description } =
		blog;

	// handle save btn
	const handleSaveBtn = (e) => {
		e.preventDefault();
		dispatch(saved(id, blog));
	};

	// handle like increment
	const handleLike = (e) => {
		e.preventDefault();
		dispatch(incrementLike(id, blog));
	};

	useEffect(() => {
		dispatch(updateSaveBlogPatch({ id, blog }));
		dispatch(incrementLikesPatch({ id, blog }));
	}, [dispatch, id, blog]);

	return (
		<main className="post">
			<img
				src={image}
				alt="githum"
				className="w-full rounded-md"
				id="lws-megaThumb"
			/>
			<div>
				<h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
					{title}
				</h1>
				<div className="tags" id="lws-singleTags">
					{tags?.map((tag, id) => (
						<Tags key={id} tag={tag} />
					))}
				</div>
				<div className="btn-group">
					{/* handle like on button click */}
					<button
						className="like-btn"
						id="lws-singleLinks"
						onClick={(e) => handleLike(e)}
					>
						<i className="fa-regular fa-thumbs-up" /> {likes}
					</button>
					{/* handle save on button click */}
					{/* use ".active" class and "Saved" text  if a post is saved, other wise "Save" */}
					<button
						onClick={handleSaveBtn}
						className=" save-btn"
						id="lws-singleSavedBtn"
					>
						{isSaved ? (
							<span className="active">
								<i className="fa-regular fa-bookmark" />
								<span>Saved</span>
							</span>
						) : (
							<div className="">
								<i className="fa-regular fa-bookmark" />
								<span>Save</span>
							</div>
						)}
					</button>
				</div>
				<div className="mt-6">
					<p>{description}</p>
				</div>
			</div>
		</main>
	);
};

export default BlogPostCardDetails;
