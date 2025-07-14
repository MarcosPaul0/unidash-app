import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@unidash/components/Table";
import { CourseComplementaryActivitiesIndicatorTableProps } from "./courseComplementaryActivitiesIndicatorTable.interface";

export function CourseComplementaryActivitiesIndicatorTable({
  complementaryActivityIndicators,
}: CourseComplementaryActivitiesIndicatorTableProps) {
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}

      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Curso</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Registro</TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {complementaryActivityIndicators.map(
          (complementaryActivityIndicator) => (
            <TableRow key={complementaryActivityIndicator.id}>
              <TableCell className="font-medium">
                {complementaryActivityIndicator.name}
              </TableCell>
              <TableCell>{complementaryActivityIndicator.status}</TableCell>
              <TableCell>{complementaryActivityIndicator.createdAt}</TableCell>
              <TableCell className="text-right">Ações</TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
}
