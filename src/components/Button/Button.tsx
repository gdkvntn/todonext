import { ButtonProps } from "./Button.props";

export const Button = ({
  appearance,
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`${className} transition ease-in-out delay-1 active:-translate-y-1 active:scale-110 active:opacity-70 duration-300 w-full p-4 font-semibold ${
        appearance === "primary"
          ? "bg-yellow"
          : "border-2 border-white text-white"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};
