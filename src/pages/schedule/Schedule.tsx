import ArrowIcon from "@/image/svg/ArrowLeftIcon.svg";
import AddIcon from "@/image/svg/AddIcon.svg";
import { Aside } from "@/layout/Aside";

export default function Schedule(): JSX.Element {
  return (
    <div className="p-10 text-white stroke-white">
      <header className="flex justify-between">
        <ArrowIcon className=" active:stroke-yellow transition" />
        <h3 className=" text-xl">Task Details</h3>
        <AddIcon className=" active:stroke-yellow transition" />
      </header>
      <main>
        <h2 className=" font-mono text-2xl font-semibold mt-10">November</h2>
        <div className="flex gap-4 mt-6">
          <div className="flex flex-col justify-center items-center bg-black-100 w-11 h-16 hover:bg-yellow hover:text-black-200">
            <p className=" text-lg">1</p>
            <p className=" text-xs">mon</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-black-100 w-11 h-16">
            <p className=" text-lg">1</p>
            <p className=" text-xs">mon</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-black-100 w-11 h-16">
            <p className=" text-lg">1</p>
            <p className=" text-xs">mon</p>
          </div>
        </div>
        <h2 className=" font-mono text-2xl font-semibold mt-8">
          Today’s Tasks
        </h2>
        <ul className="mt-6">
          <li className="flex  flex-col justify-center bg-black-100 h-16 px-6 border-l-[10px] border-yellow mt-4 hover:bg-yellow hover:text-black-200">
            <p className=" text-lg">User Interviews</p>
            <p className=" text-xs">16:00 - 18:30</p>
          </li>
          <li className="flex  flex-col justify-center bg-black-100 h-16 px-6 border-l-[10px] border-yellow mt-4 hover:bg-yellow hover:text-black-200">
            <p className=" text-lg">User Interviews</p>
            <p className=" text-xs">16:00 - 18:30</p>
          </li>
          <li className="flex  flex-col justify-center bg-black-100 h-16 px-6 border-l-[10px] border-yellow mt-4 hover:bg-yellow hover:text-black-200">
            <p className=" text-lg">User Interviews</p>
            <p className=" text-xs">16:00 - 18:30</p>
          </li>
        </ul>
        <Aside />
      </main>
    </div>
  );
}
