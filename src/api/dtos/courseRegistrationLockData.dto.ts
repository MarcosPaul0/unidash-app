import z from "zod";
import { SEMESTER } from "./courseStudentsData.dto";

export const registerCourseRegistrationLockDataDtoSchema = z.object({
  year: z
    .transform(Number)
    .pipe(z.number().int().min(0).max(new Date().getFullYear())),
  semester: z.enum(SEMESTER),
  difficultyInDiscipline: z
    .transform(Number)
    .pipe(z.number().int().min(0).max(1000)),
  workload: z.transform(Number).pipe(z.number().int().min(0).max(1000)),
  teacherMethodology: z
    .transform(Number)
    .pipe(z.number().int().min(0).max(1000)),
  incompatibilityWithWork: z
    .transform(Number)
    .pipe(z.number().int().min(0).max(1000)),
  lossOfInterest: z.transform(Number).pipe(z.number().int().min(0).max(1000)),
  other: z.transform(Number).pipe(z.number().int().min(0).max(1000)),
});

export type RegisterCourseRegistrationLockDataDto = z.infer<
  typeof registerCourseRegistrationLockDataDtoSchema
>;

export const filterCourseRegistrationLockDataDtoSchema = z
  .object({
    year: z.int().max(new Date().getFullYear()).min(0).optional(),
    semester: z.enum(SEMESTER).optional(),
  })
  .optional();

export type FilterCourseRegistrationLockDataDto = z.infer<
  typeof filterCourseRegistrationLockDataDtoSchema
>;
