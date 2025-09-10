import { UNIDASH_API_ROUTES } from "@unidash/routes/unidashApi.routes";
import { createApiSSRClient } from "@unidash/lib/apiClientSSR";
import { CourseStudentsDataParamsBuilder } from "./courseStudentsDataParams.builder";
import { FilterCourseStudentsDataDto } from "@unidash/api/dtos/courseStudentsData.dto";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";
import { CourseStudentsDataResponse } from "@unidash/api/responses/courseStudentsDataResponse.interface";

export class CourseStudentsDataSSRService {
  static async getAll(
    courseId: string,
    pagination?: PaginationDto,
    filters?: FilterCourseStudentsDataDto
  ): Promise<CourseStudentsDataResponse> {
    const params = new CourseStudentsDataParamsBuilder()
      .applyPagination(pagination)
      .applyFilters(filters)
      .build();

    const ssrApiClient = await createApiSSRClient();

    const coursesResponse = await ssrApiClient.get<CourseStudentsDataResponse>(
      `${UNIDASH_API_ROUTES.courseStudentsData.getAll}${courseId}`,
      {
        params,
      }
    );

    return coursesResponse;
  }
}
