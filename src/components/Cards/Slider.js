import React, { useState } from "react";

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleSlideChange = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  return (
    <>
      <div className="carousel w-full slider-height">
        <div
          id="item1"
          className={`carousel-item w-full ${
            currentSlide === 1 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1RPf9R_e24f11HdWihNsSct-X30GIsmZRUgXh8kFw7g&s"
            className="w-full"
            alt=""
          />
        </div>
        <div
          id="item2"
          className={`carousel-item w-full ${
            currentSlide === 2 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNwMFTSzbivnXT4hZu25Fz6mzFmBxOAsSilxFRh9ckR7nW7U9G6spC6k7UOh-DhwvXbMk&usqp=CAU"
            className="w-full"
            alt=""
          />
        </div>
        <div
          id="item3"
          className={`carousel-item w-full ${
            currentSlide === 3 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Ftxt8_gzbC1f6xk4nXSmR9WIA_5cXcJc_3-aH0NHqyowIebYMUWMe1XD4_OSNjlNhJQ&usqp=CAU"
            className="w-full"
            alt=""
          />
        </div>
        <div
          id="item4"
          className={`carousel-item w-full ${
            currentSlide === 4 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://images.pexels.com/photos/4676400/pexels-photo-4676400.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <button onClick={() => handleSlideChange(1)} className="btn btn-xs">
          1
        </button>
        <button onClick={() => handleSlideChange(2)} className="btn btn-xs">
          2
        </button>
        <button onClick={() => handleSlideChange(3)} className="btn btn-xs">
          3
        </button>
        <button onClick={() => handleSlideChange(4)} className="btn btn-xs">
          4
        </button>
      </div>
    </>
  );
};
