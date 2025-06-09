import { CaretRightIcon } from "@phosphor-icons/react/dist/ssr";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@unidash/components/Avatar";

export function UserMenu() {
  return (
    <button
      type="button"
      className={`
        p-2 bg-menu text-menu-foreground rounded-full
        flex items-center gap-2 cursor-pointer 
      `}
    >
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="flex flex-col items-start">
        <strong className="text-sm">Marcos Paulo</strong>
        <span className="text-xs">Administrador</span>
      </div>

      <CaretRightIcon size={16} />
    </button>
  );
}
