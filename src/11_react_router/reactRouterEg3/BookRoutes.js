import React from "react";
import { Routes, Route } from "react-router-dom";
import Book from "./pages/Book";
import BookLayout from "./pages/BookLayout";
import BookList from "./pages/BookList";
import NewBook from "./pages/NewBook";

const BookRoutes = () => {
	return (
		<>
			{/* <BookLayout /> */}
			{/* or */}
			<Routes>
				<Route element={<BookLayout />}>
					<Route index element={<BookList />} />
					<Route path=":id" element={<Book />} />
					<Route path="new" element={<NewBook />} />
				</Route>
			</Routes>
		</>
	);
};

export default BookRoutes;
