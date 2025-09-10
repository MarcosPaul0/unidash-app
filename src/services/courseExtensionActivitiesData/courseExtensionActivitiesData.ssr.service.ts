import { UNIDASH_API_ROUTES } from "@unidash/routes/unidashApi.routes";
import { createApiSSRClient } from "@unidash/lib/apiClientSSR";
import { CourseExtensionActivitiesDataParamsBuilder } from "./courseExtensionActivitiesDataParams.builder";
import { FilterCourseExtensionActivitiesDataDto } from "@unidash/api/dtos/courseExtensionActivitiesData.dto";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";
import { CourseExtensionActivitiesDataResponse } from "@unidash/api/responses/courseExtensionActivitiesDataResponse.interface";

export class CourseExtensionActivitiesDataSSRService {
  static async getAll(
    courseId: string,
    pagination?: PaginationDto,
    filters?: FilterCourseExtensionActivitiesDataDto
  ): Promise<CourseExtensionActivitiesDataResponse> {
    const params = new CourseExtensionActivitiesDataParamsBuilder()
      .applyPagination(pagination)
      .applyFilters(filters)
      .build();

    const ssrApiClient = await createApiSSRClient();

    const coursesResponse =
      await ssrApiClient.get<CourseExtensionActivitiesDataResponse>(
        `${UNIDASH_API_ROUTES.courseExtensionActivitiesData.getAll}${courseId}`,
        {
          params,
        }
      );

    return coursesResponse;
  }
}
