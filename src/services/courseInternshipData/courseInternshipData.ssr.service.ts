import { UNIDASH_API_ROUTES } from "@unidash/routes/unidashApi.routes";
import { createApiSSRClient } from "@unidash/lib/apiClientSSR";
import { CourseInternshipDataParamsBuilder } from "./courseInternshipDataParams.builder";
import { FilterCourseInternshipDataDto } from "@unidash/api/dtos/courseInternshipData.dto";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";
import { CourseInternshipDataResponse } from "@unidash/api/responses/courseInternshipDataResponse.interface";

export class CourseInternshipDataSSRService {
  static async getAll(
    courseId: string,
    pagination?: PaginationDto,
    filters?: FilterCourseInternshipDataDto
  ): Promise<CourseInternshipDataResponse> {
    const params = new CourseInternshipDataParamsBuilder()
      .applyPagination(pagination)
      .applyFilters(filters)
      .build();

    const ssrApiClient = await createApiSSRClient();

    const coursesResponse =
      await ssrApiClient.get<CourseInternshipDataResponse>(
        `${UNIDASH_API_ROUTES.courseInternshipData.getAll}${courseId}`,
        {
          params,
        }
      );

    return coursesResponse;
  }
}
