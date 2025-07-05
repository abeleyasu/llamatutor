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

  const handlePrompt = (value: string) => {
    setPromptValue(value);
    setOpenGrade(null);
    setOpenSubject(null);
    setOpenUnit(null);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 py-4 w-full">
      {curriculumData.map((grade) => (
        <div key={grade.grade} className="relative">
          <div
            onClick={() =>
              setOpenGrade(openGrade === grade.grade ? null : grade.grade)
            }
            className="cursor-pointer rounded bg-blue-100 px-4 py-2 hover:bg-blue-200"
          >
            {grade.grade}
          </div>

          {openGrade === grade.grade && (
            <div className="absolute z-10 mt-2 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded bg-white p-4 shadow-md">
              {grade.subjects.map((subject) => (
                <div key={subject.name} className="relative">
                  <div
                    onClick={() =>
                      setOpenSubject(
                        openSubject === subject.name ? null : subject.name
                      )
                    }
                    className="cursor-pointer rounded px-3 py-2 font-medium hover:bg-gray-100"
                  >
                    {subject.name}
                  </div>

                  {openSubject === subject.name && (
                    <div className="pl-4">
                      {subject.units.map((unit) => (
                        <div key={unit.unit} className="relative">
                          <div
                            onClick={() => handlePrompt(unit.unit)}
                            className="cursor-pointer rounded px-3 py-1 text-blue-800 hover:bg-blue-50"
                          >
                            {unit.unit}
                          </div>

                          {unit.subunits.length > 0 && (
                            <div className="pl-4">
                              {unit.subunits.map((sub, idx) => (
                                <div
                                  key={idx}
                                  onClick={() => handlePrompt(sub)}
                                  className="cursor-pointer px-3 py-1 text-sm text-gray-700 hover:bg-blue-100"
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