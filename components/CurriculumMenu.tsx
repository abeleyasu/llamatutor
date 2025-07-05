"use client";
import { useState } from "react";
import { curriculumData } from "@/utils/curriculum";

export default function CurriculumMenu({
  setPromptValue,
}: {
  setPromptValue: (val: string) => void;
}) {
  const [openGrade, setOpenGrade] = useState<string | null>(null);
  const [openSubject, setOpenSubject] = useState<string | null>(null);
  const [openUnit, setOpenUnit] = useState<string | null>(null);

  const handlePromptSelection = (value: string) => {
    setPromptValue(value);
    setOpenGrade(null);
    setOpenSubject(null);
    setOpenUnit(null);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 py-4">
      {curriculumData.map((grade) => (
        <div key={grade.grade} className="relative">
          <div
            onClick={() =>
              setOpenGrade(openGrade === grade.grade ? null : grade.grade)
            }
            className="cursor-pointer rounded bg-blue-100 px-3 py-1 hover:bg-blue-200"
          >
            {grade.grade}
          </div>

          {openGrade === grade.grade && (
            <div className="absolute z-10 mt-2 w-56 rounded bg-white p-2 shadow-md max-h-96 overflow-y-auto">
              {grade.subjects.map((subject) => (
                <div key={subject.name} className="relative">
                  <div
                    onClick={() =>
                      setOpenSubject(
                        openSubject === subject.name ? null : subject.name
                      )
                    }
                    className="cursor-pointer rounded px-2 py-1 hover:bg-gray-100"
                  >
                    {subject.name}
                  </div>

                  {openSubject === subject.name && (
                    <div className="absolute left-full top-0 z-20 ml-2 w-64 rounded bg-white p-2 shadow-md max-h-96 overflow-y-auto">
                      {subject.units.map((unit) => (
                        <div key={unit.unit} className="relative">
                          <div
                            onClick={() =>
                              setOpenUnit(openUnit === unit.unit ? null : unit.unit)
                            }
                            className="cursor-pointer rounded px-2 py-1 hover:bg-blue-100"
                          >
                            {unit.unit}
                          </div>

                          {openUnit === unit.unit && (
                            <div className="absolute left-full top-0 z-30 ml-2 w-64 rounded bg-white p-2 shadow-md max-h-96 overflow-y-auto">
                              {unit.subunits.map((sub, idx) => (
                                <div
                                  key={idx}
                                  className="cursor-pointer px-2 py-1 text-sm text-gray-600 hover:bg-blue-50"
                                  onClick={() => handlePromptSelection(sub)} // ✅ Inject sub-unit
                                >
                                  {sub}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}