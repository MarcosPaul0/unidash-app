import {
  FilterCourseInternshipDataDto,
  filterCourseInternshipDataDtoSchema,
} from "@unidash/api/dtos/courseInternshipData.dto";
import { BaseParamsBuilder } from "../params/baseParams.builder";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";

export type GetAllCourseInternshipDataParams = FilterCourseInternshipDataDto &
  PaginationDto;

export class CourseInternshipDataParamsBuilder extends BaseParamsBuilder<FilterCourseInternshipDataDto> {
  public applyFilters(filtersDto: FilterCourseInternshipDataDto): this {
    const validatedFilters =
      filterCourseInternshipDataDtoSchema.parse(filtersDto);

    if (validatedFilters?.year) {
      this.params["year"] = validatedFilters.year;
    }

    if (validatedFilters?.semester) {
      this.params["semester"] = validatedFilters.semester;
    }

    return this;
  }
}
