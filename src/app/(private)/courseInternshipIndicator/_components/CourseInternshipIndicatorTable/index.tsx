import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@unidash/components/Table";
import { CourseInternshipIndicatorTableProps } from "./courseInternshipIndicatorTable.interface";

export function CourseInternshipIndicatorTable({
  internshipIndicators,
}: CourseInternshipIndicatorTableProps) {
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
        {internshipIndicators.map((internshipIndicator) => (
          <TableRow key={internshipIndicator.id}>
            <TableCell className="font-medium">
              {internshipIndicator.name}
            </TableCell>
            <TableCell>{internshipIndicator.status}</TableCell>
            <TableCell>{internshipIndicator.createdAt}</TableCell>
            <TableCell className="text-right">Ações</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
