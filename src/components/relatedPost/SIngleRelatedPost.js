import React from "react";
import { Link } from "react-router-dom";
import Tags from "../ui/Tags";
const SIngleRelatedPost = ({ blog }) => {
	const { id, image, createdAt, title, tags } = blog;
	return (
		<div className="card">
			<Link to={`/post/${id}`}>
				<img src={image} className="card-image" alt="" />
			</Link>
			<div className="p-4">
				<Link
					to={`/post/${id}`}
					className="text-lg post-title lws-RelatedPostTitle"
				>
					{title}
				</Link>
				<div className="mb-0 tags">
					{tags.map((tag, id) => (
						<Tags key={id} tag={tag} />
					))}
				</div>
				<p>{createdAt}</p>
			</div>
		</div>
	);
};

export default SIngleRelatedPost;
