import Image from "next/image";
import Logo from "../../image/svg/LogoIcon.svg";
import Pana from "../../image/img/pana.png";
import { Button } from "@/components";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Splash(): JSX.Element {
  const router = useRouter();

  const LetsStart = () => {
    router.push("/sign-in");
  };

  return (
    <div className="p-6">
      <Logo className="w-24 h-16" />
      <div className="bg-white w-[370px] h-[330px] mt-9">
        <Image
          className="m-auto w-auto h-auto"
          src={Pana}
          width={320}
          height={320}
          alt="img"
          priority={true}
        />
      </div>
      <p className=" font-mono font-semibold text-7xl leading-[60px]  text-white mt-14">
        Manage your Task with <span className=" text-yellow">DayTask</span>
      </p>
      <Link href="/sign-in">
        <Button appearance="primary" className="mt-16" onClick={LetsStart}>
          Let&apos;s Start
        </Button>
      </Link>
    </div>
  );
}
