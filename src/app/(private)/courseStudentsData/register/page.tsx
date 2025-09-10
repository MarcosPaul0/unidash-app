import { Toolbar } from "../../_components/Toolbar";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { CourseStudentsDataForm } from "../_components/CourseStudentsDataForm";

export default function RegisterCourseStudentsPage() {
  return (
    <>
      <Toolbar
        breadcrumbPage="Novo registro de alunos do curso"
        breadcrumbItems={[
          {
            label: "Indicadores de alunos do cuso",
            link: APP_ROUTES.private.courseStudentsData,
          },
        ]}
      />

      <CourseStudentsDataForm />
    </>
  );
}
