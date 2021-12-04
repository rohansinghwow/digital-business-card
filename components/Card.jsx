import React from 'react'


import CardTop from './components/CardTop'
import CardBtn from './components/CardBtn'
import CardDetails from './components/CardDetails'
import CardFooter from './components/CardFooter'


export default function Card(){

	return(

		<div className="card">

			<CardTop/>
			<CardBtn/>
			<CardDetails/>
			<CardFooter/>

		</div>

		)
}

