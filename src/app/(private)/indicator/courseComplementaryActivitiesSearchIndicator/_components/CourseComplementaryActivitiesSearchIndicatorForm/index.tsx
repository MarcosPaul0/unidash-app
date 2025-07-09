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
import { CourseComplementaryActivitiesSearchIndicatorFormProps } from "./courseComplementaryActivitiesSearchIndicatorForm.interface";
import { FormFile } from "@unidash/components/FormFile";

export function CourseComplementaryActivitiesSearchIndicatorForm({
  title,
}: CourseComplementaryActivitiesSearchIndicatorFormProps) {
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

        <CardSubtitle>Atividades complementares de pesquisa</CardSubtitle>

        <div className="flex gap-8 w-full">
          <FormInput
            control={control}
            type="number"
            name="scientificInitiation"
            placeholder="Quantidade de iniciações científica"
            label="Iniciação Científica"
          />
          <FormInput
            control={control}
            type="number"
            name="developmentInitiation"
            placeholder="Quantidade de iniciações em desenvolvimento ecológico"
            label="Iniciação em Desenvolvimento Ecológico"
          />
          <FormInput
            control={control}
            name="publishedArticles"
            type="number"
            placeholder="Quantidade de artigos publicados em periódicos de computação"
            label="Artigos publicados em periódicos de computação"
          />
        </div>

        <div className="flex gap-8 w-full">
          <FormInput
            control={control}
            type="number"
            name="fullPublishedArticles"
            placeholder="Quantidade de artigos completos publicados em anais de congressos de computação"
            label="Artigos completos publicados em anais de congressos de computação"
          />
          <FormInput
            control={control}
            type="number"
            name="publishedAbstracts"
            placeholder="Quantidade de resumos publicados em anais de congressos de computação"
            label="Resumos publicados em anais de congressos de computação"
          />
        </div>

        <div className="flex gap-8 w-full">
          <FormInput
            control={control}
            type="number"
            name="presentationOfWork"
            placeholder="Quantidade de apresentações de trabalhos"
            label="Apresentação de Trabalhos"
          />
          <FormInput
            control={control}
            type="number"
            name="participationInEvents"
            placeholder="Quantidade de Participações em eventos computação"
            label="Participação em Eventos Computação"
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
