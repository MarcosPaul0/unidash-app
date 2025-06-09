"use client";

import {
  FunnelIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@unidash/components/Button";
import { FormInput } from "@unidash/components/FormInput";
import { useForm, FormProvider } from "react-hook-form";

export function FilterForm() {
  // TODO pegar pelo contexto para que o componente possa ser reutilizado
  const formMethods = useForm();

  const { control } = formMethods;

  return (
    <FormProvider {...formMethods}>
      <form className="mb-1 flex gap-2 items-center">
        <Button>
          <FunnelIcon size={24} />
          Filtro
        </Button>

        <FormInput
          control={control}
          name="search"
          className="rounded-xl py-3"
          placeholder="Busque pelo título"
          icon={<MagnifyingGlassIcon size={24} />}
        />

        <button hidden type="submit" />
      </form>
    </FormProvider>
  );
}
