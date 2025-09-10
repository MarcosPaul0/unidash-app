import { DeleteCourseCoordinationDataDialog } from "../DeleteCourseCoordinationDataDialog";
import { CourseCoordinationDataActionsProps } from "./courseCoordinationDataActions.interface";

export function CourseCoordinationDataActions({
  courseCoordinationDataId,
}: CourseCoordinationDataActionsProps) {
  return (
    <>
      <DeleteCourseCoordinationDataDialog
        courseCoordinationDataId={courseCoordinationDataId}
      />
    </>
  );
}
