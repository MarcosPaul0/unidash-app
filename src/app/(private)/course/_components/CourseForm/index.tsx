import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@unidash/components/Card";
import { useFormContext } from "react-hook-form";
import { CourseFormData, CourseFormProps } from "./courseForm.interface";
import { FormInput } from "@unidash/components/FormInput";
import { FormSelect } from "@unidash/components/FormSelect";
import { TEACHER_STATUS } from "@unidash/interfaces/apiResponses/teacherApiResponse.interface";
import { Button } from "@unidash/components/Button";
import { PaperPlaneTiltIcon } from "@phosphor-icons/react/dist/ssr";
import { COURSE_STATUS } from "@unidash/interfaces/apiResponses/courseApiResponse.interface";

export function CourseForm({ title }: CourseFormProps) {
  const { control, handleSubmit } = useFormContext<CourseFormData>();

  async function sendCourse(formData: CourseFormData) {
    // TODO integrar com backend
  }

  return (
    <form onSubmit={handleSubmit(sendCourse)}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-8">
          <div className="flex gap-8 w-full">
            <FormInput
              control={control}
              name="name"
              placeholder="Digite o nome do curso"
              label="Nome do curso"
            />
            <FormSelect
              control={control}
              name="status"
              placeholder="Selecione um status para o curso"
              label="Status do docente"
              defaultValue={TEACHER_STATUS.active}
              options={[
                { label: "Ativo", value: COURSE_STATUS.active },
                { label: "Inativo", value: COURSE_STATUS.inactive },
              ]}
            />
          </div>
        </CardContent>

        <CardFooter>
          <Button className="max-w-80 w-full" size="lg" type="submit">
            <PaperPlaneTiltIcon />
            Enviar
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
