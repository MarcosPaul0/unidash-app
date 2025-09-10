import {
  FilterCourseCoordinationDataDto,
  filterCourseCoordinationDataDtoSchema,
} from "@unidash/api/dtos/courseCoordinationData.dto";
import { BaseParamsBuilder } from "../params/baseParams.builder";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";

export type GetAllCourseCoordinationDataParams =
  FilterCourseCoordinationDataDto & PaginationDto;

export class CourseCoordinationDataParamsBuilder extends BaseParamsBuilder<FilterCourseCoordinationDataDto> {
  public applyFilters(filtersDto: FilterCourseCoordinationDataDto): this {
    const validatedFilters =
      filterCourseCoordinationDataDtoSchema.parse(filtersDto);

    if (validatedFilters?.year) {
      this.params["year"] = validatedFilters.year;
    }

    if (validatedFilters?.yearFrom) {
      this.params["yearFrom"] = validatedFilters.yearFrom;
    }

    if (validatedFilters?.yearTo) {
      this.params["yearTo"] = validatedFilters.yearTo;
    }

    if (validatedFilters?.semester) {
      this.params["semester"] = validatedFilters.semester;
    }

    return this;
  }
}
