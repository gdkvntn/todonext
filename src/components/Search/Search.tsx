import { SearchProps } from "./Search.props";
import SearchIcon from "../../image/svg/SearchIcon.svg";
import { useRef, useState } from "react";

export const Search = ({
  className,
  SearchTasks,
  ...props
}: SearchProps): JSX.Element => {
  const icon = useRef<HTMLDivElement>(null);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={icon}
        className="absolute top-4 left-4 cursor-pointer stroke-gray-100"
      >
        <SearchIcon />
      </div>

      <input
        className=" bg-gray-300 py-4 w-full pl-16 text-white text-lg placeholder:text-gray-200 focus:outline-none focus:border-yellow border"
        placeholder="Seach tasks"
        onChange={(e) => SearchTasks(e.target.value)}
        onFocus={() =>
          icon.current ? (icon.current.style.stroke = "#FED36A") : null
        }
        onBlur={() => (icon.current ? (icon.current.style.stroke = "") : null)}
        {...props}
      ></input>
    </div>
  );
};
