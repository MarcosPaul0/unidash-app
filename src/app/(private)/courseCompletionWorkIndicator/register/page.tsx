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
import { CourseCompletionWorkIndicatorForm } from "../_components/CourseCompletionWorkIndicatorForm";
import { CourseCompletionWorkIndicatorFormData } from "../_components/CourseCompletionWorkIndicatorForm/courseCompletionWorkIndicatorForm.interface";

export default function RegisterCourseCompletionWorkIndicatorPage() {
  const formMethods = useForm<CourseCompletionWorkIndicatorFormData>();

  return (
    <>
      <Toolbar>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={APP_ROUTES.private.courseCompletionWorkIndicator}
              >
                Indicadores de TCCs
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>Adicionar registro de TCCs</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Toolbar>

      <FormProvider {...formMethods}>
        <CourseCompletionWorkIndicatorForm title="Adicionar dados de indicadores de trabalho de conclusão de curso" />
      </FormProvider>
    </>
  );
}
