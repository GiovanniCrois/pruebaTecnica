"use client";
import Form from "@/components/form";
import { TutorFormData } from "@/utils/JsonData";
import { useState, useRef } from "react";
export default function Home() {
  const formDisplay = TutorFormData();
  const totalSections = formDisplay.length;
  const [sectionIndx, setSectionIndx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const progressCompensation = (1 / totalSections) * 100;
  const formRef = useRef();
  const handleSiguiente = () => {
    if (sectionIndx < totalSections - 1 && formRef.current.checkValidity()) {
      setSectionIndx(sectionIndx + 1);
      setProgress(((sectionIndx + 1) / totalSections) * 100);
    } else {
      formRef.current.reportValidity();
    }
    if (sectionIndx == totalSections - 1 && formRef.current.checkValidity()) {
      setShowSummary(true);
    }
  };
  const handleAnterior = () => {
    if (sectionIndx > 0) {
      setSectionIndx(sectionIndx - 1);
      setProgress(((sectionIndx - 1) / totalSections) * 100);
      setShowSummary(false);
    }
  };
  return (
    <div className="md:w-full md:h-dvh bg-[url(/bg.jpg)]  flex place-items-center justify-center">
      <Form
        formDisplay={formDisplay[sectionIndx] || []}
        handleAnterior={handleAnterior}
        handleSiguiente={handleSiguiente}
        progress={progress + progressCompensation}
        sectionIndx={sectionIndx}
        ref={formRef}
        showSummary={showSummary}
      />
    </div>
  );
}
