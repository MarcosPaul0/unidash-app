import {
  FilterCourseCompletionWorkDataDto,
  filterCourseCompletionWorkDataDtoSchema,
} from "@unidash/api/dtos/courseCompletionWorkData.dto";
import { BaseParamsBuilder } from "../params/baseParams.builder";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";

export type GetAllCourseCompletionWorkDataParams =
  FilterCourseCompletionWorkDataDto & PaginationDto;

export class CourseCompletionWorkDataParamsBuilder extends BaseParamsBuilder<FilterCourseCompletionWorkDataDto> {
  public applyFilters(filtersDto: FilterCourseCompletionWorkDataDto): this {
    const validatedFilters =
      filterCourseCompletionWorkDataDtoSchema.parse(filtersDto);

    if (validatedFilters?.year) {
      this.params["year"] = validatedFilters.year;
    }

    if (validatedFilters?.semester) {
      this.params["semester"] = validatedFilters.semester;
    }

    return this;
  }
}
