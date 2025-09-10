import { UNIDASH_API_ROUTES } from "@unidash/routes/unidashApi.routes";
import { createApiSSRClient } from "@unidash/lib/apiClientSSR";
import { FilterCourseRegistrationLockDataDto } from "@unidash/api/dtos/courseRegistrationLockData.dto";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";
import { CourseRegistrationLockDataParamsBuilder } from "./courseRegistrationLockDataParams.builder";
import { CourseRegistrationLockDataResponse } from "@unidash/api/responses/courseRegistrationLockDataResponse.interface";

export class CourseRegistrationLockDataSSRService {
  static async getAll(
    courseId: string,
    pagination?: PaginationDto,
    filters?: FilterCourseRegistrationLockDataDto
  ): Promise<CourseRegistrationLockDataResponse> {
    const params = new CourseRegistrationLockDataParamsBuilder()
      .applyPagination(pagination)
      .applyFilters(filters)
      .build();

    const ssrApiClient = await createApiSSRClient();

    const coursesResponse =
      await ssrApiClient.get<CourseRegistrationLockDataResponse>(
        `${UNIDASH_API_ROUTES.courseRegistrationLockData.getAll}${courseId}`,
        {
          params,
        }
      );

    return coursesResponse;
  }
}
