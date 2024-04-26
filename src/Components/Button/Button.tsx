import { Link } from "react-router-dom";

type Button = {
  ButtonClick:
    | React.MouseEventHandler<HTMLButtonElement>
    | React.FormEventHandler;
  ButtonTitle: string;
  Class: string;
  link?: string;
  btnLinkStyle: string;
};

const Button = ({
  Class,
  ButtonClick,
  ButtonTitle,
  link,
  btnLinkStyle,
}: Button) => {
  return (
    <>
      <button className={Class} onClick={ButtonClick}>
        {""}
        <Link className={btnLinkStyle} to={`${link}/`}>
          {ButtonTitle}
        </Link>
      </button>
    </>
  );
};

export default Button;
