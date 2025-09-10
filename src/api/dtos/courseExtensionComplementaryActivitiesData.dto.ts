import z from "zod";
import { SEMESTER } from "./courseStudentsData.dto";

export const registerCourseExtensionComplementaryActivitiesDataDtoSchema =
  z.object({
    year: z
      .transform(Number)
      .pipe(z.number().int().min(0).max(new Date().getFullYear())),
    semester: z.enum(SEMESTER),
    culturalActivities: z
      .transform(Number)
      .pipe(z.number().int().min(0).max(1000)),
    sportsCompetitions: z
      .transform(Number)
      .pipe(z.number().int().min(0).max(1000)),
    awardsAtEvents: z.transform(Number).pipe(z.number().int().min(0).max(1000)),
    studentRepresentation: z
      .transform(Number)
      .pipe(z.number().int().min(0).max(1000)),
    participationInCollegiateBodies: z
      .transform(Number)
      .pipe(z.number().int().min(0).max(1000)),
  });

export type RegisterCourseExtensionComplementaryActivitiesDataDto = z.infer<
  typeof registerCourseExtensionComplementaryActivitiesDataDtoSchema
>;

export const filterCourseExtensionComplementaryActivitiesDataDtoSchema = z
  .object({
    year: z.int().max(new Date().getFullYear()).min(0).optional(),
    semester: z.enum(SEMESTER).optional(),
  })
  .optional();

export type FilterCourseExtensionComplementaryActivitiesDataDto = z.infer<
  typeof filterCourseExtensionComplementaryActivitiesDataDtoSchema
>;
