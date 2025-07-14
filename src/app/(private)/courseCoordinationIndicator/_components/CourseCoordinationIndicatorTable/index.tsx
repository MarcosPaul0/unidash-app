import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@unidash/components/Table";
import { CourseCoordinationIndicatorTableProps } from "./courseCoordinationIndicatorTable.interface";

export function CourseCoordinationIndicatorTable({
  coordinationIndicators,
}: CourseCoordinationIndicatorTableProps) {
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
        {coordinationIndicators.map((coordinationIndicator) => (
          <TableRow key={coordinationIndicator.id}>
            <TableCell className="font-medium">
              {coordinationIndicator.name}
            </TableCell>
            <TableCell>{coordinationIndicator.status}</TableCell>
            <TableCell>{coordinationIndicator.createdAt}</TableCell>
            <TableCell className="text-right">Ações</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
