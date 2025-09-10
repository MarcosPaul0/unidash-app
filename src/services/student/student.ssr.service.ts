import { PaginationDto } from "@unidash/api/dtos/pagination.dto";
import {
  StudentResponse,
  StudentsResponse,
} from "@unidash/api/responses/student.response";
import { createApiSSRClient } from "@unidash/lib/apiClientSSR";
import { UNIDASH_API_ROUTES } from "@unidash/routes/unidashApi.routes";
import { StudentParamsBuilder } from "./studentParams.builder";

export class StudentSSRService {
  static async getBySession(): Promise<StudentResponse> {
    const ssrApiClient = await createApiSSRClient();

    const studentResponse = await ssrApiClient.get<StudentResponse>(
      UNIDASH_API_ROUTES.student.getBySession
    );

    return studentResponse;
  }

  static async getById(studentId: string): Promise<StudentResponse> {
    const ssrApiClient = await createApiSSRClient();

    const studentResponse = await ssrApiClient.get<StudentResponse>(
      `${UNIDASH_API_ROUTES.student.getById}${studentId}`
    );

    return studentResponse;
  }

  static async getStudentsByCourse(
    courseId: string,
    pagination?: PaginationDto
  ): Promise<StudentsResponse> {
    const params = new StudentParamsBuilder()
      .applyPagination(pagination)
      .build();

    const ssrApiClient = await createApiSSRClient();

    const studentsResponse = await ssrApiClient.get<StudentsResponse>(
      `${UNIDASH_API_ROUTES.student.getByCourse}${courseId}`,
      {
        params,
      }
    );

    return studentsResponse;
  }
}
