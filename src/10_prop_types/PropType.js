import React, { useState, useEffect } from "react";
import Product from "./Product";
import { useFetch } from "../9_custom_hooks/useFetch";
const url = "https://course-api.netlify.app/api/javascript-store-products";

const PropType = () => {
	const { products } = useFetch(url);
	return (
		<div>
			<h2>PropTypes</h2>
			<section className="products">
				<h4>Products</h4>
				{products.map((product) => {
					return <Product key={product.id} {...product} />;
				})}
			</section>
		</div>
	);
};

export default PropType;
