import { Toolbar } from "../../_components/Toolbar";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { CourseExtensionComplementaryActivitiesDataForm } from "../_components/CourseExtensionComplementaryActivitiesDataForm";

export default function RegisterCourseExtensionComplementaryActivitiesPage() {
  return (
    <>
      <Toolbar
        breadcrumbPage="Novo registro de atividades complementares de extensão do curso"
        breadcrumbItems={[
          {
            label:
              "Indicadores de atividades complementares de extensão do cuso",
            link: APP_ROUTES.private.courseExtensionComplementaryActivitiesData,
          },
        ]}
      />

      <CourseExtensionComplementaryActivitiesDataForm />
    </>
  );
}
