import { ButtonProps } from "./Button.props";

export const Button = ({
  appearance,
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`${className} w-full p-4 font-semibold ${
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
