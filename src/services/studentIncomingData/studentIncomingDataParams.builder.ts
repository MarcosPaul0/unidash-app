import {
  FilterStudentIncomingDataDto,
  filterStudentIncomingDataDtoSchema,
} from "@unidash/api/dtos/studentIncomingData.dto";
import { BaseParamsBuilder } from "../params/baseParams.builder";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";

export type GetAllStudentIncomingDataParams = FilterStudentIncomingDataDto &
  PaginationDto;

export class StudentIncomingDataParamsBuilder extends BaseParamsBuilder<FilterStudentIncomingDataDto> {
  public applyFilters(filtersDto: FilterStudentIncomingDataDto): this {
    const validatedFilters =
      filterStudentIncomingDataDtoSchema.parse(filtersDto);

    if (validatedFilters?.year) {
      this.params["year"] = validatedFilters.year;
    }

    if (validatedFilters?.semester) {
      this.params["semester"] = validatedFilters.semester;
    }

    return this;
  }
}
