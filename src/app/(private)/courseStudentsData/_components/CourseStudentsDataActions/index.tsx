import { DeleteCourseStudentsDataDialog } from "../DeleteCourseStudentsDataDialog";
import { CourseStudentsDataActionsProps } from "./courseStudentsDataActions.interface";

export function CourseStudentsDataActions({
  courseStudentsDataId,
}: CourseStudentsDataActionsProps) {
  return (
    <>
      <DeleteCourseStudentsDataDialog
        courseStudentsDataId={courseStudentsDataId}
      />
    </>
  );
}
