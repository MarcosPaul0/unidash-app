import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@unidash/components/Table";
import { ExtensionActivitiesTableProps } from "./extensionActivitiesTable.interface";
import { useActivitiesTable } from "@unidash/hooks/useActivitiesTable";
import { EXTENSION_ACTIVITIES_LABELS } from "../RegistrationByTypeOfExtensionActivity";

export function ExtensionActivitiesTable({
  extensionActivities,
}: ExtensionActivitiesTableProps) {
  const { activities, activitiesByYear } = useActivitiesTable({
    data: extensionActivities,
    labels: EXTENSION_ACTIVITIES_LABELS,
  });

  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}

      <TableHeader>
        <TableRow>
          <TableHead className="py-2">Atividade</TableHead>

          {activities.map(([year]) => (
            <TableHead className="py-2" key={year}>
              {year}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {activitiesByYear.map((activity) => (
          <TableRow key={activity.activity}>
            <TableCell className="py-3.5">{activity.activity}</TableCell>

            {activity.activitiesByYear.map((yearActivities, index) => (
              <TableCell className="py-3.5" key={`${yearActivities}-${index}`}>
                {yearActivities}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
