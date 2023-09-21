import { Button, Input } from "@/components";
import { supabase } from "@/supabaseClient";
import { ParsedUrlQuery } from "querystring";
import { Dispatch, SetStateAction, useState } from "react";

interface TypeModal {
  id: string | string[] | undefined;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ id, setOpenModal }: TypeModal): JSX.Element => {
  const [text, setText] = useState<string>("");
  const createMicroTask = async () => {
    await supabase
      .from("todos")
      .update({ micro_tasks: { text: text, completed: false } })
      .eq("id", id);
  };
  return (
    <div className="absolute bg-black-100/75 w-full h-full top-0 left-0 flex justify-center items-center">
      <div className="bg-gray-300 w-96 h-60 rounded-lg p-4">
        <input
          className=" bg-black-100 h-12 px-6 w-full mt-2"
          type="text"
          placeholder="Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          onClick={createMicroTask}
          className="text-black-200 mt-10"
          appearance="primary"
        >
          Create
        </Button>
      </div>
    </div>
  );
};
