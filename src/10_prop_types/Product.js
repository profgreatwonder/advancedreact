import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../images/barter.jpg";
const Product = ({ image, name, price }) => {
	const url = image && image.url;
	return (
		<div>
			<article className="product">
				{/* when working with API, it is sometimes possible to run into situations where some values are missing. In such cases, we want to dynamically present the data using PropTypes*/}
				<img src={url || defaultImage} alt={name || "default name"} />
				<h3>{name}</h3>
				<p>${price}</p>
			</article>
		</div>
	);
};

Product.propTypes = {
	image: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
// 	name: "default name",
// 	price: 3.99,
// 	image: defaultImage,
// };
// instead of using this code, we could instead use the conditionals to deal with it
export default Product;
