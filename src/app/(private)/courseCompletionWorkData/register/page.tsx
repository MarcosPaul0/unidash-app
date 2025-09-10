import { Toolbar } from "../../_components/Toolbar";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { CourseCompletionWorkDataForm } from "../_components/CourseCompletionWorkDataForm";

export default function RegisterCourseCompletionWorkDataPage() {
  return (
    <>
      <Toolbar
        breadcrumbPage="Novo registro de TCC"
        breadcrumbItems={[
          {
            label: "Indicadores de TCC",
            link: APP_ROUTES.private.courseCompletionWorkData,
          },
        ]}
      />

      <CourseCompletionWorkDataForm />
    </>
  );
}
