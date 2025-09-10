import { UNIDASH_API_ROUTES } from "@unidash/routes/unidashApi.routes";
import { apiClient } from "@unidash/lib/apiClient";
import {
  FilterCourseExtensionActivitiesDataDto,
  RegisterCourseExtensionActivitiesDataDto,
} from "@unidash/api/dtos/courseExtensionActivitiesData.dto";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";
import { CourseExtensionActivitiesDataParamsBuilder } from "./courseExtensionActivitiesDataParams.builder";
import { CourseExtensionActivitiesDataResponse } from "@unidash/api/responses/courseExtensionActivitiesDataResponse.interface";

export class CourseExtensionActivitiesDataCSService {
  static async getAll(
    courseId: string,
    pagination?: PaginationDto,
    filters?: FilterCourseExtensionActivitiesDataDto
  ): Promise<CourseExtensionActivitiesDataResponse> {
    const params = new CourseExtensionActivitiesDataParamsBuilder()
      .applyPagination(pagination)
      .applyFilters(filters)
      .build();

    const courseExtensionActivitiesDataResponse =
      await apiClient.get<CourseExtensionActivitiesDataResponse>(
        `${UNIDASH_API_ROUTES.courseExtensionActivitiesData.getAll}${courseId}`,
        {
          params,
        }
      );

    return courseExtensionActivitiesDataResponse;
  }

  static async register(
    courseId: string,
    registerCourseExtensionActivitiesDataDto: RegisterCourseExtensionActivitiesDataDto
  ): Promise<void> {
    const courseExtensionActivitiesDataResponse = await apiClient.post<void>(
      UNIDASH_API_ROUTES.courseExtensionActivitiesData.register,
      {
        courseId: courseId,
        year: registerCourseExtensionActivitiesDataDto.year,
        semester: registerCourseExtensionActivitiesDataDto.semester,
        specialProjects:
          registerCourseExtensionActivitiesDataDto.specialProjects,
        participationInCompetitions:
          registerCourseExtensionActivitiesDataDto.participationInCompetitions,
        entrepreneurshipAndInnovation:
          registerCourseExtensionActivitiesDataDto.entrepreneurshipAndInnovation,
        eventOrganization:
          registerCourseExtensionActivitiesDataDto.eventOrganization,
        externalInternship:
          registerCourseExtensionActivitiesDataDto.externalInternship,
        cultureAndExtensionProjects:
          registerCourseExtensionActivitiesDataDto.cultureAndExtensionProjects,
        semiannualProjects:
          registerCourseExtensionActivitiesDataDto.semiannualProjects,
        workNonGovernmentalOrganization:
          registerCourseExtensionActivitiesDataDto.workNonGovernmentalOrganization,
        juniorCompanies:
          registerCourseExtensionActivitiesDataDto.juniorCompanies,
        provisionOfServicesWithSelfEmployedWorkers:
          registerCourseExtensionActivitiesDataDto.provisionOfServicesWithSelfEmployedWorkers,
      }
    );

    return courseExtensionActivitiesDataResponse;
  }

  static async delete(courseId: string): Promise<void> {
    const courseExtensionActivitiesDataResponse = await apiClient.delete<void>(
      `${UNIDASH_API_ROUTES.courseExtensionActivitiesData.delete}${courseId}`
    );

    return courseExtensionActivitiesDataResponse;
  }
}
