import { DeleteCourseRegistrationLockDataDialog } from "../DeleteCourseRegistrationLockDataDialog";
import { CourseRegistrationLockDataActionsProps } from "./courseRegistrationLockDataActions.interface";

export function CourseRegistrationLockDataActions({
  courseRegistrationLockDataId,
}: CourseRegistrationLockDataActionsProps) {
  return (
    <>
      <DeleteCourseRegistrationLockDataDialog
        courseRegistrationLockDataId={courseRegistrationLockDataId}
      />
    </>
  );
}
