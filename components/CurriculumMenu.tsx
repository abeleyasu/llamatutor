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

  const toggleOpen = (
    value: string | null,
    setter: (val: string | null) => void,
    current: string | null
  ) => {
    setter(current === value ? null : value);
  };

  const handleSelect = (value: string) => {
    setPromptValue(value);
    setOpenGrade(null);
    setOpenSubject(null);
    setOpenUnit(null);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 py-4 w-full">
      {curriculumData.map((grade) => (
        <div key={grade.grade} className="relative w-full">
          <div
            className="cursor-pointer rounded bg-blue-100 px-4 py-2 hover:bg-blue-200 text-center font-semibold text-lg"
            onClick={() => toggleOpen(grade.grade, setOpenGrade, openGrade)}
          >
            {grade.grade}
          </div>

          {openGrade === grade.grade && (
            <div className="absolute z-10 mt-2 w-full rounded bg-white p-4 shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {grade.subjects.map((subject, index) => (
                <div
                  key={subject.name}
                  className={`rounded p-3 ${
                    index % 2 === 0 ? "bg-blue-50" : "bg-blue-100"
                  }`}
                >
                  <div
                    onClick={() =>
                      toggleOpen(subject.name, setOpenSubject, openSubject)
                    }
                    className="cursor-pointer font-bold text-lg text-blue-900 hover:underline"
                  >
                    {subject.name}
                  </div>

                  {openSubject === subject.name && (
                    <div className="mt-2 pl-2 space-y-2">
                      {subject.units.map((unit) => (
                        <div key={unit.unit} className="relative">
                          <div
                            onClick={() => handleSelect(unit.unit)}
                            className="cursor-pointer font-medium text-blue-700 hover:bg-blue-200 px-2 py-1 rounded"
                          >
                            {unit.unit}
                          </div>

                          {unit.subunits.length > 0 && (
                            <div className="pl-4 mt-1 space-y-1">
                              {unit.subunits.map((sub, idx) => (
                                <div
                                  key={idx}
                                  onClick={() => handleSelect(sub)}
                                  className="cursor-pointer text-sm text-gray-800 hover:bg-blue-100 px-2 py-1 rounded"
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