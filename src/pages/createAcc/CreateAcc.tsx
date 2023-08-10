import LogoIcon from "../../image/svg/LogoIcon.svg";
import { IconEnum } from "@/components/Input/Input.props";
import { useState } from "react";
import EyeIcon from "../../image/svg/EyeIcon.svg";
import EyeslashIcon from "../../image/svg/EyeslashIcon.svg";
import GoogleIcon from "../../image/svg/GoogleIcon.svg";
import { Button, Input } from "@/components";

export default function CreateAcc(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passView, setPassView] = useState<boolean>(false);

  return (
    <div className="p-6 ">
      <LogoIcon className="w-32 h-24 m-auto" />
      <h1 className=" font-semibold text-2xl text-white mt-12">
        Create your account
      </h1>
      <Input
        className=" mt-6"
        label="Full Name"
        icon={IconEnum.createUser}
        placeholder="Fazil Laghari"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        className=" mt-6"
        label="Email Address"
        icon={IconEnum.User}
        placeholder="fazzzil72@gmail.com"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />
      <div className="relative">
        <Input
          className=" mt-7"
          label="Password"
          icon={IconEnum.Password}
          placeholder="●●●●●●●"
          type={passView ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passView ? (
          <EyeIcon
            className="absolute right-4 bottom-6"
            onClick={() => setPassView(!passView)}
          />
        ) : (
          <EyeslashIcon
            className="absolute right-4 bottom-6"
            onClick={() => setPassView(!passView)}
          />
        )}
      </div>

      <div className="flex gap-2 mt-4">
        <input
          type="checkbox"
          id="some_id"
          className="
    relative peer shrink-0
    appearance-none w-5 h-5 border-2 border-yellow rounded-md bg-background
    mt-1
     "
        />
        <label htmlFor="some_id" className=" text-sm leading-4 text-gray-100">
          I have read & agreed to DayTask{" "}
          <span className="text-yellow">Privacy Policy, Terms & Condition</span>
        </label>
        <svg
          className="
          absolute 
          w-5 h-5 mt-1
          hidden peer-checked:block
          pointer-events-none stroke-yellow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <Button appearance="primary" className=" mt-9">
        Sign Up
      </Button>
      <div className=" mt-8 flex items-center">
        <hr className=" border-gray-100 w-full" />
        <div className=" w-32 mx-2 text-gray-100 whitespace-nowrap">
          Or continue with
        </div>
        <hr className="border-gray-100 w-full" />
      </div>
      <Button
        className="flex items-center justify-center mt-8"
        appearance="ghost"
      >
        <GoogleIcon className=" inline-block" />
        <span className=" ml-3">Google</span>
      </Button>

      <p className=" text-center text-gray-100 mt-6">
        Already have an account?
        <span className=" text-yellow ml-1">Log In</span>
      </p>
    </div>
  );
}
