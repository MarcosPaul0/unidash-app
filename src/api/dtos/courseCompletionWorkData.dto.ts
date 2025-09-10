import z from "zod";
import { SEMESTER } from "./courseStudentsData.dto";

export const registerCourseCompletionWorkDataDtoSchema = z.object({
  year: z
    .transform(Number)
    .pipe(z.number().int().min(0).max(new Date().getFullYear())),
  semester: z.enum(SEMESTER),
  enrollments: z.transform(Number).pipe(z.number().int().min(0).max(1000)),
  defenses: z.transform(Number).pipe(z.number().int().min(0).max(1000)),
  abandonments: z.transform(Number).pipe(z.number().int().min(0).max(1000)),
});

export type RegisterCourseCompletionWorkDataDto = z.infer<
  typeof registerCourseCompletionWorkDataDtoSchema
>;

export const filterCourseCompletionWorkDataDtoSchema = z
  .object({
    year: z.int().max(new Date().getFullYear()).min(0).optional(),
    semester: z.enum(SEMESTER).optional(),
  })
  .optional();

export type FilterCourseCompletionWorkDataDto = z.infer<
  typeof filterCourseCompletionWorkDataDtoSchema
>;
