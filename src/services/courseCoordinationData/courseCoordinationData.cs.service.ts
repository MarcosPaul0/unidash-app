import { UNIDASH_API_ROUTES } from "@unidash/routes/unidashApi.routes";
import { apiClient } from "@unidash/lib/apiClient";
import {
  FilterCourseCoordinationDataDto,
  RegisterCourseCoordinationDataDto,
} from "@unidash/api/dtos/courseCoordinationData.dto";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";
import { CourseCoordinationDataParamsBuilder } from "./courseCoordinationDataParams.builder";
import { CourseCoordinationDataResponse } from "@unidash/api/responses/courseCoordinationDataResponse.interface";

export class CourseCoordinationDataCSService {
  static async getAll(
    courseId: string,
    pagination?: PaginationDto,
    filters?: FilterCourseCoordinationDataDto
  ): Promise<CourseCoordinationDataResponse> {
    const params = new CourseCoordinationDataParamsBuilder()
      .applyPagination(pagination)
      .applyFilters(filters)
      .build();

    const courseCoordinationDataResponse =
      await apiClient.get<CourseCoordinationDataResponse>(
        `${UNIDASH_API_ROUTES.courseCoordinationData.getAll}${courseId}`,
        {
          params,
        }
      );

    return courseCoordinationDataResponse;
  }

  static async register(
    courseId: string,
    registerCourseCoordinationDataDto: RegisterCourseCoordinationDataDto
  ): Promise<void> {
    const courseCoordinationDataResponse = await apiClient.post<void>(
      UNIDASH_API_ROUTES.courseCoordinationData.register,
      {
        courseId: courseId,
        year: registerCourseCoordinationDataDto.year,
        semester: registerCourseCoordinationDataDto.semester,
        servicesRequestsBySystem:
          registerCourseCoordinationDataDto.servicesRequestsBySystem,
        servicesRequestsByEmail:
          registerCourseCoordinationDataDto.servicesRequestsByEmail,
        resolutionActions: registerCourseCoordinationDataDto.resolutionActions,
        administrativeDecisionActions:
          registerCourseCoordinationDataDto.administrativeDecisionActions,
        meetingsByBoardOfDirectors:
          registerCourseCoordinationDataDto.meetingsByBoardOfDirectors,
        meetingsByUndergraduateChamber:
          registerCourseCoordinationDataDto.meetingsByUndergraduateChamber,
        meetingsByCourseCouncil:
          registerCourseCoordinationDataDto.meetingsByCourseCouncil,
        meetingsByNde: registerCourseCoordinationDataDto.meetingsByNde,
        academicActionPlans:
          registerCourseCoordinationDataDto.academicActionPlans,
        administrativeActionPlans:
          registerCourseCoordinationDataDto.administrativeActionPlans,
      }
    );

    return courseCoordinationDataResponse;
  }

  static async delete(courseId: string): Promise<void> {
    const courseCoordinationDataResponse = await apiClient.delete<void>(
      `${UNIDASH_API_ROUTES.courseCoordinationData.delete}${courseId}`
    );

    return courseCoordinationDataResponse;
  }
}
