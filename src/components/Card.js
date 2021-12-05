import React from 'react'


import CardTop from './CardTop'
import CardBtn from './CardBtn'
import CardDetails from './CardDetails'
import CardFooter from './CardFooter'


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

