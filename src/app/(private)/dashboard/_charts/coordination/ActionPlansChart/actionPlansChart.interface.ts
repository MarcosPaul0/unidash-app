import { CourseCoordinationIndicatorsResponse } from "@unidash/api/responses/indicators.response";

export interface ActionPlansChartProps {
  actionPlans?: CourseCoordinationIndicatorsResponse["actionPlans"];
  yearFrom: number | null;
  yearTo: number | null;
}
