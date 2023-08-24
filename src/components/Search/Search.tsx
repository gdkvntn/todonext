import { SearchProps } from "./Search.props";
import SearchIcon from "../../image/svg/SearchIcon.svg";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute top-4 left-4">
        <SearchIcon />
      </div>

      <input
        className=" bg-gray-300 py-4 w-full pl-16 text-white text-lg placeholder:text-gray-200"
        placeholder="Seach tasks"
        {...props}
      ></input>
    </div>
  );
};
