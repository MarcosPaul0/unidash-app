import { SEMESTER } from "@unidash/api/dtos/courseStudentsData.dto";
import { CardInputsRow } from "@unidash/components/Card";
import { FormInput } from "@unidash/components/FormInput";
import { FormSelect } from "@unidash/components/FormSelect";
import { useFormContext } from "react-hook-form";

export function PeriodForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <CardInputsRow>
      <FormInput
        control={control}
        type="number"
        name="year"
        placeholder="Ano de referência"
        label="Ano"
        helper={errors.year?.message as string | undefined}
      />

      <FormSelect
        control={control}
        name="semester"
        placeholder="Seleciona o semestre"
        label="Semestre"
        options={[
          { label: "Primeiro semestre", value: SEMESTER.first },
          { label: "Segundo semestre", value: SEMESTER.second },
        ]}
        helper={errors.semester?.message as string | undefined}
      />
    </CardInputsRow>
  );
}
