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
import {
  CourseInternshipIndicatorFormData,
  CourseInternshipIndicatorFormProps,
} from "./courseInternshipIndicatorForm.interface";
import { FormFile } from "@unidash/components/FormFile";
import { FormSelect } from "@unidash/components/FormSelect";

export function CourseInternshipIndicatorForm({
  title,
}: CourseInternshipIndicatorFormProps) {
  const { control, handleSubmit } =
    useFormContext<CourseInternshipIndicatorFormData>();

  async function sendCourseInternshipIndicator(
    formData: CourseInternshipIndicatorFormData
  ) {
    // TODO integrar com backend
  }

  return (
    <form onSubmit={handleSubmit(sendCourseInternshipIndicator)}>
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

          <CardSubtitle>Pessoas</CardSubtitle>

          <div className="flex gap-8 w-full">
            <FormSelect
              control={control}
              name="student"
              placeholder="Selecione o aluno estagiante"
              label="Aluno"
              options={[{ label: "Marcos Paulo Pereira", value: "idmarcos" }]}
            />
            <FormSelect
              control={control}
              name="teacher"
              placeholder="Selecione o orientado de estágio do aluno"
              label="Orientador"
              options={[{ label: "Marcos Paulo Pereira", value: "idmarcos" }]}
            />
          </div>

          <CardSubtitle>Especificações de estágios</CardSubtitle>

          <div className="flex gap-8 w-full">
            <FormInput
              control={control}
              name="operation"
              placeholder="Informe a área de atuação"
              label="Atuação"
            />
            <FormInput
              control={control}
              name="city"
              placeholder="Informe a cidade da empresa do estagio"
              label="Cidade"
            />
          </div>

          <div className="flex gap-8 w-full">
            <FormInput
              control={control}
              name="enterpriseCnpj"
              placeholder="Informe a empresa do estagiário"
              label="Empresa"
            />
            <FormSelect
              control={control}
              name="conclusionTime"
              placeholder="Informe o tempo de conclusão do estágio"
              label="Tempo de conclusão"
              options={[
                { label: "Em execução", value: "inExecution" },
                { label: "Maior (dias > 180)", value: "largest" },
                { label: "Médio (90 < dias < 180)", value: "medium" },
                { label: "Menor (dias < 90)", value: "smallest" },
              ]}
            />
          </div>

          <Button className="max-w-56" size="lg">
            <PaperPlaneTiltIcon />
            Enviar
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
