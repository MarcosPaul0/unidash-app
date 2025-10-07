import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@unidash/components/Table";
import { ExtensionComplementaryActivitiesTableProps } from "./extensionComplementaryActivitiesTable.interface";
import { useActivitiesTable } from "@unidash/hooks/useActivitiesTable";
import { EXTENSION_COMPLEMENTARY_ACTIVITIES_LABELS } from "../RegistrationByTypeOfExtensionComplementaryActivity";

export function ExtensionComplementaryActivitiesTable({
  extensionComplementaryActivities,
}: ExtensionComplementaryActivitiesTableProps) {
  const { activities, activitiesByYear } = useActivitiesTable({
    data: extensionComplementaryActivities,
    labels: EXTENSION_COMPLEMENTARY_ACTIVITIES_LABELS,
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
            <TableCell className="py-10 px-4">{activity.activity}</TableCell>

            {activity.activitiesByYear.map((yearActivities, index) => (
              <TableCell
                className="py-10 px-4"
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
