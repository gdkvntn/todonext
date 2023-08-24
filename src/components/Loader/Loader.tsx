import Img from "@/image/img/zhdun.png";
import Image from "next/image";

export default function Loader(): JSX.Element {
  return (
    <div className="flex items-center justify-center bg-black-200/40 fixed w-full h-full left-0 top-0 z-50 ">
      <Image
        className=" animate-spin-slow "
        src={Img}
        width={75}
        height={75}
        alt="loader"
      />
    </div>
  );
}
