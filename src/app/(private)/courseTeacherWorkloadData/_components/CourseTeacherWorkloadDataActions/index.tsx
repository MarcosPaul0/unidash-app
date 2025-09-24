import { DeleteCourseTeacherWorkloadDataDialog } from "../DeleteCourseTeacherWorkloadDataDialog";
import { CourseTeacherWorkloadDataActionsProps } from "./courseTeacherWorkloadDataActions.interface";

export function CourseTeacherWorkloadDataActions({
  courseTeacherWorkloadDataId,
}: CourseTeacherWorkloadDataActionsProps) {
  return (
    <>
      <DeleteCourseTeacherWorkloadDataDialog
        courseTeacherWorkloadDataId={courseTeacherWorkloadDataId}
      />
    </>
  );
}
