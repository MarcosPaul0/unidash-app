import { Toolbar } from "@unidash/app/(private)/_components/Toolbar";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { CourseTeachingComplementaryActivitiesDataSSRService } from "@unidash/services/courseTeachingComplementaryActivitiesData/courseTeachingComplementaryActivitiesData.ssr.service";
import { GetAllCourseTeachingComplementaryActivitiesDataParams } from "@unidash/services/courseTeachingComplementaryActivitiesData/courseTeachingComplementaryActivitiesDataParams.builder";
import { CourseTeachingComplementaryActivitiesDataTable } from "../../_components/CourseTeachingComplementaryActivitiesDataTable";
import { IndicatorsFilterForm } from "@unidash/app/(private)/_components/IndicatorsFilterForm";

interface ListCourseTeachingComplementaryActivitiesDataPageProps {
  params: Promise<{ courseId: string }>;
  searchParams: Promise<GetAllCourseTeachingComplementaryActivitiesDataParams>;
}

export default async function ListCourseTeachingComplementaryActivitiesDataPage({
  params,
  searchParams,
}: ListCourseTeachingComplementaryActivitiesDataPageProps) {
  const { courseId } = await params;
  const searchParamsResult = await searchParams;

  const courseTeachingComplementaryActivitiesDataResponse =
    await CourseTeachingComplementaryActivitiesDataSSRService.getAll(
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
        breadcrumbPage="Indicadores de atividades complementares de ensino do curso"
        addLink={{
          link: APP_ROUTES.private
            .registerCourseTeachingComplementaryActivitiesData,
          label: "Novo registro de atividades complementares de ensino",
        }}
        filterForm={<IndicatorsFilterForm />}
      />

      <CourseTeachingComplementaryActivitiesDataTable
        courseTeachingComplementaryActivitiesData={
          courseTeachingComplementaryActivitiesDataResponse.courseTeachingComplementaryActivitiesData
        }
      />
    </>
  );
}
