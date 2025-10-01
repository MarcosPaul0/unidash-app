import z from "zod";
import { SEMESTER } from "./courseStudentsData.dto";
import { Validator } from "@unidash/utils/validator.util";

export const registerCourseCoordinationDataDtoSchema = z.object({
  year: z
    .transform(Number)
    .pipe(z.number().int().min(0).max(new Date().getFullYear())),
  semester: z.enum(SEMESTER),
  servicesRequestsBySystem: z
    .transform(Number)
    .pipe(z.number().int().min(0).max(1000)),
  servicesRequestsByEmail: z
    .transform(Number)
    .pipe(z.number().int().min(0).max(1000)),
  resolutionActions: z
    .transform(Number)
    .pipe(z.number().int().min(0).max(1000)),
  administrativeDecisionActions: z
    .transform(Number)
    .pipe(z.number().int().min(0).max(1000)),
  meetingsByBoardOfDirectors: z
    .transform(Number)
    .pipe(z.number().int().min(0).max(1000)),
  meetingsByUndergraduateChamber: z
    .transform(Number)
    .pipe(z.number().int().min(0).max(1000)),
  meetingsByCourseCouncil: z
    .transform(Number)
    .pipe(z.number().int().min(0).max(1000)),
  academicActionPlans: z
    .transform(Number)
    .pipe(z.number().int().min(0).max(1000)),
  administrativeActionPlans: z
    .transform(Number)
    .pipe(z.number().int().min(0).max(1000)),
});

export type RegisterCourseCoordinationDataDto = z.infer<
  typeof registerCourseCoordinationDataDtoSchema
>;

export const filterCourseCoordinationDataDtoSchema = z
  .object({
    year: Validator.validateYear(),
    yearFrom: Validator.validateYear(),
    yearTo: Validator.validateYear(),
    semester: z.enum(SEMESTER).nullable(),
  })
  .optional();

export type FilterCourseCoordinationDataDto = z.infer<
  typeof filterCourseCoordinationDataDtoSchema
>;
