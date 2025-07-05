"use client";
import { curriculumData } from "@/utils/curriculum";
import { useState } from "react";

export default function CurriculumMenu({ setPromptValue }: { setPromptValue: (val: string) => void }) {
  const [openGrade, setOpenGrade] = useState<string | null>(null);
  const [openSubject, setOpenSubject] = useState<string | null>(null);
  const [openUnit, setOpenUnit] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap justify-center gap-4 py-4">
      {curriculumData.map((grade) => (
        <div key={grade.grade} onMouseEnter={() => setOpenGrade(grade.grade)} onMouseLeave={() => setOpenGrade(null)}>
          <div className="cursor-pointer rounded bg-blue-100 px-3 py-1 hover:bg-blue-200">{grade.grade}</div>

          {openGrade === grade.grade && (
            <div className="absolute mt-2 rounded bg-white p-2 shadow-md">
              {grade.subjects.map((subject) => (
                <div key={subject.name} className="relative"
                     onMouseEnter={() => setOpenSubject(subject.name)}
                     onMouseLeave={() => setOpenSubject(null)}>
                  <div className="cursor-pointer rounded px-2 py-1 hover:bg-gray-100">{subject.name}</div>

                  {openSubject === subject.name && (
                    <div className="absolute left-full top-0 mt-0 ml-2 rounded bg-white p-2 shadow-md">
                      {subject.units.map((unit) => (
                        <div key={unit.unit}
                             onMouseEnter={() => setOpenUnit(unit.unit)}
                             onMouseLeave={() => setOpenUnit(null)}>
                          <div
                            onClick={() => setPromptValue(unit.unit)}
                            className="cursor-pointer rounded px-2 py-1 hover:bg-blue-100"
                          >
                            {unit.unit}
                          </div>

                          {openUnit === unit.unit && (
                            <div className="absolute left-full top-0 mt-0 ml-2 rounded bg-white p-2 shadow-md">
                              {unit.subunits.map((sub, idx) => (
                                <div key={idx} className="px-2 py-1 text-sm text-gray-600">{sub}</div>
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
