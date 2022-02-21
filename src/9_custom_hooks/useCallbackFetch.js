import { useState, useEffect } from "react";

export const useCallbackFetch = (url) => {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);

	const getProducts = useCallbackFetch(async () => {
		const response = await fetch(url);
		const products = await response.json();
		setProducts(products);
		setLoading(false);
	}, [url]);

	useEffect(() => {
		getProducts();
	}, [url, getProducts]);

	return { loading, products };
};
