"use client";

import { CourseSelect } from "../CourseSelect";
import { SidebarMenu } from "../SidebarMenu";
import { UserMenu } from "../UserMenu";

export function HeaderSession() {
  return (
    <header className="w-full flex flex-col gap-4 md:flex-row items-start md:items-center md:justify-between ">
      <SidebarMenu />

      <CourseSelect />

      <UserMenu />
    </header>
  );
}
