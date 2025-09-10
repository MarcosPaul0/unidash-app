import z from "zod";
import { SEMESTER } from "./courseStudentsData.dto";

export const registerCourseSearchComplementaryActivitiesDataDtoSchema =
  z.object({
    year: z
      .transform(Number)
      .pipe(z.number().int().min(0).max(new Date().getFullYear())),
    semester: z.enum(SEMESTER),
    scientificInitiation: z
      .transform(Number)
      .pipe(z.number().int().min(0).max(1000)),
    developmentInitiation: z
      .transform(Number)
      .pipe(z.number().int().min(0).max(1000)),
    publishedArticles: z
      .transform(Number)
      .pipe(z.number().int().min(0).max(1000)),
    fullPublishedArticles: z
      .transform(Number)
      .pipe(z.number().int().min(0).max(1000)),
    publishedAbstracts: z
      .transform(Number)
      .pipe(z.number().int().min(0).max(1000)),
    presentationOfWork: z
      .transform(Number)
      .pipe(z.number().int().min(0).max(1000)),
    participationInEvents: z
      .transform(Number)
      .pipe(z.number().int().min(0).max(1000)),
  });

export type RegisterCourseSearchComplementaryActivitiesDataDto = z.infer<
  typeof registerCourseSearchComplementaryActivitiesDataDtoSchema
>;

export const filterCourseSearchComplementaryActivitiesDataDtoSchema = z
  .object({
    year: z.int().max(new Date().getFullYear()).min(0).optional(),
    semester: z.enum(SEMESTER).optional(),
  })
  .optional();

export type FilterCourseSearchComplementaryActivitiesDataDto = z.infer<
  typeof filterCourseSearchComplementaryActivitiesDataDtoSchema
>;
