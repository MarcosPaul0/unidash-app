import { SemestersIndicatorByYear } from "@unidash/api/responses/indicators.response";

export interface UseActivitiesTableParams {
  data?: SemestersIndicatorByYear;
  labels: Record<string, string>;
}
