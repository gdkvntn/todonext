import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { TaskProps } from "@/types";
import { useRouter } from "next/navigation";

interface HomeSwiperProps {
  completedTasks: [] | TaskProps[];
}

export const HomeSwiper = ({ completedTasks }: HomeSwiperProps) => {
  const router = useRouter();

  const [sliderRef, internalSlider] = useKeenSlider({
    loop: false,
    mode: "free",
    rtl: false,
    slides: { perView: "auto", spacing: 7 },
  });

  useEffect(() => {
    internalSlider.current?.update();
  }, [completedTasks, internalSlider]);

  const openTask = (id: number) => {
    router.push(`/tasks-details/${id}`);
  };

  return (
    <>
      <div ref={sliderRef} className="keen-slider mt-3">
        {completedTasks.map((el, i) => (
          <div
            key={el.id + "" + i}
            className="keen-slider__slide bg-gray-300 text-white p-3 h-44 flex flex-col justify-between
     hover"
            style={{ maxWidth: 185, minWidth: 185 }}
            onClick={() => openTask(el.id)}
          >
            <h3 className=" font-mono text-2xl leading-6">{el.title}</h3>
            <div>
              <div className="flex justify-between">
                <span className=" text-xs">Completed</span>
                <span className=" text-xs text-right">100%</span>
              </div>
              <div className=" w-full h-1 bg-white rounded mt-1"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
