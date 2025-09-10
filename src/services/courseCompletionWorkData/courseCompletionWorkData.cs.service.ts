import { UNIDASH_API_ROUTES } from "@unidash/routes/unidashApi.routes";
import { apiClient } from "@unidash/lib/apiClient";
import {
  FilterCourseCompletionWorkDataDto,
  RegisterCourseCompletionWorkDataDto,
} from "@unidash/api/dtos/courseCompletionWorkData.dto";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";
import { CourseCompletionWorkDataParamsBuilder } from "./courseCompletionWorkDataParams.builder";
import { CourseCompletionWorkDataResponse } from "@unidash/api/responses/courseCompletionWorkDataResponse.interface";

export class CourseCompletionWorkDataCSService {
  static async getAll(
    courseId: string,
    pagination?: PaginationDto,
    filters?: FilterCourseCompletionWorkDataDto
  ): Promise<CourseCompletionWorkDataResponse> {
    const params = new CourseCompletionWorkDataParamsBuilder()
      .applyPagination(pagination)
      .applyFilters(filters)
      .build();

    const courseCompletionWorkDataResponse =
      await apiClient.get<CourseCompletionWorkDataResponse>(
        `${UNIDASH_API_ROUTES.courseCompletionWorkData.getAll}${courseId}`,
        {
          params,
        }
      );

    return courseCompletionWorkDataResponse;
  }

  static async register(
    courseId: string,
    registerCourseCompletionWorkDataDto: RegisterCourseCompletionWorkDataDto
  ): Promise<void> {
    const courseCompletionWorkDataResponse = await apiClient.post<void>(
      UNIDASH_API_ROUTES.courseCompletionWorkData.register,
      {
        courseId: courseId,
        year: registerCourseCompletionWorkDataDto.year,
        semester: registerCourseCompletionWorkDataDto.semester,
        abandonments: registerCourseCompletionWorkDataDto.abandonments,
        defenses: registerCourseCompletionWorkDataDto.defenses,
        enrollments: registerCourseCompletionWorkDataDto.enrollments,
      }
    );

    return courseCompletionWorkDataResponse;
  }

  static async delete(courseId: string): Promise<void> {
    const courseCompletionWorkDataResponse = await apiClient.delete<void>(
      `${UNIDASH_API_ROUTES.courseCompletionWorkData.delete}${courseId}`
    );

    return courseCompletionWorkDataResponse;
  }
}
