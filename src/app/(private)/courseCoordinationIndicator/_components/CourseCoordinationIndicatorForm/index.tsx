import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from "@unidash/components/Card";
import { useFormContext } from "react-hook-form";
import { FormInput } from "@unidash/components/FormInput";
import { Button } from "@unidash/components/Button";
import { PaperPlaneTiltIcon } from "@phosphor-icons/react/dist/ssr";
import {
  CourseCoordinationIndicatorFormData,
  CourseCoordinationIndicatorFormProps,
} from "./courseCoordinationIndicatorForm.interface";
import { FormFile } from "@unidash/components/FormFile";

export function CourseCoordinationIndicatorForm({
  title,
}: CourseCoordinationIndicatorFormProps) {
  const { control, handleSubmit } =
    useFormContext<CourseCoordinationIndicatorFormData>();

  async function sendCourseCoordinationIndicator(
    formData: CourseCoordinationIndicatorFormData
  ) {
    // TODO integrar com backend
  }

  return (
    <form onSubmit={handleSubmit(sendCourseCoordinationIndicator)}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-8">
          <FormFile
            label="Arraste e solte a planilha de indicadores"
            control={control}
            name="spreadsheet"
          />

          <CardSubtitle>Período de referência</CardSubtitle>

          <div className="flex gap-8 w-full">
            <FormInput
              control={control}
              name="year"
              placeholder="Informe o ano de referência"
              label="Ano de referência"
            />
            <FormInput
              control={control}
              name="semester"
              placeholder="Informe o semestre de referência"
              label="Semestre"
            />
          </div>

          <CardSubtitle>Atendimentos realizados</CardSubtitle>

          <div className="flex gap-8 w-full">
            <FormInput
              control={control}
              name="servicesRequestsBySystem"
              placeholder="Número de atendimentos por SIGAA"
              label="Atendimentos por SIGAA"
            />
            <FormInput
              control={control}
              name="servicesRequestsByEmail"
              placeholder="Número de atendimentos por email"
              label="Atendimentos por email"
            />
          </div>

          <CardSubtitle>Ações deliberativas</CardSubtitle>

          <div className="flex gap-8 w-full">
            <FormInput
              control={control}
              name="resolutionActions"
              placeholder="Número de resoluções"
              label="Resoluções"
            />
            <FormInput
              control={control}
              name="administrativeDecisionActions"
              placeholder="Número de decisões administrativas"
              label="Decisões administrativas"
            />
          </div>

          <CardSubtitle>Reuniões realizadas</CardSubtitle>

          <div className="flex gap-8 w-full">
            <FormInput
              control={control}
              name="meetingsByBoardOfDirectors"
              type="number"
              placeholder="Número de reuniões por conselho diretor"
              label="Reuniões por conselho diretor"
            />
            <FormInput
              control={control}
              name="meetingsByUndergraduateChamber"
              type="number"
              placeholder="Número de reuniões por câmara de graduação"
              label="Reuniões por câmara de graduação"
            />
            <FormInput
              control={control}
              name="meetingsByCourseCouncil"
              type="number"
              placeholder="Número de reuniões por colegiado de curso"
              label="Reuniões por colegiado de curso"
            />
          </div>
        </CardContent>

        <CardFooter>
          <Button className="max-w-56" size="lg" type="submit">
            <PaperPlaneTiltIcon />
            Enviar
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
