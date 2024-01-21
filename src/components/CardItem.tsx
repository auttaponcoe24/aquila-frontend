import { MdArrowOutward } from "react-icons/md";

type Props = {
	name: string;
	img: string;
};

export default function CardItem({ name, img }: Props) {
	return (
		<div className={`max-w-[800px] object-center cursor-pointer relative`}>
			<img
				src={img}
				alt={name}
				className="w-full max-h-[300px] object-cover rounded-xl"
			/>

			<div
				className={`opacity-0 hover:opacity-100 absolute top-0 left-0 transition ease-out delay-150 duration-300  md:hover:backdrop-blur-sm w-full h-full object-cover rounded-xl `}
			>
				<div className="hidden md:flex items-center justify-between mx-6 my-6">
					<div className={`text-primary`}>{name}</div>
					<div
						className={`bg-primary w-10 h-10 flex items-center justify-center rounded-full transition ease-in-out delay-150 `}
					>
						<MdArrowOutward size={15} />
					</div>
				</div>
			</div>
		</div>
	);
}
