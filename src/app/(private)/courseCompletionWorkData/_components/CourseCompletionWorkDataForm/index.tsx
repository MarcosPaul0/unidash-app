"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardInputsRow,
  CardTitle,
} from "@unidash/components/Card";
import { useForm, FormProvider } from "react-hook-form";
import { FormInput } from "@unidash/components/FormInput";
import { Button } from "@unidash/components/Button";
import { FloppyDiskIcon } from "@phosphor-icons/react/dist/ssr";
import {
  RegisterCourseCompletionWorkDataDto,
  registerCourseCompletionWorkDataDtoSchema,
} from "@unidash/api/dtos/courseCompletionWorkData.dto";
import { useCourseStore } from "@unidash/store/course.store";
import { Toast } from "@unidash/utils/toast.util";
import { CourseCompletionWorkDataCSService } from "@unidash/services/courseCompletionWorkData/courseCompletionWorkData.cs.service";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { ExceptionHandler } from "@unidash/api/errors/exception.handler";
import { HTTP_STATUS } from "@unidash/lib/baseApiClient";
import { zodResolver } from "@hookform/resolvers/zod";
import { PeriodForm } from "@unidash/app/(private)/courseStudentsData/_components/PeriodForm";

const REGISTER_COURSE_COMPLETION_WORK_DATA_SUCCESS_MESSAGE =
  "Novo registro de saídas do curso foi adicionado!";

const REGISTER_COURSE_COMPLETION_WORK_DATA_ERROR_MESSAGES = {
  [HTTP_STATUS.forbidden]:
    "Você não tem permissão para realizar essa operação!",
  [HTTP_STATUS.notFound]: "O curso informado não foi encontrado!",
  [HTTP_STATUS.badRequest]: "Ocorreu algum erro ao registrar as informações!",
  [HTTP_STATUS.conflict]:
    "Esse registro de saídas do curso já existe! Confira o período e ano do registro.",
} as const;

export function CourseCompletionWorkDataForm() {
  const { activeCourse } = useCourseStore();

  const router = useRouter();

  const formMethods = useForm<RegisterCourseCompletionWorkDataDto>({
    resolver: zodResolver(registerCourseCompletionWorkDataDtoSchema),
    defaultValues: {
      semester: "first",
      year: new Date().getFullYear(),
      abandonments: 0,
      defenses: 0,
      enrollments: 0,
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = formMethods;

  async function sendCourseCompletionWorkData(
    registerCourseCompletionWorkDataDto: RegisterCourseCompletionWorkDataDto
  ) {
    try {
      if (!activeCourse) {
        Toast.error(
          "É necessário selecionar o curso para registrar as informações!"
        );
        return;
      }

      await CourseCompletionWorkDataCSService.register(
        activeCourse.id,
        registerCourseCompletionWorkDataDto
      );

      Toast.success(REGISTER_COURSE_COMPLETION_WORK_DATA_SUCCESS_MESSAGE);

      router.push(
        `${APP_ROUTES.private.courseCompletionWorkData}${activeCourse.id}`
      );
    } catch (error) {
      ExceptionHandler.handle({
        error,
        errorMap: REGISTER_COURSE_COMPLETION_WORK_DATA_ERROR_MESSAGES,
        onError: (handledError) => {
          Toast.error(handledError.message);
        },
      });
    }
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(sendCourseCompletionWorkData)}>
        <Card>
          <CardHeader>
            <CardTitle>
              Registro de informações de saídas do curso de {activeCourse?.name}
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-8">
            <PeriodForm />

            <CardInputsRow>
              <FormInput
                control={control}
                type="number"
                name="enrollments"
                placeholder="Quantidade de matrículas"
                label="Matrículas"
                helper={errors.enrollments?.message}
              />
              <FormInput
                control={control}
                type="number"
                name="defenses"
                placeholder="Quantidade de defeses"
                label="Defesas"
                helper={errors.defenses?.message}
              />
              <FormInput
                control={control}
                type="number"
                name="abandonments"
                placeholder="Quantidade de abandonos"
                label="Abandonos"
                helper={errors.abandonments?.message}
              />
            </CardInputsRow>
          </CardContent>

          <CardFooter className="gap-6">
            <Button
              className="w-full max-w-80"
              size="lg"
              isLoading={isSubmitting}
            >
              <FloppyDiskIcon />
              Registrar dados
            </Button>
          </CardFooter>
        </Card>
      </form>
    </FormProvider>
  );
}
