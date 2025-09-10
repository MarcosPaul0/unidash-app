import {
  FilterCourseExtensionActivitiesDataDto,
  filterCourseExtensionActivitiesDataDtoSchema,
} from "@unidash/api/dtos/courseExtensionActivitiesData.dto";
import { BaseParamsBuilder } from "../params/baseParams.builder";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";

export type GetAllCourseExtensionActivitiesDataParams =
  FilterCourseExtensionActivitiesDataDto & PaginationDto;

export class CourseExtensionActivitiesDataParamsBuilder extends BaseParamsBuilder<FilterCourseExtensionActivitiesDataDto> {
  public applyFilters(
    filtersDto: FilterCourseExtensionActivitiesDataDto
  ): this {
    const validatedFilters =
      filterCourseExtensionActivitiesDataDtoSchema.parse(filtersDto);

    if (validatedFilters?.year) {
      this.params["year"] = validatedFilters.year;
    }

    if (validatedFilters?.semester) {
      this.params["semester"] = validatedFilters.semester;
    }

    return this;
  }
}
