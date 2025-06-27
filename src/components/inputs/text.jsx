export default function Text({ title, required, name, onChange, value }) {
  const variants = {
    base: "w-full h-fit p-2 text-sm border-1 border-slate-700 rounded-md focus:outline-teal-950",
  };
  return (
    <div className="h-fit">
      <div className="py-2 flex">
        <p className="text-xs text-teal-950">{title}</p>
        {required == true ? (
          <p className="text-xs text-teal-950/50 ml-2">(Campo Obligatorio)</p>
        ) : (
          <p></p>
        )}
      </div>
      <input
        className={variants.base}
        type="text"
        required={required}
        name={name}
        onChange={(e) => {
          onChange(e.target.name, e.target.value, "");
        }}
        value={value}
      ></input>
    </div>
  );
}
