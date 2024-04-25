type InputTypes = {
  inputType: string;
  labelName: string;
  onChange: React.FormEventHandler;
  value: any;
  name: string;
};

const Input = ({ inputType, labelName, onChange, value, name }: InputTypes) => {
  return (
    <>
      <div>
        <label className={`songInput ${labelName}`} htmlFor="">
          {labelName}
          <input
            name={name}
            type={inputType}
            onChange={onChange}
            value={value}
          />
        </label>
      </div>
    </>
  );
};

export default Input;
