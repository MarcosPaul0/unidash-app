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
import { CourseComplementaryActivitiesExtensionIndicatorForm } from "../_components/CourseComplementaryActivitiesExtensionIndicatorForm";

export default function RegisterCourseComplementaryActivitiesExtensionIndicatorPage() {
  const formMethods = useForm();

  return (
    <>
      <Toolbar>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={APP_ROUTES.private.courseComplementaryActivities}
              >
                Indicadores de atividades complementares
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>
                Novo registro de atividades complementares
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Toolbar>

      <FormProvider {...formMethods}>
        <CourseComplementaryActivitiesExtensionIndicatorForm title="Adicionar dados de indicadores de atividades complementares de extensão" />
      </FormProvider>
    </>
  );
}
