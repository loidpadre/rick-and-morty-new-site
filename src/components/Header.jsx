import { FaStar } from 'react-icons/fa'
export default function Header() {
	return (
		<div
			className="bg-cover bg-center"
			style={{
				backgroundImage:
					"url('https://wallpapers.com/images/featured/rick-and-morty-cool-t3ynu5ly9m7jq6e2.jpg')"
			}}
		>
			<div className="p-40 w-full bg-black/60">
				<div className="w-1/2">
					<h1 className="text-5xl my-10 font-bold">Rick and Morty</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Vel nesciunt magnam at ipsam commodi officia maiores
						voluptate ad atque sunt, dolore nisi sequi deserunt
						facilis minima totam nulla repellat blanditiis iste
						magni, aliquam hic tempore fuga. Ullam nulla tempore
						iure reprehenderit consectetur quod? Magni eaque odio
						velit culpa nobis alias nostrum quia quo exercitationem
						excepturi perferendis vel, porro, eius facilis, possimus
						aperiam harum? Animi quod incidunt ipsam aspernatur
						laudantium porro, illo nesciunt? Ad quae tempore at.
						Dolore ratione ad enim facilis! Atque perspiciatis
						aliquid architecto commodi quia magnam in ipsum
						blanditiis enim, consectetur, amet, iste nemo. Dolorum
						voluptatum corporis consequatur?
					</p>
					<div className="flex gap-2 mt-5">
						{[...Array(5).keys()].map((index) => (
							<h1 className="text-yellow-500" key={index}>
								<FaStar />
							</h1>
						))}
					</div>
					<button className="px-8 rounded py-2 bg-green-600 mt-5">
						Explore
					</button>
				</div>
			</div>
		</div>
	)
}
