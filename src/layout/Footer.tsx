type Props = {};

export default function Footer({}: Props) {
	return (
		<footer className="h-[20vh] md:h-[10vh] py-20 md:py-10  flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 mx-10">
			{/* left */}
			<div className="flex flex-col md:flex-row items-center justify-center gap-2">
				{/* <div className="w-6 h-6">
					<div className="bg-black/80 w-full h-full rounded-full"></div>
				</div> */}
				<img
					src="https://framerusercontent.com/images/vnj4xfujsIqj6glhDUe5Cv6U.jpg"
					alt="logo"
					className="w-10 h-10"
				/>
				<div>&copy; Oli Harris 2023</div>
			</div>
			{/* right */}
			<div>
				<ul className="flex items-center gap-4">
					<li>
						<a
							href="https://twitter.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-black cursor-pointer"
						>
							Twitter
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-black cursor-pointer"
						>
							Linkedin
						</a>
					</li>
					<li>
						<a
							href="mailto:oli@oh.studio"
							target="_blank"
							rel="noopener noreferrer"
							className="text-black cursor-pointer"
						>
							Mail
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
