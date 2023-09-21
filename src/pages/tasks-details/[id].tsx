import ArrowIcon from "@/image/svg/ArrowLeftIcon.svg";
import EditIcon from "@/image/svg/EditIcon.svg";
import CalendarIcon from "@/image/svg/CalendarIcon.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Button } from "@/components";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { supabase } from "@/supabaseClient";
import Loader from "@/components/Loader/Loader";
import { useState } from "react";
import { ParsedUrlQuery } from "querystring";
import { Modal } from "@/components/Modal/Modal";

export default function TaskDetails() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const router = useRouter();
  const { id }: ParsedUrlQuery = router.query;

  const { data, isLoading } = useQuery("task", async () => {
    if (router.isReady) {
      const { data, error } = await supabase
        .from("todos")
        .select()
        .eq("id", id);
      if (!!error) {
        console.log(new Error(error.message));
      }
      return data;
    }
  });

  return (
    <>
      {openModal ? <Modal id={id} setOpenModal={setOpenModal} /> : null}
      {isLoading ? (
        <Loader />
      ) : !!data ? (
        <div className=" p-10 text-white stroke-white ">
          <header className="flex justify-between">
            <ArrowIcon
              onClick={() => router.back()}
              className=" active:stroke-yellow transition"
            />
            <h3 className=" text-xl">Task Details</h3>
            <EditIcon className=" active:stroke-yellow transition" />
          </header>
          <main className=" mt-14">
            <h2 className=" font-mono text-2xl font-semibold">
              {data[0].title}
            </h2>
            <div className="flex gap-4 items-center mt-7">
              <div className="flex justify-center items-center bg-yellow w-12 h-12">
                <CalendarIcon className="stroke-black-100" />
              </div>
              <div>
                <p className=" text-gray-100 text-xs">Due Date</p>
                <p>{data[0].date}</p>
              </div>
            </div>
            <h2 className=" text-lg font-semibold mt-7">Project Details</h2>
            <p className="text-xs text-gray-100 mt-2">{data[0].text}</p>
            <div className="flex items-center justify-between  mt-5">
              <h2 className=" text-lg font-semibold">Project Progress</h2>
              <div className=" w-14 h-14">
                <CircularProgressbar
                  className="text-white"
                  value={66}
                  text="60%"
                  strokeWidth={4}
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "#FED36A",
                    trailColor: "#2C4653",
                  })}
                />
              </div>
            </div>
            <div className=" mt-9 mb-28">
              <h2 className=" text-lg font-semibold">All Tasks</h2>
              <ul>
                <li className=" flex items-center justify-between p-3 bg-gray-300 ">
                  <p className=" text-lg">User Interviews</p>
                  <div className="flex justify-center items-center bg-yellow w-10 h-10">
                    <input
                      type="checkbox"
                      id="some_id"
                      className="
              relative peer shrink-0
              appearance-none w-6 h-6 border-2 border-black-200 rounded-full bg-yellow"
                    />
                    <label htmlFor="some_id"></label>
                    <svg
                      className="
              absolute 
              w-4 h-4 mt-1
              hidden peer-checked:block
              pointer-events-none stroke-black-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 4 22 22"
                      fill="none"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="18 8 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center fixed bottom-0 left-0 w-full h-28 bg-black-100 ">
              <Button
                className=" max-w-xs h-14 text-black-200"
                appearance="primary"
                onClick={() => setOpenModal(true)}
              >
                Add Task
              </Button>
            </div>
          </main>
        </div>
      ) : null}
    </>
  );
}
