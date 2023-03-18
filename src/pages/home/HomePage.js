import React from "react";
import Navbar from "../../components/navbar/Navbar";
import AsideFilter from "../../components/ui/AsideFilter";
import BlogPostsCard from "../../components/grid/BlogPostsCard";
const HomePage = () => {
	return (
		<section className="wrapper">
			<AsideFilter />
			<BlogPostsCard />
		</section>
	);
};

export default HomePage;
