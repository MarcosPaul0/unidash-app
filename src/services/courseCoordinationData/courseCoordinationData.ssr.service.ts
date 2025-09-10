import { UNIDASH_API_ROUTES } from "@unidash/routes/unidashApi.routes";
import { createApiSSRClient } from "@unidash/lib/apiClientSSR";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";
import { FilterCourseCoordinationDataDto } from "@unidash/api/dtos/courseCoordinationData.dto";
import { CourseCoordinationDataResponse } from "@unidash/api/responses/courseCoordinationDataResponse.interface";
import { CourseCoordinationDataParamsBuilder } from "./courseCoordinationDataParams.builder";

export class CourseCoordinationDataSSRService {
  static async getAll(
    courseId: string,
    pagination?: PaginationDto,
    filters?: FilterCourseCoordinationDataDto
  ): Promise<CourseCoordinationDataResponse> {
    const params = new CourseCoordinationDataParamsBuilder()
      .applyPagination(pagination)
      .applyFilters(filters)
      .build();

    const ssrApiClient = await createApiSSRClient();

    const coursesResponse =
      await ssrApiClient.get<CourseCoordinationDataResponse>(
        `${UNIDASH_API_ROUTES.courseCoordinationData.getAll}${courseId}`,
        {
          params,
        }
      );

    return coursesResponse;
  }
}
