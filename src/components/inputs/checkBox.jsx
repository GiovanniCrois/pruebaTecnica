export default function CheckBox({
  title,
  options,
  required,
  name,
  onChange,
  value,
  error,
}) {
  const variants = {
    base: "ml-2 size-5 appearance-none  bg-white border rounded-md place-self-center border-teal-950 checked:bg-teal-900",
    primary: "",
  };
  return (
    <div>
      <div className="py-2 flex">
        <p className="text-xs text-teal-950">{title}</p>
        {required == true ? (
          <p className="text-xs text-teal-950/50 ml-2">(Campo Obligatorio)</p>
        ) : (
          <p></p>
        )}
        <p className="text-xs text-red-600 ml-2">{error}</p>
      </div>
      {options.map((option) => {
        return (
          <div className="flex justify-center" key={option}>
            <label className="text-md ">{option}</label>
            <input
              className={variants.base}
              id={name}
              type="checkbox"
              placeholder={title}
              required={required}
              name={name}
              onChange={(e) => {
                onChange(e.target.name, option);
              }}
              value={value}
            ></input>
          </div>
        );
      })}
    </div>
  );
}
