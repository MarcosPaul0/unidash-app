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
import { CourseIndicatorFormProps } from "./courseIndicatorForm.interface";
import { FormFile } from "@unidash/components/FormFile";

export function CourseIndicatorForm({ title }: CourseIndicatorFormProps) {
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

        <CardSubtitle>Período de referência e alunos ativos</CardSubtitle>

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
          <FormInput
            control={control}
            name="numberOfIncomingStudents"
            type="number"
            placeholder="Informe o número de alunos ingressantes"
            label="Número de ingressantes"
          />
          <FormInput
            control={control}
            name="numberOfActiveStudents"
            type="number"
            placeholder="Informe o número de alunos ativos"
            label="Número de alunos ativos"
          />
        </div>

        <CardSubtitle>Saída de alunos</CardSubtitle>

        <div className="flex gap-8 w-full">
          <FormInput
            control={control}
            name="completedDepartureOfStudents"
            type="number"
            placeholder="Número de alunos que concluíram o curso"
            label="Concluído"
          />
          <FormInput
            control={control}
            name="dropOutDepartureOfStudents"
            type="number"
            placeholder="Número de alunos que saíram por abandono"
            label="Abandono"
          />
          <FormInput
            control={control}
            name="transferDepartureOfStudents"
            type="number"
            placeholder="Número de alunos que foram transferidos"
            label="Transferência"
          />
          <FormInput
            control={control}
            name="droppingOutDepartureOfStudents"
            type="number"
            placeholder="Número de alunos que saíram por desistência"
            label="Desistência"
          />
        </div>

        <div className="flex gap-8 w-full">
          <FormInput
            control={control}
            name="maximumTermDepartureOfStudents"
            type="number"
            placeholder="Número de alunos que atingiram o prazo máximo"
            label="Prazo máximo"
          />
          <FormInput
            control={control}
            name="dropOutDepartureOfStudents"
            type="number"
            placeholder="Número de alunos que foram excluídos"
            label="Excluídos"
          />
          <FormInput
            control={control}
            name="newExamDepartureOfStudents"
            type="number"
            placeholder="Número de alunos que fizeram novo vestibular"
            label="Novo vestibular"
          />
        </div>

        <CardSubtitle>Trancamento de alunos</CardSubtitle>

        <div className="flex gap-8 w-full">
          <FormInput
            control={control}
            name="difficultyInDisciplineRegistrationLock"
            type="number"
            placeholder="Número de trancamentos por dificuldades"
            label="Dificuldades na disciplina"
          />
          <FormInput
            control={control}
            name="workloadRegistrationLock"
            type="number"
            placeholder="Número de trancamentos por carga horária"
            label="Carga horária"
          />
          <FormInput
            control={control}
            name="teacherMethodologyRegistrationLock"
            type="number"
            placeholder="Número de trancamentos por metodologia"
            label="Metodologia do professor"
          />
        </div>

        <div className="flex gap-8 w-full">
          <FormInput
            control={control}
            name="incompatibilityWithWorkRegistrationLock"
            type="number"
            placeholder="Número de trancamentos por trabalho"
            label="Incompatibilidade com trabalho"
          />
          <FormInput
            control={control}
            name="lossOfInterestRegistrationLock"
            type="number"
            placeholder="Número de trancamentos por perda de interesse"
            label="Perda de interesse"
          />
          <FormInput
            control={control}
            name="otherRegistrationLock"
            type="number"
            placeholder="Número de trancamentos por outro motivo"
            label="Outro"
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
