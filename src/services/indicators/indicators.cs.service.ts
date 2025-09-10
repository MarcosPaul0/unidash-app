import { UNIDASH_API_ROUTES } from "@unidash/routes/unidashApi.routes";
import { apiClient } from "@unidash/lib/apiClient";
import { IndicatorsParamsBuilder } from "./indicatorsParams.builder";
import {
  CourseCoordinationIndicatorsResponse,
  CourseIndicatorsResponse,
  CourseWorkCompletionIndicatorsStatus,
} from "@unidash/api/responses/indicators.response";
import { FilterIndicatorsDto } from "@unidash/api/dtos/indicators.dto";

export class IndicatorsCSService {
  static async getCoordinationIndicators(
    courseId: string,
    filters?: FilterIndicatorsDto
  ): Promise<CourseCoordinationIndicatorsResponse> {
    const params = new IndicatorsParamsBuilder().applyFilters(filters).build();

    const courseCoordinationIndicatorsResponse =
      await apiClient.get<CourseCoordinationIndicatorsResponse>(
        `${UNIDASH_API_ROUTES.indicators.getCoordinationIndicators}${courseId}`,
        {
          params,
        }
      );

    return courseCoordinationIndicatorsResponse;
  }

  static async getCourseIndicators(
    courseId: string,
    filters?: FilterIndicatorsDto
  ): Promise<CourseIndicatorsResponse> {
    const params = new IndicatorsParamsBuilder().applyFilters(filters).build();

    const courseCoordinationIndicatorsResponse =
      await apiClient.get<CourseIndicatorsResponse>(
        `${UNIDASH_API_ROUTES.indicators.getCourseIndicators}${courseId}`,
        {
          params,
        }
      );

    return courseCoordinationIndicatorsResponse;
  }

  static async getCompletionWorkIndicators(
    courseId: string,
    filters?: FilterIndicatorsDto
  ): Promise<CourseWorkCompletionIndicatorsStatus> {
    const params = new IndicatorsParamsBuilder().applyFilters(filters).build();

    const courseCoordinationIndicatorsResponse =
      await apiClient.get<CourseWorkCompletionIndicatorsStatus>(
        `${UNIDASH_API_ROUTES.indicators.getCompletionWorkIndicators}${courseId}`,
        {
          params,
        }
      );

    return courseCoordinationIndicatorsResponse;
  }
}
