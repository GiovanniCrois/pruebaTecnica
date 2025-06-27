"use client";

import { useState } from "react";
import { mailValidation } from "@/utils/inputValidations";

export default function Email({ title, required, name, onChange, value }) {
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
        type="email"
        required={required}
        name={name}
        onChange={(e) => {
          setError(mailValidation(e.target.value));
          onChange(e.target.name, e.target.value);
        }}
        value={value}
      ></input>
    </div>
  );
}
