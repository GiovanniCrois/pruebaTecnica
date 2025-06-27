import { lengthValidation } from "@/utils/inputValidations";
import { useState } from "react";
export default function Password({
  title,
  required,
  name,
  onChange,
  value,
  min,
}) {
  const variants = {
    base: "w-full h-fit p-2 text-sm border-1 border-slate-700 rounded-md focus:outline-teal-950",
    primary: "",
  };
  const [error, setError] = useState("");
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
      <input
        className={variants.base}
        type="password"
        required={required}
        name={name}
        minLength={min}
        onChange={(e) => {
          setError(lengthValidation(e.target.value, min));
          onChange(e.target.name, e.target.value);
        }}
        value={value}
      ></input>
    </div>
  );
}
