import { Toolbar } from "../../_components/Toolbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@unidash/components/Breadcrumb";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { CourseCoordinationDataForm } from "../_components/CourseCoordinationDataForm";

export default function RegisterCourseCoordinationPage() {
  return (
    <>
      <Toolbar>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={APP_ROUTES.private.courseCoordinationData}>
                Indicadores da coordenação do cuso
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>
                Novo registro da coordenação do curso
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Toolbar>

      <CourseCoordinationDataForm />
    </>
  );
}
