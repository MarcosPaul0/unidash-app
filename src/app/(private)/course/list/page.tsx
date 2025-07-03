import { Toolbar } from "@unidash/app/(private)/_components/Toolbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@unidash/components/Breadcrumb";
import { CoursesTable } from "../_components/CoursesTable";
import { CoursesApiResponse } from "@unidash/interfaces/apiResponses/courseApiResponse.interface";
import { APP_ROUTES } from "@unidash/routes/app.routes";

const coursesMock: CoursesApiResponse["courses"] = [
  {
    id: "course-1",
    name: "Engenharia de Software",
    status: "active", // supondo que CourseType seja algo como 'ACTIVE' | 'INACTIVE' | etc.
    createdAt: "2023-08-15T10:00:00Z",
  },
  {
    id: "course-2",
    name: "Ciência da Computação",
    status: "inactive",
    createdAt: "2022-03-10T14:30:00Z",
  },
  {
    id: "course-3",
    name: "Sistemas de Informação",
    status: "inactive",
    createdAt: "2024-01-05T08:15:00Z",
  },
];

export default function ListCoursePage() {
  return (
    <>
      <Toolbar link={APP_ROUTES.private.registerCourse} linkLabel="Novo curso">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Lista de cursos</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Toolbar>

      <CoursesTable courses={coursesMock} />
    </>
  );
}
