"use client";

import { FormProvider, useForm } from "react-hook-form";
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
import { CourseExtensionActivitiesIndicatorForm } from "../_components/CourseExtensionActivitiesIndicatorForm";
import { CourseExtensionActivitiesIndicatorFormData } from "../_components/CourseExtensionActivitiesIndicatorForm/courseExtensionActivitiesIndicatorForm.interface";

export default function RegisterCourseExtensionActivitiesIndicatorPage() {
  const formMethods = useForm<CourseExtensionActivitiesIndicatorFormData>();

  return (
    <>
      <Toolbar>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={APP_ROUTES.private.courseExtensionActivitiesIndicator}
              >
                Indicadores de atividades de extensão
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>
                Novo registro de atividades de extensão
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
