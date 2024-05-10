const FormFields = ({
  htmlFor,
  labelName,
  type,
  value,
  placeholder,
  onChanged,
}: FormFieldsProps) => {
  return (
    <>
      <div className="formfields">
        <label htmlFor={htmlFor}>
          {labelName}

          <input
            name={htmlFor}
            type={type}
            id={htmlFor}
            value={value}
            onChange={onChanged}
            placeholder={placeholder}
            autoComplete="off"
            className=" placeholder-[#9CA2A9] text-gray-100"
          />
        </label>
      </div>
    </>
  );
};

export default FormFields;

interface FormFieldsProps {
  htmlFor: string;
  labelName: string;
  value: string;
  type: string;
  placeholder: string;
  onChanged: any;
}
