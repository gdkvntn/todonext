import Image from "next/image";
import { User, PostgrestSingleResponse } from "@supabase/supabase-js";
import { Search } from "@/components/Search/Search";
import { HomeSwiper } from "../Swiper/HomeSwiper";
import OngoingCard from "@/components/OngoingCard/OngoingCard";
import { Aside } from "@/layout/Aside";
import { useRouter } from "next/navigation";
import { supabase } from "@/supabaseClient";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { TaskProps } from "@/types";
import Loader from "../Loader/Loader";

export interface UserProps {
  user: User;
}

export default function HomeScreen({ user }: UserProps) {
  const { user_metadata } = user;
  const [completedTasks, setCompletedTasks] = useState<TaskProps[] | []>([]);
  const [tasks, setTasks] = useState<any[] | null>([]);
  const router = useRouter();
  const img = false;

  const { data, error, isLoading } = useQuery("tasks", async () => {
    const { data } = await supabase
      .from("todos")
      .select("*")
      .order("id", { ascending: true });
    setTasks(data);
    return data;
  });
  if (error) {
    console.log("oops");
  }

  const back = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  useEffect(() => {
    if (!tasks) {
      return;
    }
    const setTasks = tasks.filter((el) => el.progress === 100);
    setCompletedTasks(setTasks);
  }, [tasks]);

  const SearchTasks = (text: string) => {
    if (!tasks || !data) {
      return;
    }
    console.log(data);
    if (text.length === 0) {
      setTasks(data);
    } else {
      const filteredTasks = data.filter((el) => el.title.includes(text));
      setTasks(filteredTasks);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <div>
        <header className="flex justify-between px-6  pt-6">
          <button className=" text-white " onClick={back}>
            Back
          </button>
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
            <Search SearchTasks={SearchTasks} />
          </div>

          <div>
            <div className=" flex justify-between mt-9 px-6">
              <h2 className="font-semibold text-xl ">Completed Tasks</h2>
              <span className=" text-yellow">See All</span>
            </div>
            <div className="pl-6">
              <HomeSwiper completedTasks={completedTasks} />
            </div>
            <div className="px-6">
              <div className=" flex justify-between mt-9 ">
                <h2 className="font-semibold text-xl ">Ongoing Projects</h2>
                <span className=" text-yellow">See All</span>
              </div>
              <div>
                {tasks &&
                  tasks.map((task) => {
                    return (
                      <OngoingCard
                        key={task.id}
                        title={task.title}
                        date={task.date}
                        id={task.id}
                        progress={task.progress}
                      />
                    );
                  })}
              </div>
            </div>
            <Aside />
          </div>
        </main>
      </div>
    </>
  );
}
