import {
  FilterTeacherResearchAndExtensionProjectsDataDto,
  filterTeacherResearchAndExtensionProjectsDataDtoSchema,
} from "@unidash/api/dtos/teacherResearchAndExtensionProjectsData.dto";
import { BaseParamsBuilder } from "../params/baseParams.builder";
import { PaginationDto } from "@unidash/api/dtos/pagination.dto";

export type GetAllTeacherResearchAndExtensionProjectsDataParams =
  FilterTeacherResearchAndExtensionProjectsDataDto & PaginationDto;

export class TeacherResearchAndExtensionProjectsDataParamsBuilder extends BaseParamsBuilder<FilterTeacherResearchAndExtensionProjectsDataDto> {
  public applyFilters(
    filtersDto: FilterTeacherResearchAndExtensionProjectsDataDto
  ): this {
    const validatedFilters =
      filterTeacherResearchAndExtensionProjectsDataDtoSchema.parse(filtersDto);

    if (validatedFilters?.year) {
      this.params["year"] = validatedFilters.year;
    }

    if (validatedFilters?.semester) {
      this.params["semester"] = validatedFilters.semester;
    }

    return this;
  }
}
