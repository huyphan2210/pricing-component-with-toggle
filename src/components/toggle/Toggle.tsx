import { MouseEvent, FC } from "react";
import "./Toggle.css";

export interface ToggleProps {
  handleToggle: () => void;
}

const Toggle: FC<ToggleProps> = (props: ToggleProps) => {
  const handleToggleEvent = (e: MouseEvent<HTMLDivElement>) => {
    const theBall = e.currentTarget.getElementsByClassName("toggle_ball")[0];

    if (theBall.className === "toggle_ball") {
      theBall.className = "toggle_ball active";
    } else {
      theBall.className = "toggle_ball";
    }
    
    props.handleToggle();
  };

  return (
    <div className="toggle" onClick={handleToggleEvent}>
      <div className="toggle_ball"></div>
    </div>
  );
};

export default Toggle;