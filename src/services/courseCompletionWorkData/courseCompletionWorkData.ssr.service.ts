import { UNIDASH_API_ROUTES } from "@unidash/routes/unidashApi.routes";
import { createApiSSRClient } from "@unidash/lib/apiClientSSR";
import { CourseCompletionWorkDataParamsBuilder } from "./courseCompletionWorkDataParams.builder";
import { FilterCourseCompletionWorkDataDto } from "@unidash/api/dtos/courseCompletionWorkData.dto";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";
import { CourseCompletionWorkDataResponse } from "@unidash/api/responses/courseCompletionWorkDataResponse.interface";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { redirect } from "next/navigation";

export class CourseCompletionWorkDataSSRService {
  static async getAll(
    courseId: string,
    pagination?: PaginationDto,
    filters?: FilterCourseCompletionWorkDataDto
  ): Promise<CourseCompletionWorkDataResponse> {
    const params = new CourseCompletionWorkDataParamsBuilder()
      .applyPagination(pagination)
      .applyFilters(filters)
      .build();

    const ssrApiClient = await createApiSSRClient();

    const courseCompletionWorkResponse =
      await ssrApiClient.get<CourseCompletionWorkDataResponse>(
        `${UNIDASH_API_ROUTES.courseCompletionWorkData.getAll}${courseId}`,
        {
          params,
        }
      );

    if (courseCompletionWorkResponse === null) {
      redirect(APP_ROUTES.private.dashboard);
    }

    return courseCompletionWorkResponse;
  }
}
