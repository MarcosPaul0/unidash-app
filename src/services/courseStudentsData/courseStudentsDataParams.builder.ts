import {
  FilterCourseStudentsDataDto,
  filterCourseStudentsDataDtoSchema,
} from "@unidash/api/dtos/courseStudentsData.dto";
import { BaseParamsBuilder } from "../params/baseParams.builder";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";

export type GetAllCourseStudentsDataParams = FilterCourseStudentsDataDto &
  PaginationDto;

export class CourseStudentsDataParamsBuilder extends BaseParamsBuilder<FilterCourseStudentsDataDto> {
  public applyFilters(filtersDto: FilterCourseStudentsDataDto): this {
    const validatedFilters =
      filterCourseStudentsDataDtoSchema.parse(filtersDto);

    if (validatedFilters?.year) {
      this.params["year"] = validatedFilters.year;
    }

    if (validatedFilters?.semester) {
      this.params["semester"] = validatedFilters.semester;
    }

    return this;
  }
}
