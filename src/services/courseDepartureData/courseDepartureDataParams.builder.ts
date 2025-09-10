import {
  FilterCourseDepartureDataDto,
  filterCourseDepartureDataDtoSchema,
} from "@unidash/api/dtos/courseDepartureData.dto";
import { BaseParamsBuilder } from "../params/baseParams.builder";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";

export type GetAllCourseDepartureDataParams = FilterCourseDepartureDataDto &
  PaginationDto;

export class CourseDepartureDataParamsBuilder extends BaseParamsBuilder<FilterCourseDepartureDataDto> {
  public applyFilters(filtersDto: FilterCourseDepartureDataDto): this {
    const validatedFilters =
      filterCourseDepartureDataDtoSchema.parse(filtersDto);

    if (validatedFilters?.year) {
      this.params["year"] = validatedFilters.year;
    }

    if (validatedFilters?.semester) {
      this.params["semester"] = validatedFilters.semester;
    }

    return this;
  }
}
