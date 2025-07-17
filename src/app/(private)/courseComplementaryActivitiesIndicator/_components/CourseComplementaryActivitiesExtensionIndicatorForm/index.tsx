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
import {
  ArrowArcLeftIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import {
  CourseComplementaryActivitiesExtensionIndicatorFormData,
  CourseComplementaryActivitiesExtensionIndicatorFormProps,
} from "./courseComplementaryActivitiesExtensionIndicatorForm.interface";
import { FormFile } from "@unidash/components/FormFile";
import { FormEvent } from "react";

export function CourseComplementaryActivitiesExtensionIndicatorForm({
  title,
  handleNextStep,
  handlePreviousStep,
}: CourseComplementaryActivitiesExtensionIndicatorFormProps) {
  const { control, trigger } =
    useFormContext<CourseComplementaryActivitiesExtensionIndicatorFormData>();

  async function sendCourseComplementaryActivitiesExtensionIndicator(
    event: FormEvent
  ) {
    event.preventDefault();

    const isValid = await trigger([
      "awardsAtEvents",
      "culturalActivities",
      "participationInCollegiateBodies",
      "sportsCompetitions",
      "studentRepresentation",
    ]);

    if (isValid) {
      handleNextStep();
    }
  }

  return (
    <form onSubmit={sendCourseComplementaryActivitiesExtensionIndicator}>
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

          <CardSubtitle>Atividades complementares de extensão</CardSubtitle>

          <div className="flex gap-8 w-full">
            <FormInput
              control={control}
              type="number"
              name="culturalActivities"
              placeholder="Quantidade de atividades culturais, socialização e integração"
              label="Atividades culturais, socialização e integração"
            />
            <FormInput
              control={control}
              type="number"
              name="sportsCompetitions"
              placeholder="Quantidade de participação em competições esportivas"
              label="Participação em competições esportivas"
            />
            <FormInput
              control={control}
              name="awardsAtEvents"
              type="number"
              placeholder="Quantidade de premiação em eventos representando a UNIFEI"
              label="Premiação em eventos representando a UNIFEI"
            />
          </div>

          <div className="flex gap-8 w-full">
            <FormInput
              control={control}
              type="number"
              name="studentRepresentation"
              placeholder="Quantidade de representação estudantil"
              label="Representação estudantil"
            />
            <FormInput
              control={control}
              type="number"
              name="participationInCollegiateBodies"
              placeholder="Quantidade de participação em órgãos colegiados"
              label="Participação em órgãos colegiados"
            />
          </div>
        </CardContent>

        <CardFooter className="gap-6">
          <Button
            className="w-full max-w-80"
            size="lg"
            type="button"
            onClick={handlePreviousStep}
          >
            <ArrowArcLeftIcon />
            Anterior
          </Button>

          <Button className="w-full max-w-80" size="lg">
            Próximo
            <ArrowRightIcon />
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
