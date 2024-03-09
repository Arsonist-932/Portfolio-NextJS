const Form = ({ htmlFor, labelName, type, placeholder }) => {
  return (
    <>
      <div>
        <label
          htmlFor={htmlFor}
          className="text-white block text-sm font-medium mb-4"
        >
          {labelName}

          <input
            name={htmlFor}
            type={type}
            id={htmlFor}
            placeholder={placeholder}
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 mt-2"
          />
        </label>
      </div>
    </>
  );
};

export default Form;
