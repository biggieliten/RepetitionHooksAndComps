import { Link, Navigate } from "react-router-dom";

type BackButtonType = {
  title: string;
  link: string;
};

const BackButton = ({ title, link }: BackButtonType) => {
  return (
    <>
      <button className="backButton">
        {" "}
        <Link to={link}>{title}</Link>
      </button>
    </>
  );
};

export default BackButton;
