import {
  FilterTeacherTechnicalScientificProductionsDataDto,
  filterTeacherTechnicalScientificProductionsDataDtoSchema,
} from "@unidash/api/dtos/teacherTechnicalScientificProductionsData.dto";
import { BaseParamsBuilder } from "../params/baseParams.builder";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";

export type GetAllTeacherTechnicalScientificProductionsDataParams =
  FilterTeacherTechnicalScientificProductionsDataDto & PaginationDto;

export class TeacherTechnicalScientificProductionsDataParamsBuilder extends BaseParamsBuilder<FilterTeacherTechnicalScientificProductionsDataDto> {
  public applyFilters(
    filtersDto: FilterTeacherTechnicalScientificProductionsDataDto
  ): this {
    const validatedFilters =
      filterTeacherTechnicalScientificProductionsDataDtoSchema.parse(
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
