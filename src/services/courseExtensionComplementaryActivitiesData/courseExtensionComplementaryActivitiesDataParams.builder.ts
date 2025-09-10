import {
  FilterCourseExtensionComplementaryActivitiesDataDto,
  filterCourseExtensionComplementaryActivitiesDataDtoSchema,
} from "@unidash/api/dtos/courseExtensionComplementaryActivitiesData.dto";
import { BaseParamsBuilder } from "../params/baseParams.builder";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";

export type GetAllCourseExtensionComplementaryActivitiesDataParams =
  FilterCourseExtensionComplementaryActivitiesDataDto & PaginationDto;

export class CourseExtensionComplementaryActivitiesDataParamsBuilder extends BaseParamsBuilder<FilterCourseExtensionComplementaryActivitiesDataDto> {
  public applyFilters(
    filtersDto: FilterCourseExtensionComplementaryActivitiesDataDto
  ): this {
    const validatedFilters =
      filterCourseExtensionComplementaryActivitiesDataDtoSchema.parse(
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
