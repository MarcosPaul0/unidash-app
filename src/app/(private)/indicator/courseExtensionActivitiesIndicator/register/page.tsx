"use client";

import { FormProvider, useForm } from "react-hook-form";
import { Toolbar } from "../../../_components/Toolbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@unidash/components/Breadcrumb";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { CourseExtensionActivitiesIndicatorForm } from "../_components/CourseExtensionActivitiesIndicatorForm";

export default function RegisterCourseExtensionActivitiesIndicatorPage() {
  const formMethods = useForm();

  return (
    <>
      <Toolbar>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={APP_ROUTES.private.courseInternshipIndicator}
              >
                Indicadores de atividades de extensão
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>
                Adicionar dados de atividades de extensão
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Toolbar>

      <FormProvider {...formMethods}>
        <CourseExtensionActivitiesIndicatorForm title="Adicionar dados de indicadores de atividades de extensão" />
      </FormProvider>
    </>
  );
}
