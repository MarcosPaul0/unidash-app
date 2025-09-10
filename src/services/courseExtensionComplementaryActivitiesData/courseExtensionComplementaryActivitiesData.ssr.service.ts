import { UNIDASH_API_ROUTES } from "@unidash/routes/unidashApi.routes";
import { createApiSSRClient } from "@unidash/lib/apiClientSSR";
import { CourseExtensionComplementaryActivitiesDataParamsBuilder } from "./courseExtensionComplementaryActivitiesDataParams.builder";
import { FilterCourseExtensionComplementaryActivitiesDataDto } from "@unidash/api/dtos/courseExtensionComplementaryActivitiesData.dto";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";
import { CourseExtensionComplementaryActivitiesDataResponse } from "@unidash/api/responses/courseExtensionComplementaryActivitiesDataResponse.interface";

export class CourseExtensionComplementaryActivitiesDataSSRService {
  static async getAll(
    courseId: string,
    pagination?: PaginationDto,
    filters?: FilterCourseExtensionComplementaryActivitiesDataDto
  ): Promise<CourseExtensionComplementaryActivitiesDataResponse> {
    const params = new CourseExtensionComplementaryActivitiesDataParamsBuilder()
      .applyPagination(pagination)
      .applyFilters(filters)
      .build();

    const ssrApiClient = await createApiSSRClient();

    const coursesResponse =
      await ssrApiClient.get<CourseExtensionComplementaryActivitiesDataResponse>(
        `${UNIDASH_API_ROUTES.courseExtensionComplementaryActivitiesData.getAll}${courseId}`,
        {
          params,
        }
      );

    return coursesResponse;
  }
}
