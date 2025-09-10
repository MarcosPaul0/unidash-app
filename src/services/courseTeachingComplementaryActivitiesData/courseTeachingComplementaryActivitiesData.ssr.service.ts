import { UNIDASH_API_ROUTES } from "@unidash/routes/unidashApi.routes";
import { createApiSSRClient } from "@unidash/lib/apiClientSSR";
import { CourseTeachingComplementaryActivitiesDataParamsBuilder } from "./courseTeachingComplementaryActivitiesDataParams.builder";
import { FilterCourseTeachingComplementaryActivitiesDataDto } from "@unidash/api/dtos/courseTeachingComplementaryActivitiesData.dto";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";
import { CourseTeachingComplementaryActivitiesDataResponse } from "@unidash/api/responses/courseTeachingComplementaryActivitiesDataResponse.interface";

export class CourseTeachingComplementaryActivitiesDataSSRService {
  static async getAll(
    courseId: string,
    pagination?: PaginationDto,
    filters?: FilterCourseTeachingComplementaryActivitiesDataDto
  ): Promise<CourseTeachingComplementaryActivitiesDataResponse> {
    const params = new CourseTeachingComplementaryActivitiesDataParamsBuilder()
      .applyPagination(pagination)
      .applyFilters(filters)
      .build();

    const ssrApiClient = await createApiSSRClient();

    const coursesResponse =
      await ssrApiClient.get<CourseTeachingComplementaryActivitiesDataResponse>(
        `${UNIDASH_API_ROUTES.courseTeachingComplementaryActivitiesData.getAll}${courseId}`,
        {
          params,
        }
      );

    return coursesResponse;
  }
}
