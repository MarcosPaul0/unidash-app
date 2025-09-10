import {
  FilterTeacherSupervisedCompletionWorkDataDto,
  filterTeacherSupervisedCompletionWorkDataDtoSchema,
} from "@unidash/api/dtos/teacherSupervisedCompletionWorkData.dto";
import { BaseParamsBuilder } from "../params/baseParams.builder";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";

export type GetAllTeacherSupervisedCompletionWorkDataParams =
  FilterTeacherSupervisedCompletionWorkDataDto & PaginationDto;

export class TeacherSupervisedCompletionWorkDataParamsBuilder extends BaseParamsBuilder<FilterTeacherSupervisedCompletionWorkDataDto> {
  public applyFilters(
    filtersDto: FilterTeacherSupervisedCompletionWorkDataDto
  ): this {
    const validatedFilters =
      filterTeacherSupervisedCompletionWorkDataDtoSchema.parse(filtersDto);

    if (validatedFilters?.year) {
      this.params["year"] = validatedFilters.year;
    }

    if (validatedFilters?.semester) {
      this.params["semester"] = validatedFilters.semester;
    }

    return this;
  }
}
