import {
	BrowserRouter as Router,
	HashRouter, // useful when you're running on a shared server
	MemoryRouter, // for testing purposes. will cause your url not to change
	StaticRouter, // useful for server side testing
	// NativeRouter, //used in react native
	Routes,
	Route,
	Link,
	useRoutes,
} from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import BookLayout from "./pages/BookLayout";
import BookRoutes from "./BookRoutes";

const MainApp = () => {
	// you can also store routes in javascript array
	// let element = useRoutes([
	// 	{
	// 		path: "/",
	// 		element: <Home />,
	// 	},

	// 	{
	// 		path: "*",
	// 		element: <BookList />,
	// 	},
	// 	// nested routes will look something like:
	// ]);
	return (
		<Router>
			{/* we can have multiple routes if we want. very useful in a place like the side nav where the content is different for different pages. */}
			{/* <Routes> */}
			<Routes location="/book">
				<Route path="/books" element={<h1>More Content</h1>} />{" "}
			</Routes>
			{/* <HashRouter> */}
			<nav>
				<Link to="/" style={{ display: "block" }}>
					{/* <Link to="/" replace style={{ display: "block" }}> */}
					{/* replace is useful for when you want to replace a link in history. e.g. when your user logs in and goes to maybe the dashboard, when the user goes back, you don't want to take them back to the login page */}
					{/* <Link to="/" reloadDocument style={{ display: "block" }}> */}
					{/* reloadDocument reloads the entire page when it is clicked on */}
					Home
				</Link>
				<Link to="/books">Books</Link>
			</nav>
			{/* how you call routes designed in an array */}
			{/* {element}  */}
			<Routes>
				<Route path="/" element={<Home />} />
				{/* method 1 */}
				{/* <Route path="/books" element={<BookList />} />
				<Route path="/books/:id" element={<Book />} />
				<Route path="/books/new" element={<NewBook />} /> */}

				{/* or */}

				{/* method 2 */}
				{/* <Route path="/books" element={<BookList />}>
					<Route path=":id" element={<Book />} />
					<Route path="new" element={<NewBook />} />
				</Route> */}

				{/* or (I prefer the method above) */}

				{/* method 3 */}
				{/* <Route path="/books" element={<BookLayout />}> */}
				{/* <Route element={<BookLayout />}> */}
				{/* the code above is used when we want to wrap routes that don't necessarily share the same route but want to share the same layout */}
				{/* <Route index element={<BookList />} />
					<Route path=":id" element={<Book />} />
                <Route path="new" element={<NewBook />} /> */}
				{/* </Route> */}

				{/* method 4: you can separate your routes into different files espiecially routes that are grouped together. instead of rendering the BookLayout, we now render the BookRoutes component we created. you need to add a /* at the end of the path. This means that it will match anything bearing /books. This doesn't solve the problem of the BookLayout not being rendered, so we go to the top of our BookRoutes and invoke BookLayout there*/}
				<Route path="/books/*" element={<BookRoutes />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
			{/* </HashRouter> */}
		</Router>
	);
};

export default MainApp;
