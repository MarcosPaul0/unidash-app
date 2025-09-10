"use client";

import { FormProvider, useForm } from "react-hook-form";
import { Toolbar } from "../../_components/Toolbar";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { CourseInternshipIndicatorForm } from "../_components/CourseInternshipIndicatorForm";
import { CourseInternshipIndicatorFormData } from "../_components/CourseInternshipIndicatorForm/courseInternshipIndicatorForm.interface";

export default function RegisterCourseInternshipIndicatorPage() {
  const formMethods = useForm<CourseInternshipIndicatorFormData>();

  return (
    <>
      <Toolbar
        breadcrumbPage="Novo registro de estágios"
        breadcrumbItems={[
          {
            label: "Indicadores de estágios supervisionados",
            link: APP_ROUTES.private.courseInternshipIndicator,
          },
        ]}
      />

      <FormProvider {...formMethods}>
        <CourseInternshipIndicatorForm title="Adicionar dados de indicadores de estágios supervisionados" />
      </FormProvider>
    </>
  );
}
