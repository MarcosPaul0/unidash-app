import { UNIDASH_API_ROUTES } from "@unidash/routes/unidashApi.routes";
import { createApiSSRClient } from "@unidash/lib/apiClientSSR";
import { FilterCourseRegistrationLockDataDto } from "@unidash/api/dtos/courseRegistrationLockData.dto";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";
import { CourseRegistrationLockDataParamsBuilder } from "./courseRegistrationLockDataParams.builder";
import { CourseRegistrationLockDataResponse } from "@unidash/api/responses/courseRegistrationLockDataResponse.interface";
import { redirect } from "next/navigation";
import { APP_ROUTES } from "@unidash/routes/app.routes";

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

    const courseRegistrationLockResponse =
      await ssrApiClient.get<CourseRegistrationLockDataResponse>(
        `${UNIDASH_API_ROUTES.courseRegistrationLockData.getAll}${courseId}`,
        {
          params,
        }
      );

    if (courseRegistrationLockResponse === null) {
      redirect(APP_ROUTES.private.dashboard);
    }

    return courseRegistrationLockResponse;
  }
}
