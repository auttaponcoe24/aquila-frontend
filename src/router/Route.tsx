import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../page/HomePage";
import ContactPage from "../page/ContactPage";
import ProfilePage from "../page/ProfilePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "", element: <HomePage /> },
			{ path: "profile", element: <ProfilePage /> },
			{ path: "contact", element: <ContactPage /> },
		],
	},
]);

export default function Route() {
	return <RouterProvider router={router} />;
}
