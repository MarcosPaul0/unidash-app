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
import { CourseCompletionWorkIndicatorFormProps } from "./courseCompletionWorkIndicatorForm.interface";
import { FormFile } from "@unidash/components/FormFile";

export function CourseCompletionWorkIndicatorForm({
  title,
}: CourseCompletionWorkIndicatorFormProps) {
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

        <CardSubtitle>Dados de TCCs</CardSubtitle>

        <div className="flex gap-8 w-full">
          <FormInput
            control={control}
            type="number"
            name="enrollmentNumber"
            placeholder="Quantidade de matrículas de TCCs"
            label="Matrículas"
          />
          <FormInput
            control={control}
            type="number"
            name="defensesNumber"
            placeholder="Quantidade de defesas de TCCs"
            label="Defesas"
          />
          <FormInput
            control={control}
            name="abandonmentsNumber"
            type="number"
            placeholder="Quantidade de abandonos de TCCs"
            label="Abandonos"
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
