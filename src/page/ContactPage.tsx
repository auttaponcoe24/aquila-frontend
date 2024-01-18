import { motion } from "framer-motion";
import { fadeIn } from "../variants";

type Props = {};

export default function ContactPage({}: Props) {
	return (
		<motion.div
			variants={fadeIn("up", 0.2)}
			initial={{ y: 80, opacity: 0 }}
			whileInView={"show"}
			viewport={{ once: false, amount: 0.7 }}
			className="h-[80vh] md:h-[90vh] flex items-center justify-center"
		>
			<div className="w-full mx-10">
				<h1 className="text-4xl md:text-6xl font-normal text-center">
					Let's work together.
				</h1>
				<h2 className="text-center">
					<a
						href="mailto:oli@oh.studio"
						target="_blank"
						rel="noopener noreferrer"
						className="text-4xl md:text-5xl text-th font-normal text-center"
					>
						Get in touch.
					</a>
				</h2>
			</div>
		</motion.div>
	);
}
