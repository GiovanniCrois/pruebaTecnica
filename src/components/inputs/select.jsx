export default function Select({
  title,
  required,
  name,
  options,
  onChange,
  value,
}) {
  const variants = {
    base: "w-full h-fit p-2 text-sm border-1 border-slate-700 rounded-md focus:outline-teal-950",
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
      </div>
      <select
        className={variants.base}
        placeholder={title}
        required={required}
        name={name}
        onChange={(e) => {
          onChange(e.target.name, e.target.value, "");
        }}
        value={value}
      >
        <option value={""} disabled>
          {""}
        </option>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
