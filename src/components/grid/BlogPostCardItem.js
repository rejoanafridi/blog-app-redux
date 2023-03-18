import React from "react";
import { Link } from "react-router-dom";
const BlogCardItem = ({ blog }) => {
	const { id, title, createdAt, image, likes, isSaved, tags } = blog;
	return (
		<div className="lws-card">
			<Link to={`/post/${id}`}>
				<img src={image} className="lws-card-image" alt="" />
			</Link>
			<div className="p-4">
				<div className="lws-card-header">
					<p className="lws-publishedDate">{createdAt}</p>
					<p className="lws-likeCount">
						<i className="fa-regular fa-thumbs-up" />
						{likes}
					</p>
				</div>
				<Link to={`/post/${id}`} className="lws-postTitle">
					{title}
				</Link>
				<div className="lws-tags">
					{tags?.map((tag, id) => (
						<span key={id}>#{tag}</span>
					))}
				</div>
				{/* Show this element if post is saved */}
				<div className="flex gap-2 mt-4">
					<span className="lws-badge"> {isSaved ? `Saved` : `Not Saved`} </span>
				</div>
				{/* Show this element if post is saved Ends */}
			</div>
		</div>
	);
};

export default BlogCardItem;
