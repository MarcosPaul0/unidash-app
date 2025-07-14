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
import { CourseComplementaryActivitiesTeachingIndicatorFormProps } from "./courseComplementaryActivitiesTeachingIndicatorForm.interface";
import { FormFile } from "@unidash/components/FormFile";

export function CourseCompletionWorkIndicatorForm({
  title,
}: CourseComplementaryActivitiesTeachingIndicatorFormProps) {
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

        <CardSubtitle>Atividades complementares de ensino</CardSubtitle>

        <div className="flex gap-8 w-full">
          <FormInput
            control={control}
            type="number"
            name="electivesDisciplines"
            placeholder="Quantidade de disciplinas Eletivas"
            label="Disciplinas Eletivas"
          />
          <FormInput
            control={control}
            type="number"
            name="preparationForTest"
            placeholder="Quantidade de preparação para o ENADE"
            label="Preparação para o ENADE"
          />
          <FormInput
            control={control}
            name="subjectMonitoring"
            type="number"
            placeholder="Quantidade de monitoria de Disciplinas"
            label="Monitoria de Disciplinas"
          />
        </div>

        <div className="flex gap-8 w-full">
          <FormInput
            control={control}
            type="number"
            name="sponsorshipOfNewStudents"
            placeholder="Quantidade de apadrinhamento de Ingressantes"
            label="Apadrinhamento de Ingressantes"
          />
          <FormInput
            control={control}
            type="number"
            name="providingTraining"
            placeholder="Quantidade de ministração de Treinamentos"
            label="Ministração de Treinamentos"
          />
          <FormInput
            control={control}
            type="number"
            name="coursesInTheArea"
            placeholder="Quantidade de cursos relacionados à área de computação"
            label="Cursos relacionados à área de computação"
          />
        </div>

        <div className="flex gap-8 w-full">
          <FormInput
            control={control}
            type="number"
            name="complementary_coursesInTheArea"
            placeholder="Quantidade de cursos complementares à área de computação"
            label="Cursos complementares à área de computação"
          />
          <FormInput
            control={control}
            type="number"
            name="coursesOutOfTheArea"
            placeholder="Quantidade de cursos não relacionados à área de computação"
            label="Cursos não relacionados à área de computação"
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
