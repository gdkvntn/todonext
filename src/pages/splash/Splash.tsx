import Image from "next/image";
import Logo from "../../image/svg/LogoIcon.svg";
import Pana from "../../image/img/pana.png";
import { Button } from "@/components";

export default function Splash(): JSX.Element {
  return (
    <div className="p-6 ">
      <Logo className="w-24 h-16" />
      <div className="bg-white w-[370px] h-[330px] mt-9">
        <Image
          className="m-auto"
          src={Pana}
          width={320}
          height={320}
          alt="img"
        />
      </div>
      <p className=" font-cabin font-semibold text-7xl  text-white mt-14">
        Manage your Task with <span className=" text-yellow">DayTask</span>
      </p>
      <Button appearance="primary" className="mt-16">
        Let&apos;s Start
      </Button>
    </div>
  );
}
