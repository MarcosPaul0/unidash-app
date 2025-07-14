import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@unidash/components/Table";
import { CourseCompletionWorkIndicatorTableProps } from "./courseCompletionWorkIndicatorTable.interface";

export function CourseCompletionWorkIndicatorTable({
  completionWorkIndicators,
}: CourseCompletionWorkIndicatorTableProps) {
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
        {completionWorkIndicators.map((completionWorkIndicator) => (
          <TableRow key={completionWorkIndicator.id}>
            <TableCell className="font-medium">
              {completionWorkIndicator.name}
            </TableCell>
            <TableCell>{completionWorkIndicator.status}</TableCell>
            <TableCell>{completionWorkIndicator.createdAt}</TableCell>
            <TableCell className="text-right">Ações</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
