import { UNIDASH_API_ROUTES } from "@unidash/routes/unidashApi.routes";
import { createApiSSRClient } from "@unidash/lib/apiClientSSR";
import { CourseSearchComplementaryActivitiesDataParamsBuilder } from "./courseSearchComplementaryActivitiesDataParams.builder";
import { FilterCourseSearchComplementaryActivitiesDataDto } from "@unidash/api/dtos/courseSearchComplementaryActivitiesData.dto";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";
import { CourseSearchComplementaryActivitiesDataResponse } from "@unidash/api/responses/courseSearchComplementaryActivitiesDataResponse.interface";
import { redirect } from "next/navigation";
import { APP_ROUTES } from "@unidash/routes/app.routes";

export class CourseSearchComplementaryActivitiesDataSSRService {
  static async getAll(
    courseId: string,
    pagination?: PaginationDto,
    filters?: FilterCourseSearchComplementaryActivitiesDataDto
  ): Promise<CourseSearchComplementaryActivitiesDataResponse> {
    const params = new CourseSearchComplementaryActivitiesDataParamsBuilder()
      .applyPagination(pagination)
      .applyFilters(filters)
      .build();

    const ssrApiClient = await createApiSSRClient();

    const courseSearchComplementaryActivitiesResponse =
      await ssrApiClient.get<CourseSearchComplementaryActivitiesDataResponse>(
        `${UNIDASH_API_ROUTES.courseSearchComplementaryActivitiesData.getAll}${courseId}`,
        {
          params,
        }
      );

    if (courseSearchComplementaryActivitiesResponse === null) {
      redirect(APP_ROUTES.private.dashboard);
    }

    return courseSearchComplementaryActivitiesResponse;
  }
}
