import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@unidash/components/Card";
import { useFormContext } from "react-hook-form";
import { TeacherFormProps } from "./teacherForm.interface";
import { FormInput } from "@unidash/components/FormInput";
import { FormSelect } from "@unidash/components/FormSelect";
import {
  TEACHER_ROLE,
  TEACHER_STATUS,
} from "@unidash/interfaces/apiResponses/teacherApiResponse.interface";
import { Button } from "@unidash/components/Button";
import { PaperPlaneTiltIcon } from "@phosphor-icons/react/dist/ssr";

export function TeacherForm({ title }: TeacherFormProps) {
  const { control } = useFormContext();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-8">
        <div className="flex gap-8 w-full">
          <FormInput
            control={control}
            name="name"
            placeholder="Digite o nome do docente"
            label="Nome"
          />
          <FormInput
            control={control}
            name="email"
            type="email"
            placeholder="Digite o email do docente"
            label="E-mail"
          />
        </div>

        <div className="flex gap-8 w-full">
          <FormInput
            control={control}
            name="password"
            type="password"
            placeholder="Defina uma senha para o docente"
            label="Senha"
          />
          <FormInput
            control={control}
            name="confirmPassword"
            type="password"
            placeholder="Confirme a senha para o docente"
            label="Confirmar senhha"
          />
        </div>

        <div className="flex gap-8 w-full">
          <FormSelect
            control={control}
            name="status"
            placeholder="Selecione um status para o docente"
            label="Status do docente"
            defaultValue={TEACHER_STATUS.active}
            options={[
              { label: "Ativo", value: TEACHER_STATUS.active },
              { label: "Inativo", value: TEACHER_STATUS.inactive },
            ]}
          />
          <FormSelect
            control={control}
            name="teacherRole"
            placeholder="Selecione o papel do docente"
            label="Papel do docente"
            defaultValue={TEACHER_ROLE.teacher}
            options={[
              { label: "Docente", value: TEACHER_ROLE.teacher },
              {
                label: "Coordenador de TCC",
                value: TEACHER_ROLE.courseCompletionWorkManager,
              },
              {
                label: "Coordenador de atividades de extensão",
                value: TEACHER_ROLE.extensionActivitiesManager,
              },
              {
                label: "Coordenador de atividade complementares",
                value: TEACHER_ROLE.complementaryActivitiesManager,
              },
              {
                label: "Coordenador de estágios supervisionados",
                value: TEACHER_ROLE.internshipManager,
              },
            ]}
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
