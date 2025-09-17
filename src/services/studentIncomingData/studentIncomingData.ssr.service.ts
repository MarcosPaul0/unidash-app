import { UNIDASH_API_ROUTES } from "@unidash/routes/unidashApi.routes";
import { createApiSSRClient } from "@unidash/lib/apiClientSSR";
import { StudentIncomingDataParamsBuilder } from "./studentIncomingDataParams.builder";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";
import { StudentIncomingDataResponse } from "@unidash/api/responses/studentIncomingDataResponse.interface";
import { FilterStudentIncomingDataDto } from "@unidash/api/dtos/studentIncomingData.dto";

export class StudentIncomingDataSSRService {
  static async getAll(
    courseId: string,
    pagination?: PaginationDto,
    filters?: FilterStudentIncomingDataDto
  ): Promise<StudentIncomingDataResponse> {
    const params = new StudentIncomingDataParamsBuilder()
      .applyPagination(pagination)
      .applyFilters(filters)
      .build();

    const ssrApiClient = await createApiSSRClient();

    const coursesResponse = await ssrApiClient.get<StudentIncomingDataResponse>(
      `${UNIDASH_API_ROUTES.studentIncomingData.getAll}${courseId}`,
      {
        params,
      }
    );

    return coursesResponse;
  }
}
