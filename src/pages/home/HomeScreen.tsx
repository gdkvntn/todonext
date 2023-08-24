import Image from "next/image";
import { HomeProps } from "./HomeScreen.props";
import { Search } from "@/components/Search/Search";
import { HomeSwiper } from "./Swiper/HomeSwiper";
import OngoingCard from "./OngoingCard/OngoingCard";
import { Aside } from "@/layout/Aside";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";
import { useQuery } from "react-query";
import CreateTask from "./CreateTask";
import TaskDetails from "./task-details";

export default function HomeScreen({ data }) {
  const { user_metadata } = data;
  const router = useRouter();
  const img = false;
  const [openTask, setOpenTask] = useState<boolean>(false);

  const tasks = useQuery("tasks", async () => {
    return await supabase.from("todos").select("*").order("user_id");
  });

  const back = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };
  console.log(tasks);

  const a = () => {
    return <TaskDetails />;
  };

  return (
    <>
      {openTask ? (
        <TaskDetails openTask={setOpenTask} />
      ) : (
        <div>
          <header className="flex justify-between px-6  pt-6">
            <button onClick={back}>back</button>
            <div>
              <p className=" text-xs text-yellow">Welcome Back!</p>
              <p className=" font-mono text-2xl text-white">
                {user_metadata.name}
              </p>
            </div>
            {img ? (
              <Image src={"/"} width={48} height={48} alt="avatar" />
            ) : (
              <div className=" w-12 h-12 bg-black-100 rounded-full"></div>
            )}
          </header>
          <main className=" mt-9 text-white pb-28 ">
            <div className="px-6">
              <Search />
            </div>

            <div>
              <div className=" flex justify-between mt-9 px-6">
                <h2 className="font-semibold text-xl ">Completed Tasks</h2>
                <span className=" text-yellow">See All</span>
              </div>
              <div className="pl-6">
                <HomeSwiper />
              </div>
              <div className="px-6" onClick={() => setOpenTask(true)}>
                <div className=" flex justify-between mt-9 ">
                  <h2 className="font-semibold text-xl ">Ongoing Projects</h2>
                  <span className=" text-yellow">See All</span>
                </div>
                <div>
                  {tasks.data?.data?.map((task) => {
                    return (
                      <OngoingCard
                        key={task.id}
                        title={task.title}
                        date={task.date}
                      />
                    );
                  })}
                </div>
              </div>
              <Aside />
            </div>
          </main>
        </div>
      )}
    </>
  );
}
