import { UNIDASH_API_ROUTES } from "@unidash/routes/unidashApi.routes";
import { apiClient } from "@unidash/lib/apiClient";
import {
  FilterCourseSearchComplementaryActivitiesDataDto,
  RegisterCourseSearchComplementaryActivitiesDataDto,
} from "@unidash/api/dtos/courseSearchComplementaryActivitiesData.dto";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";
import { CourseSearchComplementaryActivitiesDataParamsBuilder } from "./courseSearchComplementaryActivitiesDataParams.builder";
import { CourseSearchComplementaryActivitiesDataResponse } from "@unidash/api/responses/courseSearchComplementaryActivitiesDataResponse.interface";

export class CourseSearchComplementaryActivitiesDataCSService {
  static async getAll(
    courseId: string,
    pagination?: PaginationDto,
    filters?: FilterCourseSearchComplementaryActivitiesDataDto
  ): Promise<CourseSearchComplementaryActivitiesDataResponse> {
    const params = new CourseSearchComplementaryActivitiesDataParamsBuilder()
      .applyPagination(pagination)
      .applyFilters(filters)
      .build();

    const courseSearchComplementaryActivitiesDataResponse =
      await apiClient.get<CourseSearchComplementaryActivitiesDataResponse>(
        `${UNIDASH_API_ROUTES.courseSearchComplementaryActivitiesData.getAll}${courseId}`,
        {
          params,
        }
      );

    return courseSearchComplementaryActivitiesDataResponse;
  }

  static async register(
    courseId: string,
    registerCourseSearchComplementaryActivitiesDataDto: RegisterCourseSearchComplementaryActivitiesDataDto
  ): Promise<void> {
    const courseSearchComplementaryActivitiesDataResponse =
      await apiClient.post<void>(
        UNIDASH_API_ROUTES.courseSearchComplementaryActivitiesData.register,
        {
          courseId: courseId,
          year: registerCourseSearchComplementaryActivitiesDataDto.year,
          semester: registerCourseSearchComplementaryActivitiesDataDto.semester,
          scientificInitiation:
            registerCourseSearchComplementaryActivitiesDataDto.scientificInitiation,
          developmentInitiation:
            registerCourseSearchComplementaryActivitiesDataDto.developmentInitiation,
          publishedArticles:
            registerCourseSearchComplementaryActivitiesDataDto.publishedArticles,
          fullPublishedArticles:
            registerCourseSearchComplementaryActivitiesDataDto.fullPublishedArticles,
          publishedAbstracts:
            registerCourseSearchComplementaryActivitiesDataDto.publishedAbstracts,
          presentationOfWork:
            registerCourseSearchComplementaryActivitiesDataDto.presentationOfWork,
          participationInEvents:
            registerCourseSearchComplementaryActivitiesDataDto.participationInEvents,
        }
      );

    return courseSearchComplementaryActivitiesDataResponse;
  }

  static async delete(courseId: string): Promise<void> {
    const courseSearchComplementaryActivitiesDataResponse =
      await apiClient.delete<void>(
        `${UNIDASH_API_ROUTES.courseSearchComplementaryActivitiesData.delete}${courseId}`
      );

    return courseSearchComplementaryActivitiesDataResponse;
  }
}
