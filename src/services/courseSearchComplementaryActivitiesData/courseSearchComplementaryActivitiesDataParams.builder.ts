import {
  FilterCourseSearchComplementaryActivitiesDataDto,
  filterCourseSearchComplementaryActivitiesDataDtoSchema,
} from "@unidash/api/dtos/courseSearchComplementaryActivitiesData.dto";
import { BaseParamsBuilder } from "../params/baseParams.builder";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";

export type GetAllCourseSearchComplementaryActivitiesDataParams =
  FilterCourseSearchComplementaryActivitiesDataDto & PaginationDto;

export class CourseSearchComplementaryActivitiesDataParamsBuilder extends BaseParamsBuilder<FilterCourseSearchComplementaryActivitiesDataDto> {
  public applyFilters(
    filtersDto: FilterCourseSearchComplementaryActivitiesDataDto
  ): this {
    const validatedFilters =
      filterCourseSearchComplementaryActivitiesDataDtoSchema.parse(filtersDto);

    if (validatedFilters?.year) {
      this.params["year"] = validatedFilters.year;
    }

    if (validatedFilters?.semester) {
      this.params["semester"] = validatedFilters.semester;
    }

    return this;
  }
}
