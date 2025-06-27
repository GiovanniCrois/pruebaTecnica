import FormSection from "./formSection";
import { useState, useRef } from "react";
import SummaryPanel from "./sumarryPanel";
export default function Form({
  formDisplay,
  handleAnterior,
  handleSiguiente,
  sectionIndx,
  progress,
  ref,
  showSummary,
}) {
  const [formData, setFormData] = useState({});
  const [passWorEquals, setPasswordEquals] = useState(true);
  const handleInputChange = (section, name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [name]: value,
      },
    }));
  };
  const handlePasswordEquals = (data) => {
    setPasswordEquals(data);
  };
  if (showSummary) {
    return <SummaryPanel formData={formData} />;
  } else {
    return (
      <div className="w-full md:w-3/4 h-fit md:h-3/4  bg-white md:rounded-2xl grid grid-cols-1 md:grid-cols-5 md:auto-rows-fr overflow-hidden border-1 border-teal-950">
        <div className="h-fit md:h-full md:col-span-2 md:w-full bg-radial from-teal-800 to-teal-900 p-6">
          <p className="h-fit md:h-1/5 text-2xl text-white font-bold text-left">
            Registro para programa de tutorías académicas
          </p>
          <p className="h-fit md:h-1/5 text-sm text-white/50 text-left">
            Porque enseñar es la mejor manera de aprender
          </p>
          <div className="w-full h-fit md:h-3/5 ">
            <div className="w-full h-fit md:h-2/4 p-2 grid grid-cols-1 place-items-center ">
              <div className="hidden md:flex aspect-square h-24 md:h-full rounded-full bg-white flex place-items-center ">
                <p className="text-center text-4xl font-bold w-full text-teal-900">
                  {sectionIndx + 1}
                </p>
              </div>
            </div>
            <div className="w-full h-1/4 flex place-items-end">
              <p className="w-full p-2 text-xl font-bold text-center">
                {formDisplay?.section}
              </p>
            </div>
            <div className="w-full h-fit md:h-1/5 flex place-items-end">
              <div className="w-full h-1 bg-teal-950 rounded-sm">
                <div
                  className="h-full bg-white transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-3 p-4">
          <div className="w-full md:h-10/12 ">
            <form ref={ref} className="w-full h-full">
              <FormSection
                section={formDisplay?.section || "Section"}
                questions={formDisplay?.questions || []}
                handleInputChange={handleInputChange}
                handlePasswordEquals={handlePasswordEquals}
              />
            </form>
          </div>
          <div className="w-full md:h-2/12 p-2 grid grid-cols-5 place-items-end">
            <div className="col-span-3 w-full ">
              <p className="text-red-600 tex-xs ">
                {!passWorEquals ? "Las contraseñas no coinciden" : ""}
              </p>
            </div>
            <div className="col-span-2 grid gap-1 grid-cols-2">
              <button
                onClick={() => {
                  handleAnterior();
                }}
                className="size-8 md:size-6 rounded-full bg-teal-800 border-1 border-teal-950 text-white text-md font-bold hover:bg-teal-950"
              >
                {"<"}
              </button>
              <button
                onClick={() => {
                  if (passWorEquals) {
                    handleSiguiente();
                  }
                }}
                className="size-8 md:size-6 rounded-full bg-teal-800 border-1 border-teal-950 text-white text-md font-bold  hover:bg-teal-950"
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
