"use client";

import { USER_ROLE } from "@unidash/api/responses/admin.response";
import { Avatar, AvatarFallback } from "@unidash/components/Avatar";
import { Skeleton } from "@unidash/components/Skeleton";
import { useAuthStore } from "@unidash/store/auth.store";
import { Formatter } from "@unidash/utils/formatter.util";

const USER_ROLE_LABEL = {
  [USER_ROLE.admin]: "Administrador",
  [USER_ROLE.student]: "Discente",
  [USER_ROLE.teacher]: "Docente",
} as const;

export function UserMenu() {
  const { session } = useAuthStore();

  return session ? (
    <span
      className={`
        p-2 bg-menu text-menu-foreground rounded-full
        flex items-center gap-2 cursor-pointer mr-0 ml-auto
      `}
    >
      <Avatar>
        <AvatarFallback>{Formatter.getInitials(session.name)}</AvatarFallback>
      </Avatar>

      <div className="flex flex-col items-start">
        <strong className="text-sm">{session.name}</strong>
        <span className="text-xs">{USER_ROLE_LABEL[session.role]}</span>
      </div>
    </span>
  ) : (
    <Skeleton className="w-[228px] h-[52px] rounded-full  mr-0 ml-auto" />
  );
}
