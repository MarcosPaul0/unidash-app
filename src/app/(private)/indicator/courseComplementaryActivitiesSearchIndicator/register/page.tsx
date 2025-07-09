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
import { CourseComplementaryActivitiesSearchIndicatorForm } from "../_components/CourseComplementaryActivitiesSearchIndicatorForm";

export default function RegisterCourseComplementaryActivitiesSearchIndicatorPage() {
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
                    .courseComplementaryActivitiesSearchIndicator
                }
              >
                Indicadores de atividades complementares de pesquisa
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>
                Adicionar dados de atividades complementares de pesquisa
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Toolbar>

      <FormProvider {...formMethods}>
        <CourseComplementaryActivitiesSearchIndicatorForm title="Adicionar dados de indicadores de atividades complementares de pesquisa" />
      </FormProvider>
    </>
  );
}
