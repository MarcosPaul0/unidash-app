import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@unidash/components/Table";
import { StudentIngressIndicatorTableProps } from "./studentIngressIndicatorTable.interface";

export function StudentIngressIndicatorTable({
  ingressIndicators,
}: StudentIngressIndicatorTableProps) {
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
        {ingressIndicators.map((ingressIndicator) => (
          <TableRow key={ingressIndicator.id}>
            <TableCell className="font-medium">
              {ingressIndicator.name}
            </TableCell>
            <TableCell>{ingressIndicator.status}</TableCell>
            <TableCell>{ingressIndicator.createdAt}</TableCell>
            <TableCell className="text-right">Ações</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
