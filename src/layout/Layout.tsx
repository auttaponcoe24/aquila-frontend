import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

type Props = {};

export default function Layout({}: Props) {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
