import { IconEnum, InputProps } from "./Input.props";
import UserIcon from "../../image/svg/UsertagIcon.svg";
import LockIcon from "../../image/svg/LockIcon.svg";
import CreateUserIcon from "../../image/svg/CreateUserIcon.svg";

export const Input = ({
  label,
  icon,
  placeholder,
  className,
  children,
  ...props
}: InputProps): JSX.Element => {
  return (
    <div className={`${className} flex flex-col`}>
      <label className="text-gray-100 text-lg">{label}</label>
      <div className="relative mt-4">
        <div className="absolute top-5 left-4">
          {icon === IconEnum.User ? (
            <UserIcon />
          ) : icon === IconEnum.Password ? (
            <LockIcon />
          ) : (
            <CreateUserIcon />
          )}
        </div>
        {children}
        <input
          className=" bg-gray-300 py-4 w-full pl-16 text-white text-lg"
          placeholder={placeholder}
          {...props}
        ></input>
      </div>
    </div>
  );
};
