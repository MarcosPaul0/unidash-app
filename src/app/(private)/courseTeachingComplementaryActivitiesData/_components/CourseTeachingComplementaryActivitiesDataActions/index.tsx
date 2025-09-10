import { DeleteCourseTeachingComplementaryActivitiesDataDialog } from "../DeleteCourseTeachingComplementaryActivitiesDataDialog";
import { CourseTeachingComplementaryActivitiesDataActionsProps } from "./courseTeachingComplementaryActivitiesDataActions.interface";

export function CourseTeachingComplementaryActivitiesDataActions({
  courseTeachingComplementaryActivitiesDataId,
}: CourseTeachingComplementaryActivitiesDataActionsProps) {
  return (
    <>
      <DeleteCourseTeachingComplementaryActivitiesDataDialog
        courseTeachingComplementaryActivitiesDataId={
          courseTeachingComplementaryActivitiesDataId
        }
      />
    </>
  );
}
