import { Link, Navigate } from "react-router-dom";

type BackButtonType = {
  title: string;
  link: string;
  linkStyle: string;
  buttonStyle: string;
};

const BackButton = ({
  title,
  link,
  linkStyle,
  buttonStyle,
}: BackButtonType) => {
  return (
    <>
      <button className={buttonStyle}>
        {" "}
        <Link className={linkStyle} to={link}>
          {title}
        </Link>
      </button>
    </>
  );
};

export default BackButton;
