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
import { CourseCoordinationIndicatorForm } from "../_components/CourseCoordinationIndicatorForm";

export default function RegisterCourseCoordinationIndicatorPage() {
  const formMethods = useForm();

  return (
    <>
      <Toolbar>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={APP_ROUTES.private.courseCoordinationIndicator}
              >
                Indicadores de coordenação do curso
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>
                Novo registro de coordenação do curso
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Toolbar>

      <FormProvider {...formMethods}>
        <CourseCoordinationIndicatorForm title="Adicionar dados para indicadores da coordenação do curso" />
      </FormProvider>
    </>
  );
}
