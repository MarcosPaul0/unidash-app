import { Toolbar } from "@unidash/app/(private)/_components/Toolbar";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { CourseCoordinationDataSSRService } from "@unidash/services/courseCoordinationData/courseCoordinationData.ssr.service";
import { GetAllCourseCoordinationDataParams } from "@unidash/services/courseCoordinationData/courseCoordinationDataParams.builder";
import { CourseCoordinationDataTable } from "../../_components/CourseCoordinationDataTable";
import { IndicatorsFilterForm } from "@unidash/app/(private)/_components/IndicatorsFilterForm";

interface ListCourseCoordinationDataPageProps {
  params: Promise<{ courseId: string }>;
  searchParams: Promise<GetAllCourseCoordinationDataParams>;
}

export default async function ListCourseCoordinationDataPage({
  params,
  searchParams,
}: ListCourseCoordinationDataPageProps) {
  const { courseId } = await params;
  const searchParamsResult = await searchParams;

  const courseCoordinationDataResponse =
    await CourseCoordinationDataSSRService.getAll(
      courseId,
      {
        itemsPerPage: searchParamsResult?.itemsPerPage,
        page: searchParamsResult?.page,
      },
      {
        semester: searchParamsResult?.semester ?? null,
        year: searchParamsResult?.year ?? null,
        yearFrom: null,
        yearTo: null,
      }
    );

  return (
    <>
      <Toolbar
        breadcrumbPage="Indicadores da coordenação do curso"
        addLink={{
          link: APP_ROUTES.private.registerCourseCoordinationData,
          label: "Novo registro da coordenação",
        }}
        filterForm={<IndicatorsFilterForm />}
      />

      <CourseCoordinationDataTable
        courseCoordinationData={
          courseCoordinationDataResponse.courseCoordinationData
        }
      />
    </>
  );
}
