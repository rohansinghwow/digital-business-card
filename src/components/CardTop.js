import React from 'react';
import pic from '../pic.jpeg';


export default function CardTop(){

	return(

		<div className="card-top">
				<img className="card-img" src={pic} alt="main-pic"/>
				
				<p className="card-name bold p-light">Mr. Lion </p>
				<p className="card-title">Jungle Developer</p>
				<p className="email p-light">lions.website</p>

		</div>

		)

}