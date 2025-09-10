"use client";

import { FormProvider, useForm } from "react-hook-form";
import { Toolbar } from "../../_components/Toolbar";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { StudentIngressIndicatorForm } from "../_components/StudentIngressIndicatorForm";
import { StudentIngressIndicatorFormData } from "../_components/StudentIngressIndicatorForm/studentIngressIndicatorForm.interface";

export default function RegisterCourseInternshipIndicatorPage() {
  const formMethods = useForm<StudentIngressIndicatorFormData>({
    defaultValues: {
      habits: [],
      universityChoosingReasons: [],
      courseChoosingReasons: [],
      domainTechnologies: [],
    },
  });

  return (
    <>
      <Toolbar
        breadcrumbPage="Novo registro de ingressos"
        breadcrumbItems={[
          {
            label: "Indicadores de ingressos",
            link: APP_ROUTES.private.courseInternshipIndicator,
          },
        ]}
      />

      <FormProvider {...formMethods}>
        <StudentIngressIndicatorForm />
      </FormProvider>
    </>
  );
}
