import { Link } from "react-router-dom";

type Button = {
  ButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  ButtonTitle: string;
  Class: string;
  link: string;
};

const Button = ({ Class, ButtonClick, ButtonTitle, link }: Button) => {
  return (
    <>
      <button className={Class} onClick={ButtonClick}>
        {""}
        <Link to={`${link}/`}>{ButtonTitle}</Link>
      </button>
    </>
  );
};

export default Button;
