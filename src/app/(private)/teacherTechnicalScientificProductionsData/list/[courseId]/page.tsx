import { Toolbar } from "@unidash/app/(private)/_components/Toolbar";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { TeacherTechnicalScientificProductionsDataTable } from "../../_components/TeacherTechnicalScientificProductionsDataTable";
import { GetAllTeacherTechnicalScientificProductionsDataParams } from "@unidash/services/teacherTechnicalScientificProductionsData/teacherTechnicalScientificProductionsDataParams.builder";
import { TeacherTechnicalScientificProductionsDataSSRService } from "@unidash/services/teacherTechnicalScientificProductionsData/teacherTechnicalScientificProductionsData.ssr.service";

interface ListTeacherTechnicalScientificProductionsDataPageProps {
  params: Promise<{ courseId: string }>;
  searchParams: Promise<GetAllTeacherTechnicalScientificProductionsDataParams>;
}

export default async function ListTeacherTechnicalScientificProductionsDataPage({
  params,
  searchParams,
}: ListTeacherTechnicalScientificProductionsDataPageProps) {
  const { courseId } = await params;
  const searchParamsResult = await searchParams;

  const teacherTechnicalScientificProductionsDataResponse =
    await TeacherTechnicalScientificProductionsDataSSRService.getAll(
      courseId,
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
        breadcrumbPage="Indicadores de produções técnico-científicas"
        addLink={{
          link: APP_ROUTES.private
            .registerTeacherTechnicalScientificProductionsData,
          label: "Novo registro de produções técnico-científicas",
        }}
      />

      <TeacherTechnicalScientificProductionsDataTable
        teacherTechnicalScientificProductionsData={
          teacherTechnicalScientificProductionsDataResponse.teacherTechnicalScientificProductionsData
        }
      />
    </>
  );
}
