import { Validator } from "@unidash/utils/validator.util";
import z from "zod";
import { SEMESTER } from "./courseStudentsData.dto";

const registerActiveStudentsByIngressDataDtoSchema = z.object({
  ingressYear: z
    .transform(Number)
    .pipe(z.number().int().min(0).max(new Date().getFullYear())),
  numberOfStudents: z.transform(Number).pipe(z.number().int().min(0).max(1000)),
});

export const registerCourseActiveStudentsDataDtoSchema = z.object({
  year: z
    .transform(Number)
    .pipe(z.number().int().min(0).max(new Date().getFullYear())),
  semester: z.enum(SEMESTER),
  activeStudentsByIngress: z.array(
    registerActiveStudentsByIngressDataDtoSchema
  ),
});

export type RegisterCourseActiveStudentsDataDto = z.infer<
  typeof registerCourseActiveStudentsDataDtoSchema
>;

export const filterCourseActiveStudentsDataDtoSchema = z
  .object({
    year: Validator.validateOptionalYear(),
    semester: z.enum(SEMESTER).optional(),
  })
  .optional();

export type FilterCourseActiveStudentsDataDto = z.infer<
  typeof filterCourseActiveStudentsDataDtoSchema
>;
