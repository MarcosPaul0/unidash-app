import { Toolbar } from "@unidash/app/(private)/_components/Toolbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@unidash/components/Breadcrumb";
import { TeachersTable } from "../_components/TeachersTable";
import { TeachersApiResponse } from "@unidash/interfaces/apiResponses/teacherApiResponse.interface";

const teachersMock: TeachersApiResponse["teachers"] = [
  {
    id: "teacher-1",
    name: "Maria Clara Lopes",
    status: "active",
    teacherRole: "teacher",
    createdAt: "2022-02-15T08:00:00Z",
  },
  {
    id: "teacher-2",
    name: "Roberto Almeida",
    status: "inactive",
    teacherRole: "internshipManager",
    createdAt: "2021-11-05T10:30:00Z",
  },
  {
    id: "teacher-3",
    name: "Fernanda Souza",
    status: "active",
    teacherRole: "courseCompletionWorkManager",
    createdAt: "2023-06-20T12:15:00Z",
  },
  {
    id: "teacher-4",
    name: "Lucas Pereira",
    status: "active",
    teacherRole: "complementaryActivitiesManager",
    createdAt: "2024-01-10T09:45:00Z",
  },
  {
    id: "teacher-5",
    name: "Juliana Nogueira",
    status: "inactive",
    teacherRole: "extensionActivitiesManager",
    createdAt: "2020-09-25T14:00:00Z",
  },
];

export default function ListTeacherPage() {
  return (
    <>
      <Toolbar>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Lista de docentes</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Toolbar>

      <TeachersTable teachers={teachersMock} />
    </>
  );
}
