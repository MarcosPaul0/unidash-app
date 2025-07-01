"use client";

import { SignInIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@unidash/components/Button";
import { Form } from "@unidash/components/Form";
import { FormInput } from "@unidash/components/FormInput";
import { LinkButton } from "@unidash/components/LinkButton";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { useForm } from "react-hook-form";

export function LoginForm() {
  const formMethods = useForm();

  const { control } = formMethods;

  return (
    <Form {...formMethods}>
      <form className="flex flex-col gap-8">
        <FormInput
          label="E-mail"
          type="email"
          control={control}
          name="email"
          placeholder="unifei@unifei.edu.br"
        />

        <FormInput
          label="Senha"
          type="password"
          control={control}
          name="password"
        />

        <span className="flex items-center gap-2">
          Esqueceu sua senha?
          <LinkButton href={APP_ROUTES.public.forgotPassword}>
            Recuperar
          </LinkButton>
        </span>

        <Button size="lg">
          <SignInIcon weight="bold" /> Entrar
        </Button>
      </form>
    </Form>
  );
}
