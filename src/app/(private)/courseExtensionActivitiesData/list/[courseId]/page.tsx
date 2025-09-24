import { Toolbar } from "@unidash/app/(private)/_components/Toolbar";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { CourseExtensionActivitiesDataSSRService } from "@unidash/services/courseExtensionActivitiesData/courseExtensionActivitiesData.ssr.service";
import { GetAllCourseExtensionActivitiesDataParams } from "@unidash/services/courseExtensionActivitiesData/courseExtensionActivitiesDataParams.builder";
import { CourseExtensionActivitiesDataTable } from "../../_components/CourseExtensionActivitiesDataTable";
import { IndicatorsFilterForm } from "@unidash/app/(private)/_components/IndicatorsFilterForm";

interface ListCourseExtensionActivitiesDataPageProps {
  params: Promise<{ courseId: string }>;
  searchParams: Promise<GetAllCourseExtensionActivitiesDataParams>;
}

export default async function ListCourseExtensionActivitiesDataPage({
  params,
  searchParams,
}: ListCourseExtensionActivitiesDataPageProps) {
  const { courseId } = await params;
  const searchParamsResult = await searchParams;

  const courseExtensionActivitiesDataResponse =
    await CourseExtensionActivitiesDataSSRService.getAll(
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
        breadcrumbPage="Indicadores de atividades de extensão do curso"
        addLink={{
          link: APP_ROUTES.private.registerCourseExtensionActivitiesData,
          label: "Novo registro de atividades de extensão",
        }}
        filterForm={<IndicatorsFilterForm />}
      />

      <CourseExtensionActivitiesDataTable
        courseExtensionActivitiesData={
          courseExtensionActivitiesDataResponse.courseExtensionActivitiesData
        }
      />
    </>
  );
}
