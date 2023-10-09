import ArrowIcon from "@/image/svg/ArrowLeftIcon.svg";
import EditIcon from "@/image/svg/EditIcon.svg";
import CalendarIcon from "@/image/svg/CalendarIcon.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Button } from "@/components";
import { useRouter } from "next/router";
import {
  UseMutateFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { supabase } from "@/supabaseClient";
import Loader from "@/components/Loader/Loader";
import { useEffect, useState } from "react";
import { ParsedUrlQuery } from "querystring";
import { Modal } from "@/components/Modal/Modal";
import { resolve } from "path";
import { percentage } from "@/utils/percentage";

interface TodoProps {
  date: string;
  id: number;
  is_complete: boolean;
  text: string;
  time: string;
  title: string;
  user_id: string;
  progress: string;
}

export default function TaskDetails() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [todo, setTodo] = useState<any[] | null>();
  const [microTasks, setMicroTasks] = useState<any[] | null>();
  const router = useRouter();
  const { id }: ParsedUrlQuery = router.query;
  const client = useQueryClient();

  const { isLoading } = useQuery("micro_tasks", async () => {
    if (router.isReady) {
      const todo = await supabase.from("todos").select().eq("id", id);

      const micro_tasks = await supabase
        .from("micro_tasks")
        .select("*")
        .eq("todo_id", id)
        .order("id", { ascending: true });
      if (todo.error != null || micro_tasks.error != null) {
        console.log(new Error("Error"));
      }
      setTodo(todo.data);
      setMicroTasks(micro_tasks.data);
    }
  });

  const { mutate } = useMutation({
    mutationFn: async () => {
      const micro_tasks = await supabase
        .from("micro_tasks")
        .select("*")
        .eq("todo_id", id);
      if (!micro_tasks.data || micro_tasks.data == null) {
        console.log(new Error("Error"));
      } else {
        const percent = percentage(micro_tasks.data);
        const { error } = await supabase
          .from("todos")
          .update({ progress: percent })
          .eq("id", id);

        if (error != null) {
          console.log(error.message);
        }
      }
    },
    onSuccess: () => {
      client.invalidateQueries("micro_tasks");
    },
  });

  return (
    <>
      {openModal ? <Modal id={id} setOpenModal={setOpenModal} /> : null}
      {isLoading ? (
        <Loader />
      ) : !!todo ? (
        <div className=" p-10 text-white stroke-white ">
          <header className="flex justify-between">
            <ArrowIcon
              onClick={() => router.back()}
              className=" active:stroke-yellow transition"
            />
            <h3 className=" text-xl">todo Details</h3>
            <EditIcon className=" active:stroke-yellow transition" />
          </header>
          <main className=" mt-14">
            <h2 className=" font-mono text-2xl font-semibold">
              {todo[0].title}
            </h2>
            <div className="flex gap-4 items-center mt-7">
              <div className="flex justify-center items-center bg-yellow w-12 h-12">
                <CalendarIcon className="stroke-black-100" />
              </div>
              <div>
                <p className=" text-gray-100 text-xs">Due Date</p>
                <p>{todo[0].date}</p>
              </div>
            </div>
            <h2 className=" text-lg font-semibold mt-7">Project Details</h2>
            <p className="text-xs text-gray-100 mt-2">{todo[0].text}</p>
            <div className="flex items-center justify-between  mt-5">
              <h2 className=" text-lg font-semibold">Project Progress</h2>
              <div className=" w-14 h-14">
                <CircularProgressbar
                  className="text-white"
                  value={+todo[0].progress}
                  text={`${todo[0].progress}%`}
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
              <ul className="flex flex-col gap-4 mt-4">
                {microTasks?.map((el) => {
                  return (
                    <Card
                      key={el.id}
                      id={el.id}
                      tasks={el.tasks}
                      completed={el.is_completed}
                      microTasks={microTasks}
                      todoId={id}
                      mutate={mutate}
                    />
                  );
                })}
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

const Card = ({
  tasks,
  completed,
  id,
  microTasks,
  todoId,
  mutate,
}: {
  tasks: string;
  completed: boolean;
  id: number;
  microTasks: any[];
  todoId: string | string[] | undefined;
  mutate: UseMutateFunction<void, unknown, void, unknown>;
}) => {
  const [checked, setChecked] = useState<boolean>(completed);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = () => {
    setChecked((checked) => !checked);
    setLoading(true);
  };

  useEffect(() => {
    async function changeCompleted() {
      const checkedValueToSend = checked;

      const { error } = await supabase
        .from("micro_tasks")
        .update({ is_completed: checkedValueToSend })
        .eq("id", id);

      if (error != null) {
        console.log(error.message);
        setChecked(!checkedValueToSend);
      }
      mutate();
    }

    changeCompleted();

    setLoading(false);
  }, [checked]);

  return (
    <>
      {loading ? <Loader /> : null}
      <li className=" flex items-center gap-4 justify-between p-3 bg-gray-300 ">
        <p className=" text-lg break-all ">{tasks}</p>
        <div className="flex justify-center items-center bg-yellow min-w-[40px] h-10">
          <input
            type="checkbox"
            id="some_id"
            checked={checked}
            onChange={handleChange}
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
    </>
  );
};
