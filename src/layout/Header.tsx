import { Link, useLocation } from "react-router-dom";

type Props = {};

// import { useLocation } from "react-router-dom";

// export default function MenuList({ data }) {
// 	const { pathname } = useLocation();
// 	return (
// 		<div className="">
// 			<MenuItem
// 				to={data.to}
// 				text={data.text}
// 				icon={data.icon}
// 				active={pathname === data.to}
// 			/>
// 		</div>
// 	);
// }

export default function Header({}: Props) {
	const { pathname } = useLocation();

	// console.log(pathname);

	return (
		<header className="fixed w-full mx-auto p-[20px]  z-30">
			<ul className="backdrop-blur-lg no-underline list-none w-[300px] h-[50px] flex justify-between mx-auto gap-2 p-1 rounded-full bg-four/50">
				<Link
					to={`/`}
					className={`${
						pathname === "/" && "bg-primary"
					} no-underline text-black w-full rounded-full flex items-center justify-center p-4 cursor-pointer`}
				>
					Home
				</Link>
				<Link
					to={`/profile`}
					className={`${
						pathname === "/profile" && "bg-primary"
					}  no-underline text-black w-full rounded-full flex items-center justify-center p-4 cursor-pointer`}
				>
					Profile
				</Link>
				<Link
					to={`/contact`}
					className={`${
						pathname === "/contact" && "bg-primary"
					}  no-underline text-black w-full rounded-full flex items-center justify-center p-4 cursor-pointer`}
				>
					Contact
				</Link>
			</ul>
		</header>
	);
}
