"use client";
import { useState } from "react";
import SummaryJson from "./inputs/summaryJson";
import SummaryPretty from "./summaryPretty";

export default function SummaryPanel({ formData }) {
  const [viewType, setViewType] = useState("pretty");
  const [prettyActive, setPrettyActive] = useState(true);
  const [rawActive, setRawActive] = useState(false);
  const buttonsVariants = {
    base: "py-6 px-4 w-full h-fit border-1 border-teal-950 text-md font-bold",
    active:
      "py-6 px-4 w-full h-fit border-1 border-teal-950 text-md font-bold bg-white text-teal-950",
  };
  const chields = {
    raw: <SummaryJson formData={formData} />,
    pretty: <SummaryPretty formData={formData} />,
  };
  return (
    <div className="md:w-3/4 md:h-3/4 bg-white md:rounded-2xl grid  grid-cols-1 md:grid-cols-5 md:auto-rows-fr overflow-hidden border-1 border-teal-950">
      <div className="col-span-2 bg-teal-900 p-6">
        <p className="py-4 w-full text-left text-2xl text-white font-bold">
          Felicidades has terminado con el registro , este es tu resumen
        </p>
        <p className="py-4 w-full text-sm text-left text-white/75 ">
          Opciones de visualización:
        </p>
        <div className="w-full grid grid-cols-2 md:grid-cols-1  grid-rows-1 md:grid-rows-2 border-1 border-teal-950 ">
          <button
            className={
              prettyActive ? buttonsVariants.active : buttonsVariants.base
            }
            onClick={() => {
              setRawActive(!rawActive);
              setPrettyActive(!prettyActive);
              setViewType("pretty");
            }}
          >
            Pretty
          </button>
          <button
            className={
              rawActive ? buttonsVariants.active : buttonsVariants.base
            }
            onClick={() => {
              setRawActive(!rawActive);
              setPrettyActive(!prettyActive);
              setViewType("raw");
            }}
          >
            Raw JSON
          </button>
        </div>
      </div>
      <div className="col-span-3">{chields[viewType]}</div>
    </div>
  );
}
