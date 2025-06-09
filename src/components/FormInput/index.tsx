"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@unidash/components/Form";
import { Input } from "@unidash/components/Input";
import { FormInputProps } from "./formInputProps.interface";

export function FormInput({
  label,
  helper,
  name,
  control,
  ...rest
}: FormInputProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel>
              {label}

              {rest.required && <span className="text-primary">*</span>}
            </FormLabel>
          )}

          <FormControl>
            <Input {...rest} {...field} />
          </FormControl>

          {helper && <FormMessage>{helper}</FormMessage>}
        </FormItem>
      )}
    />
  );
}
