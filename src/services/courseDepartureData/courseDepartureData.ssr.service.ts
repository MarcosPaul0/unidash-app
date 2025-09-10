import { UNIDASH_API_ROUTES } from "@unidash/routes/unidashApi.routes";
import { createApiSSRClient } from "@unidash/lib/apiClientSSR";
import { CourseDepartureDataParamsBuilder } from "./courseDepartureDataParams.builder";
import { FilterCourseDepartureDataDto } from "@unidash/api/dtos/courseDepartureData.dto";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";
import { CourseDepartureDataResponse } from "@unidash/api/responses/courseDepartureDataResponse.interface";

export class CourseDepartureDataSSRService {
  static async getAll(
    courseId: string,
    pagination?: PaginationDto,
    filters?: FilterCourseDepartureDataDto
  ): Promise<CourseDepartureDataResponse> {
    const params = new CourseDepartureDataParamsBuilder()
      .applyPagination(pagination)
      .applyFilters(filters)
      .build();

    const ssrApiClient = await createApiSSRClient();

    const coursesResponse = await ssrApiClient.get<CourseDepartureDataResponse>(
      `${UNIDASH_API_ROUTES.courseDepartureData.getAll}${courseId}`,
      {
        params,
      }
    );

    return coursesResponse;
  }
}
