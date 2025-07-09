import {
  Card,
  CardContent,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from "@unidash/components/Card";
import { useFormContext } from "react-hook-form";
import { FormInput } from "@unidash/components/FormInput";
import { Button } from "@unidash/components/Button";
import { PaperPlaneTiltIcon } from "@phosphor-icons/react/dist/ssr";
import { CourseComplementaryActivitiesExtensionIndicatorFormProps } from "./courseComplementaryActivitiesExtensionIndicatorForm.interface";
import { FormFile } from "@unidash/components/FormFile";

export function CourseComplementaryActivitiesExtensionIndicatorForm({
  title,
}: CourseComplementaryActivitiesExtensionIndicatorFormProps) {
  const { control } = useFormContext();

  return (
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
            name="studentDDRepresentation"
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

        <Button className="max-w-56" size="lg">
          <PaperPlaneTiltIcon />
          Enviar
        </Button>
      </CardContent>
    </Card>
  );
}
