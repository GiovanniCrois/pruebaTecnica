"use client";
import { useEffect, useState } from "react";
import CheckBox from "./inputs/checkBox";
import Email from "./inputs/email";
import Number from "./inputs/number";
import Password from "./inputs/password";
import Select from "./inputs/select";
import Text from "./inputs/text";
export default function FormSection({
  section,
  questions,
  handleInputChange,
  handlePasswordEquals,
}) {
  const [sectionValues, setSectionValues] = useState({});
  const onChange = (name, value) => {
    if (name == "password" || name == "passwordConfirm") {
      handlePasswordEquals(validarPasswordConfirm(value));
    }
    handleInputChange(section, name, value);
    setSectionValues((prevData) => ({ ...prevData, [name]: value }));
  };
  const validarPasswordConfirm = (passwordConfirm) => {
    if (passwordConfirm == sectionValues.password) return true;
    else return false;
  };
  return (
    <div className="w-full h-full text-black">
      <h1 className="text-xl text-teal-900  font-bold">{section}</h1>
      <div className="h-full grid grid-cols-1 overflow-y-auto">
        {questions.map((question) => {
          switch (question.type) {
            case "input":
              return (
                <div className="p-2" key={question.name}>
                  <Text
                    title={question?.title || "Title"}
                    required={question?.required || false}
                    name={question?.name || "Name"}
                    onChange={onChange}
                    value={sectionValues?.[question.name] || ""}
                  />
                </div>
              );
            case "select":
              return (
                <div className="p-2" key={question.name}>
                  <Select
                    title={question?.title || "Title"}
                    required={question?.required || false}
                    name={question?.name || "Name"}
                    options={question?.options || []}
                    onChange={onChange}
                    value={sectionValues?.[question.name] || ""}
                  />
                </div>
              );
            case "number":
              return (
                <div className="p-2" key={question.name}>
                  <Number
                    title={question?.title || "Title"}
                    required={question?.required || false}
                    name={question?.name || "Name"}
                    min={question?.min}
                    max={question?.max}
                    step={question?.step || 1}
                    onChange={onChange}
                    value={sectionValues?.[question.name] || ""}
                  />
                </div>
              );
            case "email":
              return (
                <div className="p-2" key={question.name}>
                  <Email
                    title={question?.title || "Title"}
                    required={question?.required || false}
                    name={question?.name || "Name"}
                    onChange={onChange}
                    value={sectionValues?.[question.name] || ""}
                  />
                </div>
              );
            case "password":
              return (
                <div className="p-2" key={question.name}>
                  <Password
                    title={question?.title || "Title"}
                    required={question?.required || false}
                    name={question?.name || "Name"}
                    onChange={onChange}
                    value={sectionValues?.[question.name] || ""}
                    min={question?.min || ""}
                  />
                </div>
              );
            case "checkbox":
              return (
                <div className="p-2" key={question.name}>
                  <CheckBox
                    title={question?.title || "Title"}
                    required={question?.required || false}
                    name={question?.name || "Name"}
                    options={question?.options || []}
                    onChange={onChange}
                    value={sectionValues?.[question.name] || ""}
                  />
                </div>
              );
            default:
              return <p>Input no soportado</p>;
          }
        })}
      </div>
    </div>
  );
}
