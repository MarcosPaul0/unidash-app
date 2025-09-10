"use client";

import {
  FunnelIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@unidash/components/Button";
import { CollapsibleTrigger } from "@unidash/components/Collapsible";
import { FormInput } from "@unidash/components/FormInput";
import { useFormContext } from "react-hook-form";
import { FilterFormProps } from "./filterForm.interface";
import { LinkButton } from "@unidash/components/LinkButton";

export function FilterForm({ link, linkLabel }: FilterFormProps) {
  // TODO pegar pelo contexto para que o componente possa ser reutilizado
  const formMethods = useFormContext();

  const { control } = formMethods;

  return (
    <div className="mb-1 flex gap-2 items-center">
      <CollapsibleTrigger asChild>
        <Button type="button" variant="ghost">
          <FunnelIcon />
          Filtro
        </Button>
      </CollapsibleTrigger>

      <FormInput
        control={control}
        name="search"
        className="rounded-xl py-3"
        placeholder="Busque pelo título"
        icon={<MagnifyingGlassIcon size={24} />}
      />

      <button hidden type="submit" />
    </div>
  );
}
