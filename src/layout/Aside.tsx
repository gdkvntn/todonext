import HomeIcon from "../image/svg/HomeIcon.svg";
import ChatIcon from "../image/svg/ChatIcon.svg";
import AddIcon from "../image/svg/AddIcon.svg";
import CalendarIcon from "../image/svg/CalendarIcon.svg";
import NotificationIcon from "../image/svg/NotificationIcon.svg";
import Link from "next/link";

const stylesForAside =
  "flex flex-col items-center justify-center w-14 h-14 gap-1 active:stroke-yellow active:text-yellow transition";

export function Aside() {
  return (
    <aside className="fixed bottom-0 left-0 flex w-full items-center bg-black-100 h-24 px-9">
      <ul className="flex flex-1 justify-between stroke-gray-400 text-gray-400 text-xs ">
        <li className={stylesForAside}>
          <HomeIcon />
          <span>Home</span>
        </li>
        <li className={stylesForAside}>
          <ChatIcon />
          <span>Chat</span>
        </li>
        <li className="flex flex-col items-center  justify-center gap-1 w-14 h-14 bg-yellow transition ease-in-out delay-1 active:-translate-y-1 active:scale-110 active:opacity-70 duration-300">
          <Link href="/create-task">
            <AddIcon />
          </Link>
        </li>
        <li className={stylesForAside}>
          <CalendarIcon />
          <span>Calender</span>
        </li>
        <li className={stylesForAside}>
          <NotificationIcon />
          <span>Notification</span>
        </li>
      </ul>
    </aside>
  );
}
