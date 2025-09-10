import { Toolbar } from "@unidash/app/(private)/_components/Toolbar";
import { StudentsTable } from "../../_components/StudentsTable";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { StudentSSRService } from "@unidash/services/student/student.ssr.service";
import { GetAllStudentsParams } from "@unidash/services/student/studentParams.builder";

interface ListStudentsPageProps {
  params: Promise<{ courseId: string }>;
  searchParams: Promise<GetAllStudentsParams>;
}

export default async function ListStudentsPage({
  params,
  searchParams,
}: ListStudentsPageProps) {
  const { courseId } = await params;
  const searchParamsResult = await searchParams;

  const studentsResponse = await StudentSSRService.getStudentsByCourse(
    courseId,
    { itemsPerPage: 12, page: searchParamsResult?.page }
  );

  return (
    <>
      <Toolbar
        breadcrumbPage="Lista de alunos"
        addLink={{
          label: "Novo aluno",
          link: APP_ROUTES.private.registerStudent,
        }}
      />

      <StudentsTable students={studentsResponse.students} />
    </>
  );
}
