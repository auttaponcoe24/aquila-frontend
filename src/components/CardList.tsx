import CardItem from "./CardItem";

type Props = {
	data: any;
};

export default function CardList({ data }: Props) {
	return (
		<div className="flex flex-col gap-2 ">
			<CardItem name={data.id} img={data.url} />
			<p className="md:hidden">{data.id}</p>
		</div>
	);
}
