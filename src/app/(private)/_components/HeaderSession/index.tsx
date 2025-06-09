import { CourseSelect } from "../CourseSelect";
import { UserMenu } from "../UserMenu";

export function HeaderSession() {
  return (
    <header className="w-full flex items-center justify-between">
      <CourseSelect />

      <UserMenu />
    </header>
  );
}
