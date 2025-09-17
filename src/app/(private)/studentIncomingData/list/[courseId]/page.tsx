import { Toolbar } from "@unidash/app/(private)/_components/Toolbar";
import { StudentIncomingDataSSRService } from "@unidash/services/studentIncomingData/studentIncomingData.ssr.service";
import { GetAllStudentIncomingDataParams } from "@unidash/services/studentIncomingData/studentIncomingDataParams.builder";
import { StudentIncomingDataTable } from "../../_components/StudentIncomingDataTable";

interface ListIncomingDataPageProps {
  params: Promise<{ courseId: string }>;
  searchParams: Promise<GetAllStudentIncomingDataParams>;
}

export default async function ListIncomingDataPage({
  params,
  searchParams,
}: ListIncomingDataPageProps) {
  const { courseId } = await params;
  const searchParamsResult = await searchParams;

  const studentIncomingDataResponse =
    await StudentIncomingDataSSRService.getAll(
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
      <Toolbar breadcrumbPage="Indicadores de estágios do curso" />

      <StudentIncomingDataTable
        studentIncomingData={studentIncomingDataResponse.studentIncomingData}
      />
    </>
  );
}
