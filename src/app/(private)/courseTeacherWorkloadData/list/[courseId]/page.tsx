import { Toolbar } from "@unidash/app/(private)/_components/Toolbar";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { CourseTeacherWorkloadDataSSRService } from "@unidash/services/courseTeacherWorkloadData/courseTeacherWorkloadData.ssr.service";
import { GetAllCourseTeacherWorkloadDataParams } from "@unidash/services/courseTeacherWorkloadData/courseTeacherWorkloadDataParams.builder";
import { CourseTeacherWorkloadDataTable } from "../../_components/CourseTeacherWorkloadDataTable";
import { IndicatorsFilterForm } from "@unidash/app/(private)/_components/IndicatorsFilterForm";

interface ListCourseTeacherWorkloadDataPageProps {
  params: Promise<{ courseId: string }>;
  searchParams: Promise<GetAllCourseTeacherWorkloadDataParams>;
}

export default async function ListCourseTeacherWorkloadDataPage({
  params,
  searchParams,
}: ListCourseTeacherWorkloadDataPageProps) {
  const { courseId } = await params;
  const searchParamsResult = await searchParams;

  const courseTeacherWorkloadDataResponse =
    await CourseTeacherWorkloadDataSSRService.getAll(
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
        breadcrumbPage="Indicadores de carga horária do docente no curso"
        addLink={{
          link: `${APP_ROUTES.private.registerCourseTeacherWorkloadData}${courseId}`,
          label: "Novo registro de carga horária do docente no curso",
        }}
        filterForm={<IndicatorsFilterForm />}
      />

      <CourseTeacherWorkloadDataTable
        courseTeacherWorkloadData={
          courseTeacherWorkloadDataResponse.courseTeacherWorkloadData
        }
      />
    </>
  );
}
