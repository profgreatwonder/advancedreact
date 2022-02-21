import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
const url = "https://course-api.netlify.app/api/javascript-store-products";

// custom hooks allows us to reuse the functionality such as fetching data, saving to local storage.
const CustomHooks = () => {
	const { loading, products } = useFetch(url);
	return (
		<div>
			<h2>{loading ? "loading..." : "data"}</h2>
		</div>
	);
};

export default CustomHooks;
