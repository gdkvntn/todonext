import { Button, Input } from "@/components";
import { supabase } from "@/supabaseClient";
import Close from "../../image/svg/CloseIcon.svg";
import { Dispatch, SetStateAction, useState } from "react";
import { useMutation, useQueryClient } from "react-query";

interface TypeModal {
  id: string | string[] | undefined;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ id, setOpenModal }: TypeModal): JSX.Element => {
  const [text, setText] = useState<string>("");
  const client = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async () => {
      await supabase.from("micro_tasks").insert({ tasks: text, todo_id: id });
    },
    onSuccess: () => {
      client.invalidateQueries("micro_tasks");
    },
  });

  const createMicroTask = async () => {
    mutate();
    setOpenModal(false);
  };

  return (
    <div className="absolute bg-black-100/75 w-full h-full top-0 left-0 flex justify-center items-center">
      <div className="bg-gray-300 w-96 h-60 rounded-lg p-4">
        <Close
          onClick={() => setOpenModal(false)}
          className=" fill-white text-right hover:cursor-pointer hover:opacity-70"
        />
        <input
          className=" bg-black-100 h-12 px-6 w-full mt-6 text-white"
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
