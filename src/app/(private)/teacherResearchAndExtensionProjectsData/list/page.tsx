import { Toolbar } from "@unidash/app/(private)/_components/Toolbar";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { TeacherResearchAndExtensionProjectsDataTable } from "../_components/TeacherResearchAndExtensionProjectsDataTable";
import { GetAllTeacherResearchAndExtensionProjectsDataParams } from "@unidash/services/teacherResearchAndExtensionProjectsData/teacherResearchAndExtensionProjectsDataParams.builder";
import { TeacherResearchAndExtensionProjectsDataSSRService } from "@unidash/services/teacherResearchAndExtensionProjectsData/teacherResearchAndExtensionProjectsData.ssr.service";
import { IndicatorsFilterForm } from "../../_components/IndicatorsFilterForm";

interface ListTeacherResearchAndExtensionProjectsDataPageProps {
  searchParams: Promise<GetAllTeacherResearchAndExtensionProjectsDataParams>;
}

export default async function ListTeacherResearchAndExtensionProjectsDataPage({
  searchParams,
}: ListTeacherResearchAndExtensionProjectsDataPageProps) {
  const searchParamsResult = await searchParams;

  const teacherResearchAndExtensionProjectsDataResponse =
    await TeacherResearchAndExtensionProjectsDataSSRService.getAllForTeacher(
      {
        itemsPerPage: searchParamsResult?.itemsPerPage,
        page: searchParamsResult?.page,
      },
      {
        semester: searchParamsResult?.semester,
        year: searchParamsResult?.year,
      }
    );

  return (
    <>
      <Toolbar
        breadcrumbPage="Indicadores de projetos de pesquisa e extensão"
        addLink={{
          link: APP_ROUTES.private
            .registerTeacherResearchAndExtensionProjectsData,
          label: "Novo registro de projetos de pesquisa e extensão",
        }}
        filterForm={<IndicatorsFilterForm />}
      />

      <TeacherResearchAndExtensionProjectsDataTable
        teacherResearchAndExtensionProjectsData={
          teacherResearchAndExtensionProjectsDataResponse.teacherResearchAndExtensionProjectsData
        }
      />
    </>
  );
}
