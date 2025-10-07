import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@unidash/components/Table";
import { TeachingComplementaryActivitiesTableProps } from "./teachingComplementaryActivitiesTable.interface";
import { useActivitiesTable } from "@unidash/hooks/useActivitiesTable";
import { TEACHING_COMPLEMENTARY_ACTIVITIES_LABELS } from "../RegistrationByTypeOfTeachingComplementaryActivity";

export function TeachingComplementaryActivitiesTable({
  teachingComplementaryActivities,
}: TeachingComplementaryActivitiesTableProps) {
  const { activities, activitiesByYear } = useActivitiesTable({
    data: teachingComplementaryActivities,
    labels: TEACHING_COMPLEMENTARY_ACTIVITIES_LABELS,
  });

  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}

      <TableHeader>
        <TableRow>
          <TableHead className="py-2 px-4">Atividade</TableHead>

          {activities.map(([year]) => (
            <TableHead className="py-2 px-4" key={year}>
              {year}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {activitiesByYear.map((activity) => (
          <TableRow key={activity.activity}>
            <TableCell className="py-5 px-4">{activity.activity}</TableCell>

            {activity.activitiesByYear.map((yearActivities, index) => (
              <TableCell
                className="py-5 px-4"
                key={`${yearActivities}-${index}`}
              >
                {yearActivities}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
