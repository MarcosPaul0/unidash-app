import { Toolbar } from "@unidash/app/(private)/_components/Toolbar";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { CourseStudentsDataTable } from "../../_components/CourseStudentsDataTable";
import { CourseStudentsDataSSRService } from "@unidash/services/courseStudentsData/courseStudentsData.ssr.service";
import { GetAllCourseStudentsDataParams } from "@unidash/services/courseStudentsData/courseStudentsDataParams.builder";

interface ListCourseStudentsDataPageProps {
  params: Promise<{ courseId: string }>;
  searchParams: Promise<GetAllCourseStudentsDataParams>;
}

export default async function ListCourseStudentsDataPage({
  params,
  searchParams,
}: ListCourseStudentsDataPageProps) {
  const { courseId } = await params;
  const searchParamsResult = await searchParams;

  const courseStudentsDataResponse = await CourseStudentsDataSSRService.getAll(
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
        addLink={{
          link: APP_ROUTES.private.registerCourseStudentsData,
          label: "Novo registro de estudantes",
        }}
        breadcrumbPage="Indicadores de estudents do curso"
      />

      <CourseStudentsDataTable
        courseStudentsData={courseStudentsDataResponse.courseStudentsData}
      />
    </>
  );
}
