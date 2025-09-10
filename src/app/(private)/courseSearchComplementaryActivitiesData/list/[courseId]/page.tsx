import { Toolbar } from "@unidash/app/(private)/_components/Toolbar";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { CourseSearchComplementaryActivitiesDataSSRService } from "@unidash/services/courseSearchComplementaryActivitiesData/courseSearchComplementaryActivitiesData.ssr.service";
import { GetAllCourseSearchComplementaryActivitiesDataParams } from "@unidash/services/courseSearchComplementaryActivitiesData/courseSearchComplementaryActivitiesDataParams.builder";
import { CourseSearchComplementaryActivitiesDataTable } from "../../_components/CourseSearchComplementaryActivitiesDataTable";

interface ListCourseSearchComplementaryActivitiesDataPageProps {
  params: Promise<{ courseId: string }>;
  searchParams: Promise<GetAllCourseSearchComplementaryActivitiesDataParams>;
}

export default async function ListCourseSearchComplementaryActivitiesDataPage({
  params,
  searchParams,
}: ListCourseSearchComplementaryActivitiesDataPageProps) {
  const { courseId } = await params;
  const searchParamsResult = await searchParams;

  const courseSearchComplementaryActivitiesDataResponse =
    await CourseSearchComplementaryActivitiesDataSSRService.getAll(
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
        breadcrumbPage="Indicadores de atividades complementares de pesquisa do curso"
        addLink={{
          link: APP_ROUTES.private
            .registerCourseSearchComplementaryActivitiesData,
          label: "Novo registro de atividades complementares de pesquisa",
        }}
      />

      <CourseSearchComplementaryActivitiesDataTable
        courseSearchComplementaryActivitiesData={
          courseSearchComplementaryActivitiesDataResponse.courseSearchComplementaryActivitiesData
        }
      />
    </>
  );
}
