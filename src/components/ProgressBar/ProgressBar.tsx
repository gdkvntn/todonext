import { ProgressBarProps } from "./ProgressBar.props";

const ProgressBar = ({ bgcolor, completed }: ProgressBarProps) => {
  return (
    <div>
      <div>
        <span>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
