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
import { CourseInternshipIndicatorForm } from "../_components/CourseInternshipIndicatorForm";
import { CourseInternshipIndicatorFormData } from "../_components/CourseInternshipIndicatorForm/courseInternshipIndicatorForm.interface";

export default function RegisterCourseInternshipIndicatorPage() {
  const formMethods = useForm<CourseInternshipIndicatorFormData>();

  return (
    <>
      <Toolbar>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={APP_ROUTES.private.courseInternshipIndicator}
              >
                Indicadores de estágios supervisionados
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>Novo registro de estágios</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Toolbar>

      <FormProvider {...formMethods}>
        <CourseInternshipIndicatorForm title="Adicionar dados de indicadores de estágios supervisionados" />
      </FormProvider>
    </>
  );
}
