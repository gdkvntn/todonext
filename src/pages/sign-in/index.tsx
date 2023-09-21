import { Input } from "@/components/Input/Input";
import LogoIcon from "../../image/svg/LogoIcon.svg";
import { IconEnum } from "@/components/Input/Input.props";
import { useState } from "react";
import EyeIcon from "../../image/svg/EyeIcon.svg";
import EyeslashIcon from "../../image/svg/EyeslashIcon.svg";
import GoogleIcon from "../../image/svg/GoogleIcon.svg";
import { Button } from "@/components";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/supabaseClient";
import Loader from "@/components/Loader/Loader";

export default function SignIn(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passView, setPassView] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    await setLoading(false);
    if (error) {
      alert(error.message);
    } else {
      router.push("/");
    }
  };
  const handleOAuth = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };
  return (
    <>
      {loading ? <Loader /> : null}
      <div className="p-6">
        <LogoIcon className="w-32 h-24 m-auto" />
        <h1 className=" font-semibold text-2xl text-white mt-12">
          Welcome Back!
        </h1>
        <form onSubmit={handleLogin}>
          <Input
            className=" mt-6"
            label="Email Address"
            icon={IconEnum.User}
            placeholder="fazzzil72@gmail.com"
            type="mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            >
              {passView ? (
                <EyeIcon
                  className="absolute right-4 bottom-1/2 translate-y-1/2"
                  onClick={() => setPassView(!passView)}
                />
              ) : (
                <EyeslashIcon
                  className="absolute right-4 bottom-1/2 translate-y-1/2"
                  onClick={() => setPassView(!passView)}
                />
              )}
            </Input>
          </div>
          <p className=" text-gray-100 text-sm text-right mt-3">
            Forgot Password?
          </p>
          <Button appearance="primary" className=" mt-9">
            Log In
          </Button>
        </form>
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
          onClick={handleOAuth}
        >
          <GoogleIcon className=" inline-block" />
          <span className=" ml-3">Google</span>
        </Button>

        <p className=" text-center text-gray-100 mt-6">
          Don’t have an account?{" "}
          <Link
            href="/sign-up"
            className=" text-yellow ml-1 hover:text-black-100"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
}
