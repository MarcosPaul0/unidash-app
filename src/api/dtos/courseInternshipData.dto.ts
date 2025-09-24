import z from "zod";
import { SEMESTER } from "./courseStudentsData.dto";
import { Validator } from "@unidash/utils/validator.util";

export const CONCLUSION_TIME = {
  bigger: "bigger",
  medium: "medium",
  smaller: "smaller",
} as const;

export type ConclusionTime =
  (typeof CONCLUSION_TIME)[keyof typeof CONCLUSION_TIME];

export const registerCourseInternshipDataDtoSchema = z.object({
  year: z
    .transform(Number)
    .pipe(z.number().int().min(0).max(new Date().getFullYear())),
  semester: z.enum(SEMESTER),
  studentMatriculation: z.string().min(10).max(10),
  enterpriseCnpj: z.string().min(14).max(14),
  role: z.string().min(1).max(60),
  conclusionTime: z.enum(CONCLUSION_TIME),
  cityId: z.uuid(),
  advisorId: z.uuid(),
});

export type RegisterCourseInternshipDataDto = z.infer<
  typeof registerCourseInternshipDataDtoSchema
>;

export const filterCourseInternshipDataDtoSchema = z
  .object({
    year: Validator.validateOptionalYear(),
    semester: z.enum(SEMESTER).optional(),
  })
  .optional();

export type FilterCourseInternshipDataDto = z.infer<
  typeof filterCourseInternshipDataDtoSchema
>;
