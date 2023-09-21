import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export const HomeSwiper = () => {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "free",
    rtl: false,
    slides: { perView: "auto", spacing: 7 },
  });

  return (
    <div ref={sliderRef} className="keen-slider mt-3">
      <div
        className="keen-slider__slide bg-gray-300 text-white p-3 h-44 flex flex-col justify-between
        transition ease-in-out delay-1 active:-translate-y-1 active:bg-yellow active:opacity-90 duration-30"
        style={{ maxWidth: 185, minWidth: 185 }}
      >
        <h3 className=" font-mono text-2xl leading-6">
          Real Estate Website Design
        </h3>
        <div>
          <div className="flex justify-between">
            <span className=" text-xs">Completed</span>
            <span className=" text-xs text-right">100%</span>
          </div>
          <div className=" w-full h-1 bg-white rounded mt-1"></div>
        </div>
      </div>
      <div
        className="keen-slider__slide bg-gray-300 text-white p-3 h-44 flex flex-col justify-between
        transition ease-in-out delay-1 active:-translate-y-1 active:bg-yellow active:opacity-90 duration-30"
        style={{ maxWidth: 185, minWidth: 185 }}
      >
        <h3 className=" font-mono text-2xl leading-6">
          Real Estate Website Design
        </h3>
        <div>
          <div className="flex justify-between">
            <span className=" text-xs">Completed</span>
            <span className=" text-xs text-right">100%</span>
          </div>
          <div className=" w-full h-1 bg-white rounded mt-1"></div>
        </div>
      </div>
      <div
        className="keen-slider__slide bg-gray-300 text-white p-3 h-44 flex flex-col justify-between
        transition ease-in-out delay-1 active:-translate-y-1 active:bg-yellow active:opacity-90 duration-30"
        style={{ maxWidth: 185, minWidth: 185 }}
      >
        <h3 className=" font-mono text-2xl leading-6">
          Real Estate Website Design
        </h3>
        <div>
          <div className="flex justify-between">
            <span className=" text-xs">Completed</span>
            <span className=" text-xs text-right">100%</span>
          </div>
          <div className=" w-full h-1 bg-white rounded mt-1"></div>
        </div>
      </div>
    </div>
  );
};
