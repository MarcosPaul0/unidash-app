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
import { CourseCompletionWorkIndicatorForm } from "../_components/CourseComplementaryActivitiesTeachingIndicatorForm";

export default function RegisterCourseComplementaryActivitiesTeachingIndicatorPage() {
  const formMethods = useForm();

  return (
    <>
      <Toolbar>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={
                  APP_ROUTES.private
                    .courseComplementaryActivitiesTeachingIndicator
                }
              >
                Indicadores de atividades complementares de ensino
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>
                Adicionar dados de atividades complementares de ensino
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Toolbar>

      <FormProvider {...formMethods}>
        <CourseCompletionWorkIndicatorForm title="Adicionar dados de indicadores de atividades complementares de ensino" />
      </FormProvider>
    </>
  );
}
