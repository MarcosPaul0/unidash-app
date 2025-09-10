import { Toolbar } from "@unidash/app/(private)/_components/Toolbar";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { CourseExtensionComplementaryActivitiesDataSSRService } from "@unidash/services/courseExtensionComplementaryActivitiesData/courseExtensionComplementaryActivitiesData.ssr.service";
import { GetAllCourseExtensionComplementaryActivitiesDataParams } from "@unidash/services/courseExtensionComplementaryActivitiesData/courseExtensionComplementaryActivitiesDataParams.builder";
import { CourseExtensionComplementaryActivitiesDataTable } from "../../_components/CourseExtensionComplementaryActivitiesDataTable";

interface ListCourseExtensionComplementaryActivitiesDataPageProps {
  params: Promise<{ courseId: string }>;
  searchParams: Promise<GetAllCourseExtensionComplementaryActivitiesDataParams>;
}

export default async function ListCourseExtensionComplementaryActivitiesDataPage({
  params,
  searchParams,
}: ListCourseExtensionComplementaryActivitiesDataPageProps) {
  const { courseId } = await params;
  const searchParamsResult = await searchParams;

  const courseExtensionComplementaryActivitiesDataResponse =
    await CourseExtensionComplementaryActivitiesDataSSRService.getAll(
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
        breadcrumbPage="Indicadores de atividades complementares de extensão do curso"
        addLink={{
          link: APP_ROUTES.private
            .registerCourseExtensionComplementaryActivitiesData,
          label: "Novo registro de atividades complementares de extensão",
        }}
      />

      <CourseExtensionComplementaryActivitiesDataTable
        courseExtensionComplementaryActivitiesData={
          courseExtensionComplementaryActivitiesDataResponse.courseExtensionComplementaryActivitiesData
        }
      />
    </>
  );
}
