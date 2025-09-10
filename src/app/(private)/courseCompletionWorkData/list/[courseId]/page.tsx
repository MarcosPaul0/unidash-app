import { Toolbar } from "@unidash/app/(private)/_components/Toolbar";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { CourseCompletionWorkDataSSRService } from "@unidash/services/courseCompletionWorkData/courseCompletionWorkData.ssr.service";
import { GetAllCourseCompletionWorkDataParams } from "@unidash/services/courseCompletionWorkData/courseCompletionWorkDataParams.builder";
import { CourseCompletionWorkDataTable } from "../../_components/CourseCompletionWorkDataTable";

interface ListCourseCompletionWorkDataPageProps {
  params: Promise<{ courseId: string }>;
  searchParams: Promise<GetAllCourseCompletionWorkDataParams>;
}

export default async function ListCourseCompletionWorkDataPage({
  params,
  searchParams,
}: ListCourseCompletionWorkDataPageProps) {
  const { courseId } = await params;
  const searchParamsResult = await searchParams;

  const courseCompletionWorkDataResponse =
    await CourseCompletionWorkDataSSRService.getAll(
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
        breadcrumbPage="Indicadores de trabalhos de conclusão de curso"
        addLink={{
          link: APP_ROUTES.private.registerCourseCompletionWorkData,
          label: "Novo registro de TCC",
        }}
      />

      <CourseCompletionWorkDataTable
        courseCompletionWorkData={
          courseCompletionWorkDataResponse.courseCompletionWorkData
        }
      />
    </>
  );
}
