import axios from "../../utils/axios";

export const getBlogs = async (selectSort) => {
	let queryString = "";
	if (selectSort === "saved") {
		queryString += `&isSaved=true`;
	}

	if (selectSort === "newest") {
		queryString += `&_sort=createdAt&_order=desc`;
	}
	if (selectSort === "most_liked") {
		queryString += `&_sort=likes&_order=desc`;
	}

	const response = await axios.get(`/blogs/?${queryString}`);

	return response.data;
};
