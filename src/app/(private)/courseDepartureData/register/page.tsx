import { Toolbar } from "../../_components/Toolbar";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { CourseDepartureDataForm } from "../_components/CourseDepartureDataForm";

export default function RegisterCourseDeparturePage() {
  return (
    <>
      <Toolbar
        breadcrumbPage="Novo registro de saídas do curso"
        breadcrumbItems={[
          {
            label: "Indicadores de saídas do cuso",
            link: APP_ROUTES.private.courseDepartureData,
          },
        ]}
      />

      <CourseDepartureDataForm />
    </>
  );
}
