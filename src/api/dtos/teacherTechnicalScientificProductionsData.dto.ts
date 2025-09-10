import z from "zod";
import { SEMESTER } from "./courseStudentsData.dto";

export const registerTeacherTechnicalScientificProductionsDataDtoSchema =
  z.object({
    year: z
      .transform(Number)
      .pipe(z.number().int().min(0).max(new Date().getFullYear())),
    semester: z.enum(SEMESTER),
    periodicals: z.transform(Number).pipe(z.number().int().min(0).max(1000)),
    congress: z.transform(Number).pipe(z.number().int().min(0).max(1000)),
    booksChapter: z.transform(Number).pipe(z.number().int().min(0).max(1000)),
    programs: z.transform(Number).pipe(z.number().int().min(0).max(1000)),
    abstracts: z.transform(Number).pipe(z.number().int().min(0).max(1000)),
  });

export type RegisterTeacherTechnicalScientificProductionsDataDto = z.infer<
  typeof registerTeacherTechnicalScientificProductionsDataDtoSchema
>;

export const filterTeacherTechnicalScientificProductionsDataDtoSchema = z
  .object({
    year: z.int().max(new Date().getFullYear()).min(0).optional(),
    semester: z.enum(SEMESTER).optional(),
  })
  .optional();

export type FilterTeacherTechnicalScientificProductionsDataDto = z.infer<
  typeof filterTeacherTechnicalScientificProductionsDataDtoSchema
>;
