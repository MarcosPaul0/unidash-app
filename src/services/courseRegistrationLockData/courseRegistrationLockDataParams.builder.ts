import {
  FilterCourseRegistrationLockDataDto,
  filterCourseRegistrationLockDataDtoSchema,
} from "@unidash/api/dtos/courseRegistrationLockData.dto";
import { BaseParamsBuilder } from "../params/baseParams.builder";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";

export type GetAllCourseRegistrationLockDataParams =
  FilterCourseRegistrationLockDataDto & PaginationDto;

export class CourseRegistrationLockDataParamsBuilder extends BaseParamsBuilder<FilterCourseRegistrationLockDataDto> {
  public applyFilters(filtersDto: FilterCourseRegistrationLockDataDto): this {
    const validatedFilters =
      filterCourseRegistrationLockDataDtoSchema.parse(filtersDto);

    if (validatedFilters?.year) {
      this.params["year"] = validatedFilters.year;
    }

    if (validatedFilters?.semester) {
      this.params["semester"] = validatedFilters.semester;
    }

    return this;
  }
}
