import React, { useEffect, useState } from 'react'

function Popular() {
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		getPopular();
	}, []);

	const getPopular = async () => {
		const apiKey = await fetch(
			'https://api.spoonacular.com/recipes/random?apiKey=bc933957a610472990c29ce6610013c1&number=9'
		);
		const data = await apiKey.json();
		setPopular(data.recipes);
	}

	return (
		<div>
			{popular.map(recipe => {
				return(
					<div key={recipe.id}>
						<p>{recipe.title}</p>
					</div>
				);
			})}
		</div>
	);
}

export default Popular