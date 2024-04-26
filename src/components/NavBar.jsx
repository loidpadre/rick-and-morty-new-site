export default function NavBar() {
	return (
		<div className="flex justify-between items-center fixed px-12 py-5 bg-cover w-full">
			<div>
				<img
					className="w-40"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"
					alt=""
				/>
			</div>
			<div>
				<ul className="flex gap-5 text-gray-300">
					<li className="cursor-pointer border-b border-transparent transition duration-200 hover:border-green-600 hover:transition hover:duration-200">
						HOME
					</li>
					<li className="cursor-pointer border-b border-transparent transition duration-200 hover:border-green-600 hover:transition hover:duration-200">
						ABOUT
					</li>
					<li className="cursor-pointer border-b border-transparent transition duration-200 hover:border-green-600 hover:transition hover:duration-200">
						CONTACT
					</li>
					<li className="cursor-pointer border-b border-transparent transition duration-200 hover:border-green-600 hover:transition hover:duration-200">
						FAQ
					</li>
				</ul>
			</div>
		</div>
	)
}
