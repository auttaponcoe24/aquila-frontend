import { useEffect } from "react";
import { useDataContext } from "../hooks/use-Context";
import CardList from "../components/CardList";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

type Props = {};

export default function HomePage({}: Props) {
	const { fetchData, getData }: any = useDataContext();

	useEffect(() => {
		fetchData();
	}, []);

	// console.log(getData);

	return (
		<>
			<div className="flex flex-col mx-[10%]">
				<div className="h-[424px] flex flex-col items-center justify-center gap-10 mt-[10%]">
					<motion.h1
						variants={fadeIn("up", 0.2)}
						initial={{ y: 80, opacity: 0 }}
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="my-4 md:w-[600px] md:text-6xl lg:w-[700px] lg:text-7xl  font-normal text-center"
					>
						A brand and product designer working with clients
						globally
					</motion.h1>

					<motion.div
						variants={fadeIn("up", 0.2)}
						initial={{ y: 80, opacity: 0 }}
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="hidden md:block"
					>
						<ul className="flex items-center justify-center gap-4">
							<li className=" py-2 px-2 rounded-full">
								Expertise
							</li>
							<li className="bg-four py-2 px-2 rounded-full">
								Branding
							</li>
							<li className="bg-four py-2 px-2 rounded-full">
								Product
							</li>
							<li className="bg-four py-2 px-2 rounded-full">
								Design Systems
							</li>
						</ul>
					</motion.div>
				</div>

				<div className="grid grid-cols-1 justify-items-center items-center md:grid-cols-2 gap-4 mx-auto my-4">
					{getData.map((item: any) => (
						<CardList key={item.id} data={item} />
					))}
				</div>

				<motion.div
					variants={fadeIn("up", 0.2)}
					initial={{ y: 80, opacity: 0 }}
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className="h-[280px] flex items-center justify-center mt-10"
				>
					<div className="w-full mx-10">
						<h1 className="lg:text-6xl font-normal text-center">
							Let's work together.
						</h1>
						<h2 className="text-center">
							<a
								href="mailto:oli@oh.studio"
								target="_blank"
								rel="noopener noreferrer"
								className="lg:text-5xl text-th font-normal text-center"
							>
								Get in touch.
							</a>
						</h2>
					</div>
				</motion.div>
				<button className="sticky bottom-10 bg-black text-primary flex gap-4 items-center justify-center mx-auto py-3 px-4 rounded-full border-none cursor-pointer">
					<img
						src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20d%3D%22M%206%200%20L%206%2012%20M%200%206%20L%2012%206%20M%201.757%201.758%20L%2010.243%2010.242%20M%201.758%2010.243%20L%2010.242%201.757%22%20fill%3D%22transparent%22%20stroke-width%3D%221.45%22%20stroke%3D%22rgb(255%2C255%2C255)%22%20stroke-miterlimit%3D%2210%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
						alt=""
						className="w-3 h-3"
					/>
					<div>Shop</div>
				</button>
			</div>
		</>
	);
}
