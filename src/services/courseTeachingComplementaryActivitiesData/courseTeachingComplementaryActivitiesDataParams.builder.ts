import {
  FilterCourseTeachingComplementaryActivitiesDataDto,
  filterCourseTeachingComplementaryActivitiesDataDtoSchema,
} from "@unidash/api/dtos/courseTeachingComplementaryActivitiesData.dto";
import { BaseParamsBuilder } from "../params/baseParams.builder";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";

export type GetAllCourseTeachingComplementaryActivitiesDataParams =
  FilterCourseTeachingComplementaryActivitiesDataDto & PaginationDto;

export class CourseTeachingComplementaryActivitiesDataParamsBuilder extends BaseParamsBuilder<FilterCourseTeachingComplementaryActivitiesDataDto> {
  public applyFilters(
    filtersDto: FilterCourseTeachingComplementaryActivitiesDataDto
  ): this {
    const validatedFilters =
      filterCourseTeachingComplementaryActivitiesDataDtoSchema.parse(
        filtersDto
      );

    if (validatedFilters?.year) {
      this.params["year"] = validatedFilters.year;
    }

    if (validatedFilters?.semester) {
      this.params["semester"] = validatedFilters.semester;
    }

    return this;
  }
}
