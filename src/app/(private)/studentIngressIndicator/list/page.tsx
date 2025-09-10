import { Toolbar } from "@unidash/app/(private)/_components/Toolbar";
import { StudentIngressIndicatorTable } from "../_components/StudentIngressIndicatorTable";

const studentsMock: StudentsApiResponse["students"] = [
  {
    id: "student-1",
    name: "Ana Paula Ferreira",
    status: "active",
    courseId: "course-1",
    createdAt: "2023-09-01T09:00:00Z",
  },
  {
    id: "student-2",
    name: "Carlos Henrique Silva",
    status: "inactive",
    courseId: "course-2",
    createdAt: "2022-05-12T13:45:00Z",
  },
  {
    id: "student-3",
    name: "João Marcos Andrade",
    status: "active",
    courseId: "course-3",
    createdAt: "2024-02-20T15:30:00Z",
  },
];

export default function ListCourseInternshipIndicatorPage() {
  return (
    <>
      <Toolbar breadcrumbPage="Indicadores de ingressantes" />

      <StudentIngressIndicatorTable ingressIndicators={studentsMock} />
    </>
  );
}
