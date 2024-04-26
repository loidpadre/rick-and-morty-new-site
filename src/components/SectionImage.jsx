import { useState } from 'react'

export default function SectionImage({ data }) {
	const [open, setOpen] = useState(false)

	const showInfo = () => {
		setOpen(!open)
	}
	return (
		<div className="px-40 py-20">
			<div className="grid grid-cols-4 gap-5">
				{data.map((info, index) => (
					<div key={index} className="cursor-pointer">
						<div
							className="w-[300px] h-[300px] rounded mb-5"
							style={{ backgroundImage: `url(${info.image})` }}
						>
							<div
								className={`${
									open ? '' : 'hidden'
								} bg-black/50 w-full h-full p-5`}
							>
								<h1>Status: {info.status}</h1>
								<h1>Specie: {info.species}</h1>
								<h1>localization: {info.location.name}</h1>
							</div>
						</div>
						<div>
							<h1 className="text-zinc-400">{info.name}</h1>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
