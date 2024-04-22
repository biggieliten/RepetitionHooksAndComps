type Button = {
  ButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  ButtonTitle: string;
};

const Button = ({ ButtonClick, ButtonTitle }: Button) => {
  return (
    <>
      <button onClick={ButtonClick}>
        {ButtonTitle}
        {""}
      </button>
    </>
  );
};

export default Button;
