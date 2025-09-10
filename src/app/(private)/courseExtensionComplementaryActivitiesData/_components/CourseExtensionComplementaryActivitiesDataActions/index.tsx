import { DeleteCourseExtensionComplementaryActivitiesDataDialog } from "../DeleteCourseExtensionComplementaryActivitiesDataDialog";
import { CourseExtensionComplementaryActivitiesDataActionsProps } from "./courseExtensionComplementaryActivitiesDataActions.interface";

export function CourseExtensionComplementaryActivitiesDataActions({
  courseExtensionComplementaryActivitiesDataId,
}: CourseExtensionComplementaryActivitiesDataActionsProps) {
  return (
    <>
      <DeleteCourseExtensionComplementaryActivitiesDataDialog
        courseExtensionComplementaryActivitiesDataId={
          courseExtensionComplementaryActivitiesDataId
        }
      />
    </>
  );
}
