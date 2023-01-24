import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const checkStorage = localStorage.getItem("popular");

    if (checkStorage) {
      setPopular(JSON.parse(checkStorage));
    } else {
      const api = await fetch(
        'https://api.spoonacular.com/recipes/random?apiKey={process.env.REACT_APP_API_KEY}&number=9'  // <--- This is the line that needs to be changed
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      console.log(data.recipes);
      setPopular(data.recipes);
    }
  };

  return (
    <div>
      <div className="Wrapper my-16 mx-0">
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
              <SplideSlide key={recipe.id}>
                <div className="min-h-[25rem] rounded-3xl overflow-hidden relative">
                  <p className="Title absolute z-10 left-1/2 bottom-0 -translate-x-2/4 translate-y-0 h-2/5 text-white text-base text-center font-semibold w-full flex justify-center items-center">
                    {recipe.title}
                  </p>
                  <img
                    className="rounded-4xl absolute left-0 w-full h-full object-cover aspect-video"
                    src={recipe.image}
                    alt={recipe.title}
                  />
                  <div className="z-[3] absolute w-full h-full bg-gradient-to-b from-transparent to-gray-400"></div>
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
	align-items: center
	
	Gradient:
	z-index: 3
	position: absolute
	width: 100%
	height: 100%
	background: linear-gradient*/

export default Popular;
