import { Toolbar } from "@unidash/app/(private)/_components/Toolbar";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { CourseDepartureDataSSRService } from "@unidash/services/courseDepartureData/courseDepartureData.ssr.service";
import { GetAllCourseDepartureDataParams } from "@unidash/services/courseDepartureData/courseDepartureDataParams.builder";
import { CourseDepartureDataTable } from "../../_components/CourseDepartureDataTable";

interface ListCourseDepartureDataPageProps {
  params: Promise<{ courseId: string }>;
  searchParams: Promise<GetAllCourseDepartureDataParams>;
}

export default async function ListCourseDepartureDataPage({
  params,
  searchParams,
}: ListCourseDepartureDataPageProps) {
  const { courseId } = await params;
  const searchParamsResult = await searchParams;

  const courseDepartureDataResponse =
    await CourseDepartureDataSSRService.getAll(
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
        breadcrumbPage="Indicadores de saídas do curso"
        addLink={{
          link: APP_ROUTES.private.registerCourseDepartureData,
          label: "Novo registro de saídas",
        }}
      />

      <CourseDepartureDataTable
        courseDepartureData={courseDepartureDataResponse.courseDepartureData}
      />
    </>
  );
}
