"use client";

import { FormProvider, useForm } from "react-hook-form";
import { FilterForm } from "../FilterForm";
import {
  Collapsible,
  CollapsibleContent,
} from "@unidash/components/Collapsible";
import { FormSelect } from "@unidash/components/FormSelect";
import { ToolbarProps } from "./toolbar.interface";

export function Toolbar({ children, link, linkLabel }: ToolbarProps) {
  const formMethods = useForm();

  const { control } = formMethods;

  return (
    <FormProvider {...formMethods}>
      <Collapsible>
        <form className="flex items-center justify-between border-b-1 border-muted">
          {children}

          <FilterForm link={link} linkLabel={linkLabel} />
        </form>

        <CollapsibleContent>
          <div>
            <FormSelect
              control={control}
              label="Filtrar por ano"
              name="year"
              options={[
                { label: "2022", value: "2022" },
                { label: "2023", value: "2023" },
                { label: "2024", value: "2024" },
                { label: "2025", value: "2025" },
              ]}
            />
          </div>
        </CollapsibleContent>
      </Collapsible>
    </FormProvider>
  );
}
