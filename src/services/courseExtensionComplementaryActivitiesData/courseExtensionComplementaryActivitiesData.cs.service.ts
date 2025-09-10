import { UNIDASH_API_ROUTES } from "@unidash/routes/unidashApi.routes";
import { apiClient } from "@unidash/lib/apiClient";
import {
  FilterCourseExtensionComplementaryActivitiesDataDto,
  RegisterCourseExtensionComplementaryActivitiesDataDto,
} from "@unidash/api/dtos/courseExtensionComplementaryActivitiesData.dto";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";
import { CourseExtensionComplementaryActivitiesDataParamsBuilder } from "./courseExtensionComplementaryActivitiesDataParams.builder";
import { CourseExtensionComplementaryActivitiesDataResponse } from "@unidash/api/responses/courseExtensionComplementaryActivitiesDataResponse.interface";

export class CourseExtensionComplementaryActivitiesDataCSService {
  static async getAll(
    courseId: string,
    pagination?: PaginationDto,
    filters?: FilterCourseExtensionComplementaryActivitiesDataDto
  ): Promise<CourseExtensionComplementaryActivitiesDataResponse> {
    const params = new CourseExtensionComplementaryActivitiesDataParamsBuilder()
      .applyPagination(pagination)
      .applyFilters(filters)
      .build();

    const courseExtensionComplementaryActivitiesDataResponse =
      await apiClient.get<CourseExtensionComplementaryActivitiesDataResponse>(
        `${UNIDASH_API_ROUTES.courseExtensionComplementaryActivitiesData.getAll}${courseId}`,
        {
          params,
        }
      );

    return courseExtensionComplementaryActivitiesDataResponse;
  }

  static async register(
    courseId: string,
    registerCourseExtensionComplementaryActivitiesDataDto: RegisterCourseExtensionComplementaryActivitiesDataDto
  ): Promise<void> {
    const courseExtensionComplementaryActivitiesDataResponse =
      await apiClient.post<void>(
        UNIDASH_API_ROUTES.courseExtensionComplementaryActivitiesData.register,
        {
          courseId: courseId,
          year: registerCourseExtensionComplementaryActivitiesDataDto.year,
          semester:
            registerCourseExtensionComplementaryActivitiesDataDto.semester,
          culturalActivities:
            registerCourseExtensionComplementaryActivitiesDataDto.culturalActivities,
          sportsCompetitions:
            registerCourseExtensionComplementaryActivitiesDataDto.sportsCompetitions,
          awardsAtEvents:
            registerCourseExtensionComplementaryActivitiesDataDto.awardsAtEvents,
          studentRepresentation:
            registerCourseExtensionComplementaryActivitiesDataDto.studentRepresentation,
          participationInCollegiateBodies:
            registerCourseExtensionComplementaryActivitiesDataDto.participationInCollegiateBodies,
        }
      );

    return courseExtensionComplementaryActivitiesDataResponse;
  }

  static async delete(courseId: string): Promise<void> {
    const courseExtensionComplementaryActivitiesDataResponse =
      await apiClient.delete<void>(
        `${UNIDASH_API_ROUTES.courseExtensionComplementaryActivitiesData.delete}${courseId}`
      );

    return courseExtensionComplementaryActivitiesDataResponse;
  }
}
