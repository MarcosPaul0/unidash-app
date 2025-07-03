import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@unidash/components/Card";
import { useFormContext } from "react-hook-form";
import { FormInput } from "@unidash/components/FormInput";
import { Button } from "@unidash/components/Button";
import { PaperPlaneTiltIcon } from "@phosphor-icons/react/dist/ssr";
import { StudentFormProps } from "./studentForm.interface";

export function StudentForm({ title }: StudentFormProps) {
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
            placeholder="Digite o nome do aluno"
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

        <Button className="max-w-56" size="lg">
          <PaperPlaneTiltIcon />
          Enviar
        </Button>
      </CardContent>
    </Card>
  );
}
