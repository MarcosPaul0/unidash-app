import { DeleteCourseSearchComplementaryActivitiesDataDialog } from "../DeleteCourseSearchComplementaryActivitiesDataDialog";
import { CourseSearchComplementaryActivitiesDataActionsProps } from "./courseSearchComplementaryActivitiesDataActions.interface";

export function CourseSearchComplementaryActivitiesDataActions({
  courseSearchComplementaryActivitiesDataId,
}: CourseSearchComplementaryActivitiesDataActionsProps) {
  return (
    <>
      <DeleteCourseSearchComplementaryActivitiesDataDialog
        courseSearchComplementaryActivitiesDataId={
          courseSearchComplementaryActivitiesDataId
        }
      />
    </>
  );
}
