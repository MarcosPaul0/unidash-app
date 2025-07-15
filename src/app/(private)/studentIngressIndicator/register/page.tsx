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
import { StudentIngressIndicatorForm } from "../_components/StudentIngressIndicatorForm";
import { StudentIngressForm } from "../_components/StudentIngressIndicatorForm/studentIngressIndicatorForm.interface";

export default function RegisterCourseInternshipIndicatorPage() {
  const formMethods = useForm<StudentIngressForm>({
    defaultValues: {
      habits: [],
      universityChoosingReasons: [],
      courseChoosingReasons: [],
      domainTechnologies: [],
    },
  });

  return (
    <>
      <Toolbar>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={APP_ROUTES.private.courseInternshipIndicator}
              >
                Indicadores de ingressos
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>Novo registro de ingressos</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Toolbar>

      <FormProvider {...formMethods}>
        <StudentIngressIndicatorForm />
      </FormProvider>
    </>
  );
}
