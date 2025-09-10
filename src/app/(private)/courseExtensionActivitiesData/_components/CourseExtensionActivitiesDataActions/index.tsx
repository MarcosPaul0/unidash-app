import { DeleteCourseExtensionActivitiesDataDialog } from "../DeleteCourseExtensionActivitiesDataDialog";
import { CourseExtensionActivitiesDataActionsProps } from "./courseExtensionActivitiesDataActions.interface";

export function CourseExtensionActivitiesDataActions({
  courseExtensionActivitiesDataId,
}: CourseExtensionActivitiesDataActionsProps) {
  return (
    <>
      <DeleteCourseExtensionActivitiesDataDialog
        courseExtensionActivitiesDataId={courseExtensionActivitiesDataId}
      />
    </>
  );
}
