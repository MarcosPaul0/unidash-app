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
import { CourseIndicatorForm } from "../_components/CourseIndicatorForm";

export default function RegisterCourseIndicatorPage() {
  const formMethods = useForm();

  return (
    <>
      <Toolbar>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={APP_ROUTES.private.courseIndicator}>
                Indicadores do curso
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>Adicionar dados do curso</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Toolbar>

      <FormProvider {...formMethods}>
        <CourseIndicatorForm title="Adicionar dados para indicadores de curso" />
      </FormProvider>
    </>
  );
}
