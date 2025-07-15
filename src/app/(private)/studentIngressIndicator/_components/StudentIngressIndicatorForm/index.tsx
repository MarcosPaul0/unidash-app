import { Card, CardContent, CardSubtitle } from "@unidash/components/Card";
import { useFormContext } from "react-hook-form";
import { Button } from "@unidash/components/Button";
import { PaperPlaneTiltIcon } from "@phosphor-icons/react/dist/ssr";
import { FormRadioGroup } from "@unidash/components/FormRadioGroup";
import { FormCheckbox } from "@unidash/components/FormCheckbox";
import { StudentIngressForm } from "./studentIngressIndicatorForm.interface";

export function StudentIngressIndicatorForm() {
  const { control } = useFormContext<StudentIngressForm>();

  return (
    <Card>
      <CardContent className="flex flex-col gap-8">
        <CardSubtitle>Qual sua formação atual?</CardSubtitle>

        <FormRadioGroup
          control={control}
          name="educationLevel"
          options={[
            {
              label: "Formação técnica na área do curso",
              value: "technicalEducationInTheField",
            },
            {
              label: "Formação técnica não relacionado a área do curso",
              value: "technicalEducationOutsideTheField",
            },
            {
              label: "Formação superior na área do curso",
              value: "higherEducationInTheField",
            },
            {
              label: "Formação técnica na área do curso",
              value: "higherEducationOutsideTheField",
            },
            {
              label: "Não possui",
              value: "notHave",
            },
          ]}
        />

        <CardSubtitle>Qual seu nível de proeficiência em inglês?</CardSubtitle>

        <FormRadioGroup
          control={control}
          name="englishLevel"
          options={[
            {
              label: "Fluente",
              value: "fluent",
            },
            {
              label: "Intermediário",
              value: "intermediary",
            },
            {
              label: "Baixo",
              value: "low",
            },
          ]}
        />

        <CardSubtitle>
          Qual a expectativa de atuação profissional após a conclusão do curso?
        </CardSubtitle>

        <FormRadioGroup
          control={control}
          name="professionalExpectation"
          options={[
            {
              label: "CLT",
              value: "consolidationLaborLaws",
            },
            {
              label: "PJ",
              value: "legalEntity",
            },
            {
              label: "Área acadêmica",
              value: "academicArea",
            },
            {
              label: "Empresa pública",
              value: "publicCompany",
            },
            {
              label: "Não sabe",
              value: "doNotKnow",
            },
          ]}
        />

        <CardSubtitle>Gostaria que o curso fosse noturno?</CardSubtitle>

        <FormRadioGroup
          control={control}
          name="nightOption"
          options={[
            {
              label: "Sim",
              value: true,
            },
            {
              label: "Não",
              value: false,
            },
          ]}
        />

        <CardSubtitle>
          Sabe a diferença entre os cursos correlatos?
        </CardSubtitle>

        <FormRadioGroup
          control={control}
          name="differenceBetweenRelatedCourses"
          options={[
            {
              label: "Sim",
              value: true,
            },
            {
              label: "Não",
              value: false,
            },
          ]}
        />

        <CardSubtitle>Analisou o projeto pedagógico do curso?</CardSubtitle>

        <FormRadioGroup
          control={control}
          name="analyzedCoursePedagogicalProject"
          options={[
            {
              label: "Sim",
              value: true,
            },
            {
              label: "Não",
              value: false,
            },
          ]}
        />

        <CardSubtitle>
          Qual o nível de afinidade com as matérias abaixo?
        </CardSubtitle>

        <div className="grid grid-cols-3 gap-8 w-full">
          <FormRadioGroup
            control={control}
            name="affinityByDiscipline.math"
            direction="row"
            label="Matemática:"
            options={[
              {
                label: "Pouco",
                value: "little",
              },
              {
                label: "Médio",
                value: "medium",
              },
              {
                label: "Muita",
                value: "many",
              },
            ]}
          />

          <FormRadioGroup
            control={control}
            name="affinityByDiscipline.portuguese"
            direction="row"
            label="Português:"
            options={[
              {
                label: "Pouco",
                value: "little",
              },
              {
                label: "Médio",
                value: "medium",
              },
              {
                label: "Muita",
                value: "many",
              },
            ]}
          />

          <FormRadioGroup
            control={control}
            name="affinityByDiscipline.chemical"
            direction="row"
            label="Química:"
            options={[
              {
                label: "Pouco",
                value: "little",
              },
              {
                label: "Médio",
                value: "medium",
              },
              {
                label: "Muita",
                value: "many",
              },
            ]}
          />

          <FormRadioGroup
            control={control}
            name="affinityByDiscipline.history"
            direction="row"
            label="História:"
            options={[
              {
                label: "Pouco",
                value: "little",
              },
              {
                label: "Médio",
                value: "medium",
              },
              {
                label: "Muita",
                value: "many",
              },
            ]}
          />

          <FormRadioGroup
            control={control}
            name="affinityByDiscipline.physical"
            direction="row"
            label="Física:"
            options={[
              {
                label: "Pouco",
                value: "little",
              },
              {
                label: "Médio",
                value: "medium",
              },
              {
                label: "Muita",
                value: "many",
              },
            ]}
          />

          <FormRadioGroup
            control={control}
            name="affinityByDiscipline.geography"
            direction="row"
            label="Geografia:"
            options={[
              {
                label: "Pouco",
                value: "little",
              },
              {
                label: "Médio",
                value: "medium",
              },
              {
                label: "Muita",
                value: "many",
              },
            ]}
          />

          <FormRadioGroup
            control={control}
            name="affinityByDiscipline.biology"
            direction="row"
            label="Biologia:"
            options={[
              {
                label: "Pouco",
                value: "little",
              },
              {
                label: "Médio",
                value: "medium",
              },
              {
                label: "Muita",
                value: "many",
              },
            ]}
          />

          <FormRadioGroup
            control={control}
            name="affinityByDiscipline.english"
            direction="row"
            label="Inglês:"
            options={[
              {
                label: "Pouco",
                value: "little",
              },
              {
                label: "Médio",
                value: "medium",
              },
              {
                label: "Muita",
                value: "many",
              },
            ]}
          />

          <FormRadioGroup
            control={control}
            name="affinityByDiscipline.technology"
            direction="row"
            label="Tecnologia:"
            options={[
              {
                label: "Pouco",
                value: "little",
              },
              {
                label: "Médio",
                value: "medium",
              },
              {
                label: "Muita",
                value: "many",
              },
            ]}
          />
        </div>

        <CardSubtitle>Quais hábitos ou hobbies você tem?</CardSubtitle>

        <FormCheckbox
          control={control}
          name="habits"
          options={[
            {
              label: "Esportes coletivos",
              value: "teamSports",
            },
            {
              label: "Esportes individuais",
              value: "individualSports",
            },
            {
              label: "Jogos eletrônicos",
              value: "videoGames",
            },
            {
              label: "Leituras",
              value: "reading",
            },
            {
              label: "Redes sociais",
              value: "socialMedia",
            },
            {
              label: "Viajar",
              value: "traveling",
            },
            {
              label: "Tocar instrumento musical",
              value: "playingInstrument",
            },
          ]}
        />

        <CardSubtitle>Quais os motivos para a escolha da UNIFEI?</CardSubtitle>

        <FormCheckbox
          control={control}
          name="universityChoosingReasons"
          options={[
            {
              label: "Renome da UNIFEI",
              value: "unifeiReputation",
            },
            {
              label: "Pessoas próximas",
              value: "closePeople",
            },
            {
              label: "Ensino público",
              value: "publicEducation",
            },
            {
              label: "Motivos profissionais",
              value: "professionalReasons",
            },
            {
              label: "Motivos financeiros",
              value: "financialReasons",
            },
            {
              label: "Não foi a primeira escolha",
              value: "notFirstChoice",
            },
            {
              label: "Tocar instrumento musical",
              value: "playingInstrument",
            },
            {
              label: "Outro",
              value: "other",
            },
          ]}
        />

        <CardSubtitle>
          Porque optou pelo curso de Ciência da Computação?
        </CardSubtitle>

        <FormCheckbox
          control={control}
          name="courseChoosingReasons"
          cols="three"
          options={[
            {
              label: "Qualidade do curso",
              value: "courseQuality",
            },
            {
              label: "Motivos financeiros",
              value: "financialReasons",
            },
            {
              label: "Hobbies relacionado com o curso",
              value: "courseRelatedHobbies",
            },
            {
              label: "Mais interessante pelo SISU",
              value: "mostInterestingInSisu",
            },
            {
              label: "Atualização profissional",
              value: "professionalUpdate",
            },
            {
              label: "Não foi minha primeira opção",
              value: "notMyFirstChoice",
            },
          ]}
        />

        <CardSubtitle>Quais tecnologias você domina?</CardSubtitle>

        <FormCheckbox
          control={control}
          name="domainTechnologies"
          cols="three"
          options={[
            {
              label: "Navegação na internet",
              value: "webBrowsing",
            },
            {
              label: "Instalação de softwares",
              value: "softwareInstallation",
            },
            {
              label: "Programas e linguagens",
              value: "programsAndLanguages",
            },
            {
              label: "Planilhas",
              value: "spreadsheets",
            },
            {
              label: "Instalação de SO",
              value: "osInstallation",
            },
          ]}
        />

        <Button className="max-w-56" size="lg">
          <PaperPlaneTiltIcon />
          Enviar
        </Button>
      </CardContent>
    </Card>
  );
}
