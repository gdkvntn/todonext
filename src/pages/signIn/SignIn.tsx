import { Input } from "@/components/Input/Input";
import LogoIcon from "../../image/svg/LogoIcon.svg";
import { IconEnum } from "@/components/Input/Input.props";
import { useState } from "react";
import EyeIcon from "../../image/svg/EyeIcon.svg";
import EyeslashIcon from "../../image/svg/EyeslashIcon.svg";
import GoogleIcon from "../../image/svg/GoogleIcon.svg";
import { Button } from "@/components";

export default function SignIn(): JSX.Element {
  const [mail, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passView, setPassView] = useState<boolean>(false);

  return (
    <div className="p-6 ">
      <LogoIcon className="w-32 h-24 m-auto" />
      <h1 className=" font-semibold text-2xl text-white mt-12">
        Welcome Back!
      </h1>

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
      <p className=" text-gray-100 text-sm text-right mt-3">Forgot Password?</p>
      <Button appearance="primary" className=" mt-9">
        Log In
      </Button>
      <div className=" mt-9 flex items-center">
        <hr className=" border-gray-100 w-full" />
        <div className=" w-32 mx-2 text-gray-100 whitespace-nowrap">
          Or continue with
        </div>
        <hr className="border-gray-100 w-full" />
      </div>
      <Button
        className="flex items-center justify-center mt-9"
        appearance="ghost"
      >
        <GoogleIcon className=" inline-block" />
        <span className=" ml-3">Google</span>
      </Button>

      <p className=" text-center text-gray-100 mt-6">
        Don’t have an account?{" "}
        <span className=" text-yellow ml-1">Sign Up</span>
      </p>
    </div>
  );
}
