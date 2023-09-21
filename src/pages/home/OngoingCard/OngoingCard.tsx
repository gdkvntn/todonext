import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { OngoingCardProps } from "./OngoingCard.props";
import { useRouter } from "next/navigation";

export default function OngoingCard({ title, date, id }: OngoingCardProps) {
  const router = useRouter();

  const openTask = () => {
    router.push(`/tasks-details/${id}`);
  };

  return (
    <div
      onClick={openTask}
      className=" p-3 bg-gray-300 transition ease-in-out delay-1 active:-translate-y-1 active:scale-110 active:opacity-70 duration-300 mt-4"
    >
      <h3 className=" font-mono text-2xl leading-6">{title}</h3>
      <div className="flex justify-between items-end">
        <div className="flex justify-between">
          <span className=" text-xs">Due on : {date}</span>
        </div>
        <div className=" w-14 h-14">
          <CircularProgressbar
            className="text-white"
            value={66}
            text="66%"
            strokeWidth={4}
            styles={buildStyles({
              textColor: "white",
              pathColor: "#FED36A",
              trailColor: "#212832",
            })}
          />
        </div>
      </div>
    </div>
  );
}
