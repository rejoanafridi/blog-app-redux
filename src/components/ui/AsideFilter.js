import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/blogs/blogsSlice";
import {
	fetchSortingBlogs,
	filterSelected,
} from "../../features/filters/filtersSlice";

const AsideFilter = () => {
	const dispatch = useDispatch();
	const { selectSort } = useSelector((state) => state.filter);

	const [inputFilter, setInputFilter] = useState("");
	const [sortInput, setSortInput] = useState("all");

	// handleSort button option
	const handleSort = (e) => {
		e.preventDefault();
		setSortInput(e.target.value);
	};
	useEffect(() => {
		dispatch(fetchBlogs(inputFilter));
	}, [dispatch, inputFilter]);

	useEffect(() => {
		// dispatch(filterSelected(sortInput));
		dispatch(fetchBlogs(sortInput));
	}, [dispatch, sortInput]);

	return (
		<aside>
			<div className="sidebar-items">
				<div className="sidebar-content">
					<h4>Sort</h4>
					<select
						name="sort"
						id="lws-sort"
						className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
						onChange={handleSort}
						value={sortInput}
					>
						<option value="all" defaultChecked>
							Default
						</option>
						<option value="newest">Newest</option>
						<option value="most_liked">Most Liked</option>
					</select>
				</div>
				<div className="sidebar-content">
					<h4>Filter</h4>
					<div className="radio-group">
						{/* handle filter on button click */}
						<div>
							<input
								type="radio"
								name="filter"
								id="lws-all"
								defaultChecked
								className="radio"
								value="all"
								onChange={(e) => setInputFilter(e.target.value)}
							/>
							<label htmlFor="lws-all">All</label>
						</div>
						<div>
							<input
								type="radio"
								name="filter"
								id="lws-saved"
								className="radio"
								value="saved"
								onChange={(e) => setInputFilter(e.target.value)}
							/>
							<label htmlFor="lws-saved">Saved</label>
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default AsideFilter;
