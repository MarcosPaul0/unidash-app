import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@unidash/components/Table";
import { CourseExtensionActivitiesIndicatorTableProps } from "./courseExtensionActivitiesIndicatorTable.interface";

export function CourseExtensionActivitiesIndicatorTable({
  extensionActivityIndicators,
}: CourseExtensionActivitiesIndicatorTableProps) {
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
        {extensionActivityIndicators.map((extensionActivityIndicator) => (
          <TableRow key={extensionActivityIndicator.id}>
            <TableCell className="font-medium">
              {extensionActivityIndicator.name}
            </TableCell>
            <TableCell>{extensionActivityIndicator.status}</TableCell>
            <TableCell>{extensionActivityIndicator.createdAt}</TableCell>
            <TableCell className="text-right">Ações</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
