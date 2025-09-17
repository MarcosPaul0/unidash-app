import { Toolbar } from "@unidash/app/(private)/_components/Toolbar";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { CourseInternshipDataSSRService } from "@unidash/services/courseInternshipData/courseInternshipData.ssr.service";
import { GetAllCourseInternshipDataParams } from "@unidash/services/courseInternshipData/courseInternshipDataParams.builder";
import { CourseInternshipDataTable } from "../../_components/CourseInternshipDataTable";

interface ListCourseInternshipDataPageProps {
  params: Promise<{ courseId: string }>;
  searchParams: Promise<GetAllCourseInternshipDataParams>;
}

export default async function ListCourseInternshipDataPage({
  params,
  searchParams,
}: ListCourseInternshipDataPageProps) {
  const { courseId } = await params;
  const searchParamsResult = await searchParams;

  const courseInternshipDataResponse =
    await CourseInternshipDataSSRService.getAll(
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
        breadcrumbPage="Indicadores de estágios do curso"
        addLink={{
          link: `${APP_ROUTES.private.registerCourseInternshipData}${courseId}`,
          label: "Novo registro de estágio",
        }}
      />

      <CourseInternshipDataTable
        courseInternshipData={courseInternshipDataResponse.courseInternshipData}
      />
    </>
  );
}
