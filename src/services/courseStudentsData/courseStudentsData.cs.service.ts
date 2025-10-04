import { UNIDASH_API_ROUTES } from "@unidash/routes/unidashApi.routes";
import { apiClient } from "@unidash/lib/apiClient";
import { CourseStudentsDataParamsBuilder } from "./courseStudentsDataParams.builder";
import {
  FilterCourseStudentsDataDto,
  RegisterCourseStudentsDataDto,
} from "@unidash/api/dtos/courseStudentsData.dto";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";
import { CourseStudentsDataResponse } from "@unidash/api/responses/courseStudentsDataResponse.interface";

export class CourseStudentsDataCSService {
  static async getAll(
    courseId: string,
    pagination?: PaginationDto,
    filters?: FilterCourseStudentsDataDto
  ): Promise<CourseStudentsDataResponse> {
    const params = new CourseStudentsDataParamsBuilder()
      .applyPagination(pagination)
      .applyFilters(filters)
      .build();

    const courseStudentsDataResponse =
      await apiClient.get<CourseStudentsDataResponse>(
        `${UNIDASH_API_ROUTES.courseStudentsData.getAll}${courseId}`,
        {
          params,
        }
      );

    return courseStudentsDataResponse;
  }

  static async register(
    courseId: string,
    registerCourseStudentsDataDto: RegisterCourseStudentsDataDto
  ): Promise<void> {
    const courseStudentsDataResponse = await apiClient.post<void>(
      UNIDASH_API_ROUTES.courseStudentsData.register,
      {
        courseId: courseId,
        year: registerCourseStudentsDataDto.year,
        semester: registerCourseStudentsDataDto.semester,
        entrants: registerCourseStudentsDataDto.entrants,
        vacancies: registerCourseStudentsDataDto.vacancies,
        subscribers: registerCourseStudentsDataDto.subscribers,
      }
    );

    return courseStudentsDataResponse;
  }

  static async delete(courseId: string): Promise<void> {
    const courseStudentsDataResponse = await apiClient.delete<void>(
      `${UNIDASH_API_ROUTES.courseStudentsData.delete}${courseId}`
    );

    return courseStudentsDataResponse;
  }
}
