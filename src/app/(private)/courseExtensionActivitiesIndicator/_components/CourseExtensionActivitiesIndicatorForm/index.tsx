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
  CourseExtensionActivitiesIndicatorFormData,
  CourseExtensionActivitiesIndicatorFormProps,
} from "./courseExtensionActivitiesIndicatorForm.interface";
import { FormFile } from "@unidash/components/FormFile";

export function CourseExtensionActivitiesIndicatorForm({
  title,
}: CourseExtensionActivitiesIndicatorFormProps) {
  const { control, handleSubmit } =
    useFormContext<CourseExtensionActivitiesIndicatorFormData>();

  async function sendCourseExtensionActivitiesIndicator(
    formData: CourseExtensionActivitiesIndicatorFormData
  ) {
    // TODO integrar com backend
  }

  return (
    <form onSubmit={handleSubmit(sendCourseExtensionActivitiesIndicator)}>
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

          <CardSubtitle>Atividades de extensão</CardSubtitle>

          <div className="flex gap-8 w-full">
            <FormInput
              control={control}
              name="specialProjects"
              placeholder="Quantidade de projetos especiais"
              label="Projetos especiais"
            />
            <FormInput
              control={control}
              name="participationInCompetitions"
              placeholder="Quantidade de participação em competições"
              label="Participação em competições"
            />
            <FormInput
              control={control}
              name="entrepreneurshipAndInnovation"
              placeholder="Quantidade de empreendedorismo e inovação"
              label="Empreendedorismo e inovação"
            />
          </div>

          <div className="flex gap-8 w-full">
            <FormInput
              control={control}
              name="eventOrganization"
              placeholder="Quantidade de organizações de eventos"
              label="Organização de eventos"
            />
            <FormInput
              control={control}
              name="cultureAndExtensionProjects"
              placeholder="Quantidade de projetos de cultura e extensão"
              label="Projetos de cultura e extensão"
            />
            <FormInput
              control={control}
              name="semiannualProjects"
              placeholder="Quantidade de projeto semestral UNIFEI"
              label="Projeto semestral UNIFEI"
            />
          </div>

          <div className="flex gap-8 w-full">
            <FormInput
              control={control}
              name="externalInternship"
              placeholder="Quantidade de estágios externos UNIFEI"
              label="Estágio externo UNIFEI"
            />
            <FormInput
              control={control}
              name="workNonGovernmentalOrganization"
              placeholder="Quantidade de atuação em organização não governamental"
              label="Atuação em organização não governamental"
            />
            <FormInput
              control={control}
              name="juniorCompanies"
              placeholder="Quantidade de empresas juniores"
              label="Empresas juniores"
            />
            <FormInput
              control={control}
              name="provisionOfServicesWithSelfEmployedWorkers"
              placeholder="Quantidade de prestações de serviços como autônomo"
              label="Prestação de serviço como autônomo"
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
