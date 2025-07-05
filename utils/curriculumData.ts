// utils/curriculumData.ts

export type CurriculumUnit = {
  id: string;
  label: string;
  subUnits?: CurriculumUnit[];
};

export const curriculumData: CurriculumUnit[] = [
  {
    id: "grade9",
    label: "Grade 9",
    subUnits: [
      {
        id: "g9_biology",
        label: "Biology",
        subUnits: [
          {
            id: "g9_bio_u1",
            label: "Unit 1: Introduction to Biology",
            subUnits: [
              { id: "g9_bio_u1_su1", label: "Sub-U1.1: Definition of Biology" },
              { id: "g9_bio_u1_su2", label: "Sub-U1.2: Why do we study Biology?" },
              // ...
            ],
          },
          // Add other units...
        ],
      },
      // Add other Grade 9 subjects...
    ],
  },
  {
    id: "grade10",
    label: "Grade 10",
    subUnits: [
      {
        id: "g10_chem",
        label: "Chemistry",
        subUnits: [
          {
            id: "g10_chem_u1",
            label: "Unit 1: Chemical Reactions and Stoichiometry",
            subUnits: [
              { id: "g10_chem_u1_su1", label: "Sub-U1.1: Introduction" },
              { id: "g10_chem_u1_su2", label: "Sub-U1.2: Chemical Equations" },
              // ...
            ],
          },
        ],
      },
    ],
  },
  {
    id: "grade11",
    label: "Grade 11",
    subUnits: [
      {
        id: "g11_math",
        label: "Math",
        subUnits: [
          {
            id: "g11_math_u1",
            label: "Unit 1: Relation and Function",
            subUnits: [
              { id: "g11_math_u1_su1", label: "Sub-U1.1: Relations" },
              { id: "g11_math_u1_su2", label: "Sub-U1.2: Inverse of Relations" },
              // ...
            ],
          },
        ],
      },
    ],
  },
  {
    id: "grade12",
    label: "Grade 12",
    subUnits: [
      {
        id: "g12_physics",
        label: "Physics",
        subUnits: [
          {
            id: "g12_physics_u1",
            label: "Unit 1: Application of Physics in Other Fields",
            subUnits: [
              { id: "g12_physics_u1_su1", label: "Sub-U1.1: Physics & Other Sciences" },
              { id: "g12_physics_u1_su2", label: "Sub-U1.2: Physics & Engineering" },
              // ...
            ],
          },
        ],
      },
    ],
  },
];