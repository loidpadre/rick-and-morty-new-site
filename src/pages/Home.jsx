import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import SectionImage from '../components/SectionImage'
import axios from 'axios'

export default function Home() {
	const [data, setData] = useState([])

	const getData = async () => {
		const response = await axios.get(
			'https://rickandmortyapi.com/api/character'
		)
		setData(response.data.results)
		console.log(data)
	}

	useEffect(() => {
		getData()
	}, [])
	return (
		<div>
			<Header />
			<Section />
			<SectionImage data={data} />
		</div>
	)
}
