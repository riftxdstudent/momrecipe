import React, { useEffect, useState } from 'react'

function Popular() {
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		getPopular();
	}, []);

	const getPopular = async () => {
		const apiKey = await fetch(
			'https://api.spoonacular.com/recipes/random?apiKey=0b8d7edba3b64eb98854bc15c26cb020&number=9'
		);
		const data = await apiKey.json();
		console.log(data)
		setPopular(data.recipes);
	}

	return (
		<div>
			{popular.map((recipe) => {
				return (
					<div className='my-16 mx-0' key={recipe.id}>
						<h3>Popular Picks</h3>
					</div>
				);
			})}
		</div>
	);
}

export default Popular