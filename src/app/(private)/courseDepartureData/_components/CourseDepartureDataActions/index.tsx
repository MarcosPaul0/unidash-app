import { DeleteCourseDepartureDataDialog } from "../DeleteCourseDepartureDataDialog";
import { CourseDepartureDataActionsProps } from "./courseDepartureDataActions.interface";

export function CourseDepartureDataActions({
  courseDepartureDataId,
}: CourseDepartureDataActionsProps) {
  return (
    <>
      <DeleteCourseDepartureDataDialog
        courseDepartureDataId={courseDepartureDataId}
      />
    </>
  );
}
