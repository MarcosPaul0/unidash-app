import { SignOutIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@unidash/components/Button";

export function SidebarSignOutButton() {
  return (
    <Button
      className={`
        p-4 h-auto rounded-2xl justify-start text-destructive
        bg-accent hover:bg-accent hover:brightness-105
      `}
    >
      <SignOutIcon size={24} />
      Sair
    </Button>
  );
}
