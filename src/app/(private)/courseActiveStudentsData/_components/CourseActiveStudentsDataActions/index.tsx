import { DeleteCourseActiveStudentsDataDialog } from "../DeleteCourseActiveStudentsDataDialog";
import { CourseActiveStudentsDataActionsProps } from "./courseActiveStudentsDataActions.interface";

export function CourseActiveStudentsDataActions({
  courseActiveStudentsDataId,
}: CourseActiveStudentsDataActionsProps) {
  return (
    <>
      <DeleteCourseActiveStudentsDataDialog
        courseActiveStudentsDataId={courseActiveStudentsDataId}
      />
    </>
  );
}
