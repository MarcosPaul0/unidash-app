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
import { useCallback, useState } from "react";
import { CourseComplementaryActivitiesSearchIndicatorForm } from "../_components/CourseComplementaryActivitiesSearchIndicatorForm";
import { CourseComplementaryActivitiesTeachingIndicatorForm } from "../_components/CourseComplementaryActivitiesTeachingIndicatorForm";
import { CourseComplementaryActivitiesIndicatorFormData } from "../_components/CourseComplementaryActivitiesTeachingIndicatorForm/courseComplementaryActivitiesTeachingIndicatorForm.interface";
import { CourseComplementaryActivitiesExtensionIndicatorForm } from "../_components/CourseComplementaryActivitiesExtensionIndicatorForm";

export default function RegisterCourseComplementaryActivitiesIndicatorPage() {
  const [formStep, setFormStep] = useState(0);

  const formMethods = useForm<CourseComplementaryActivitiesIndicatorFormData>();

  const nextStep = useCallback(() => {
    setFormStep((currentStep) => {
      if (currentStep === 2) {
        return currentStep;
      }

      return currentStep + 1;
    });
  }, []);

  const previousStep = useCallback(() => {
    setFormStep((currentStep) => {
      if (currentStep === 0) {
        return currentStep;
      }

      return currentStep - 1;
    });
  }, []);

  const formSteps = [
    <CourseComplementaryActivitiesSearchIndicatorForm
      key="CourseComplementaryActivitiesSearchIndicatorForm"
      title="Adicionar dados de indicadores de atividades complementares de pesquisa"
      handleNextStep={nextStep}
    />,
    <CourseComplementaryActivitiesExtensionIndicatorForm
      key="CourseComplementaryActivitiesExtensionIndicatorForm"
      title="Adicionar dados de indicadores de atividades complementares de extensão"
      handleNextStep={nextStep}
      handlePreviousStep={previousStep}
    />,
    <CourseComplementaryActivitiesTeachingIndicatorForm
      key="CourseComplementaryActivitiesTeachingIndicatorForm"
      title="Adicionar dados de indicadores de atividades complementares de ensino"
    />,
  ];

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

      <FormProvider {...formMethods}>{formSteps[formStep]}</FormProvider>
    </>
  );
}
