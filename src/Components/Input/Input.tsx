type InputTypes = {
  inputType: string;
  labelName: string;
};

const Input = ({ inputType, labelName }: InputTypes) => {
  return (
    <>
      <div>
        <form action="">
          <label className={`songInput ${labelName}`} htmlFor="">
            {labelName}
            <input type={inputType} />
          </label>
        </form>
      </div>
    </>
  );
};

export default Input;
