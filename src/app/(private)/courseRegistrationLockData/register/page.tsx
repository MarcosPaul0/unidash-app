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
import { CourseRegistrationLockDataForm } from "../_components/CourseRegistrationLockDataForm";

export default function RegisterCourseRegistrationLockPage() {
  return (
    <>
      <Toolbar>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={APP_ROUTES.private.courseRegistrationLockData}
              >
                Indicadores de trancamentos do cuso
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>
                Novo registro de trancamentos do curso
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Toolbar>

      <CourseRegistrationLockDataForm />
    </>
  );
}
