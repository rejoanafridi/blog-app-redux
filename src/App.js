import React from "react";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import PostsPage from "./pages/posts/PostsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/post/:postId" element={<PostsPage />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
