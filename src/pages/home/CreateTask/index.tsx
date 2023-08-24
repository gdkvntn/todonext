import ArrowIcon from "@/image/svg/ArrowLeftIcon.svg";
import { Button } from "@/components";
import { useState } from "react";
import { supabase } from "@/supabaseClient";
import { useQuery } from "react-query";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";
import { useRouter } from "next/navigation";

export default function CreateTask(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const router = useRouter();

  const { data, isLoading } = useQuery("user", async () => {
    return await supabase.auth.getUser();
  });

  const addTodo = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (title.length < 3) {
      alert("The title cannot be less than 3 characters");
    }
    if (text.length < 4) {
      alert("The details cannot be less than 4 characters");
    }
    if (isNaN(Date.parse(date))) {
      alert("Enter the correct date");
    }
    if (time === "") {
      alert("Enter the correct time");
    }

    if (data !== undefined) {
      let { error } = await supabase
        .from("todos")
        .insert({
          title: title,
          text: text,
          user_id: data.data.user?.id,
          time: time,
          date: date,
        })
        .single();
      router.back();
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className=" p-10 text-white stroke-white">
      {isLoading ? <Loader /> : null}
      <header className="flex justify-between items-center">
        <Link href="/">
          <ArrowIcon className=" active:stroke-yellow transition" />
        </Link>

        <h3 className=" text-xl">Create New Task</h3>
        <div className=" w-6"></div>
      </header>
      <main className="mt-10">
        <form onSubmit={addTodo}>
          <h2 className=" text-xl font-semibold">Task Title</h2>
          <input
            className=" bg-gray-300 h-12 px-6 w-full mt-2"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <h2 className=" text-xl font-semibold mt-7">Task Details</h2>

          <textarea
            className="bg-gray-300 w-full h-20 px-6 py-2 text-xs mt-6"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <h2 className=" text-xl font-semibold mt-7">Time & Date</h2>
          <div className="flex gap-2 mt-5 h-10">
            <div className="flex bg-gray-300 w-full justify-center">
              <input
                className=" flex gap-4 flex-row-reverse bg-gray-300"
                type="time"
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="flex  bg-gray-300 w-full justify-center">
              <input
                id="calendar"
                className="bg-gray-300"
                type="date"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <p className=" mt-12 text-center">Add new</p>

          <Button className="text-black-200 mt-10" appearance="primary">
            Create
          </Button>
        </form>
      </main>
    </div>
  );
}
