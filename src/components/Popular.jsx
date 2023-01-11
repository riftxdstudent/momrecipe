import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const apiKey = await fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=0b8d7edba3b64eb98854bc15c26cb020&number=9"
    );
    const data = await apiKey.json();
    console.log(data.recipes);
    setPopular(data.recipes);
  };

  return (
    <div>
      <div
        className="Wrapper 
	  my-16 
	  mx-0">
        <h3
          className="sectionTitle 
		font-bold 
		text-2xl">
          Trending Picks
        </h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}>
          {popular.map((recipe) => {
            return (
              <SplideSlide>
                <div
                  className="Card 
				min-h-25rem 
				rounded-3xl 
				overflow-hidden 
				relative">
                  <p
                    className="Title 
				  absolute 
				  z-10 
				  left-2/4 
				  bottom-0 
				  transform translate-x-2/4 translate-y-2/4 
				  text-white 
				  font-semibold 
				  text-base 
				  h-2/6 
				  flex 
				  items-center">
                    {recipe.title}
                  </p>
                  <img
                    className="Image 
					rounded-4xl 
					absolute 
					left-0 
					w-full 
					h-full 
					object-cover"
                    src={recipe.image}
                    alt={recipe.title}
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

/* Wrapper : 
	margin: 4rem 0
	
	Card :
	min-height: 25rem
	border-radius: 2rem
	overflow: hidden
	position: relative
	
	img :
	border-radius: 2rem
	position: absolute
	left: 0
	width: 100%
	height: 100%
	object-fit: cover
	
	p :
	position: absolute
	z-index: 10
	left: 50%
	bottom: 0%
	transform: translate(-50%, 0%)
	color: white
	width: 100%
	text-align: center
	font weight: 600
	font-size: 1rem
	height: 40%
	display: flex
	align-items: center*/

export default Popular;
