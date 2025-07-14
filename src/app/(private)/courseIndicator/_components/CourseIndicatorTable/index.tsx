import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@unidash/components/Table";
import { CourseIndicatorTableProps } from "./courseIndicatorTable.interface";

export function CourseIndicatorTable({
  courseIndicators,
}: CourseIndicatorTableProps) {
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
        {courseIndicators.map((courseIndicator) => (
          <TableRow key={courseIndicator.id}>
            <TableCell className="font-medium">
              {courseIndicator.name}
            </TableCell>
            <TableCell>{courseIndicator.status}</TableCell>
            <TableCell>{courseIndicator.createdAt}</TableCell>
            <TableCell className="text-right">Ações</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
