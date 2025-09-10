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
  RegisterCourseCoordinationDataDto,
  registerCourseCoordinationDataDtoSchema,
} from "@unidash/api/dtos/courseCoordinationData.dto";
import { useCourseStore } from "@unidash/store/course.store";
import { Toast } from "@unidash/utils/toast.util";
import { CourseCoordinationDataCSService } from "@unidash/services/courseCoordinationData/courseCoordinationData.cs.service";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { ExceptionHandler } from "@unidash/api/errors/exception.handler";
import { HTTP_STATUS } from "@unidash/lib/baseApiClient";
import { zodResolver } from "@hookform/resolvers/zod";
import { PeriodForm } from "@unidash/app/(private)/courseStudentsData/_components/PeriodForm";

const REGISTER_COURSE_COORDINATION_DATA_SUCCESS_MESSAGE =
  "Novo registro da coordenação do curso foi adicionado!";

const REGISTER_COURSE_COORDINATION_DATA_ERROR_MESSAGES = {
  [HTTP_STATUS.forbidden]:
    "Você não tem permissão para realizar essa operação!",
  [HTTP_STATUS.notFound]: "O curso informado não foi encontrado!",
  [HTTP_STATUS.badRequest]: "Ocorreu algum erro ao registrar as informações!",
  [HTTP_STATUS.conflict]:
    "Esse registro da coordenação do curso já existe! Confira o período e ano do registro.",
} as const;

export function CourseCoordinationDataForm() {
  const { activeCourse } = useCourseStore();

  const router = useRouter();

  const formMethods = useForm<RegisterCourseCoordinationDataDto>({
    resolver: zodResolver(registerCourseCoordinationDataDtoSchema),
    defaultValues: {
      semester: "first",
      year: new Date().getFullYear(),
      administrativeDecisionActions: 0,
      meetingsByBoardOfDirectors: 0,
      meetingsByCourseCouncil: 0,
      meetingsByUndergraduateChamber: 0,
      resolutionActions: 0,
      servicesRequestsByEmail: 0,
      servicesRequestsBySystem: 0,
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  async function sendCourseCoordinationData(
    registerCourseCoordinationDataDto: RegisterCourseCoordinationDataDto
  ) {
    try {
      if (!activeCourse) {
        Toast.error(
          "É necessário selecionar o curso para registrar as informações!"
        );
        return;
      }

      await CourseCoordinationDataCSService.register(
        activeCourse.id,
        registerCourseCoordinationDataDto
      );

      Toast.success(REGISTER_COURSE_COORDINATION_DATA_SUCCESS_MESSAGE);

      router.push(
        `${APP_ROUTES.private.courseCoordinationData}${activeCourse.id}`
      );
    } catch (error) {
      ExceptionHandler.handle({
        error,
        errorMap: REGISTER_COURSE_COORDINATION_DATA_ERROR_MESSAGES,
        onError: (handledError) => {
          Toast.error(handledError.message);
        },
      });
    }
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(sendCourseCoordinationData)}>
        <Card>
          <CardHeader>
            <CardTitle>
              Registro de informações da coordenação do curso de{" "}
              {activeCourse?.name}
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-8">
            <PeriodForm />

            <CardInputsRow>
              <FormInput
                control={control}
                type="number"
                name="meetingsByBoardOfDirectors"
                placeholder="Quantidade de reuniões por conselho diretor"
                label="Reuniões por conselho diretor"
                helper={errors.meetingsByBoardOfDirectors?.message}
              />
              <FormInput
                control={control}
                type="number"
                name="meetingsByCourseCouncil"
                placeholder="Quantidade de reuniões por colegiado de curso"
                label="Reuniões por colegiado de curso"
                helper={errors.meetingsByCourseCouncil?.message}
              />
              <FormInput
                control={control}
                type="number"
                name="meetingsByUndergraduateChamber"
                placeholder="Quantidade de reuniões por câmara de graduação"
                label="Reuniões por câmara de graduação"
                helper={errors.meetingsByUndergraduateChamber?.message}
              />
            </CardInputsRow>

            <CardInputsRow>
              <FormInput
                control={control}
                type="number"
                name="administrativeDecisionActions"
                placeholder="Quantidade de decisões administrativas"
                label="Decisões administrativas"
                helper={errors.administrativeDecisionActions?.message}
              />
              <FormInput
                control={control}
                type="number"
                name="resolutionActions"
                placeholder="Quantidade de resoluções"
                label="Resoluções"
                helper={errors.resolutionActions?.message}
              />
            </CardInputsRow>

            <CardInputsRow>
              <FormInput
                control={control}
                type="number"
                name="servicesRequestsByEmail"
                placeholder="Quantidade de atendimentos por email"
                label="Atendimentos por email"
                helper={errors.servicesRequestsByEmail?.message}
              />
              <FormInput
                control={control}
                type="number"
                name="servicesRequestsBySystem"
                placeholder="Quantidade de atendimentos por SIGAA"
                label="Atendimentos por SIGAA"
                helper={errors.servicesRequestsBySystem?.message}
              />
            </CardInputsRow>
          </CardContent>

          <CardFooter className="gap-6">
            <Button className="w-full max-w-80" size="lg">
              <FloppyDiskIcon />
              Registrar dados
            </Button>
          </CardFooter>
        </Card>
      </form>
    </FormProvider>
  );
}
