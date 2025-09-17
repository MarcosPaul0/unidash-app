import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@unidash/components/Table";
import { StudentIncomingDataTableProps } from "./studentIncomingDataTable.interface";
import { SemesterTag } from "@unidash/app/(private)/courseCoordinationData/_components/SemesterTag";
import { StudentIncomingDataActions } from "../StudentIncomingDataActions";
import { Can } from "@unidash/components/Can";

export function StudentIncomingDataTable({
  studentIncomingData,
}: StudentIncomingDataTableProps) {
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}

      <TableHeader>
        <TableRow>
          <TableHead>Ano</TableHead>

          <TableHead>Semestre</TableHead>

          <TableHead>Preferencia pelo noturno</TableHead>

          <TableHead>Leu o PPC</TableHead>

          <TableHead>Sabe diferenciar cursos correlatos</TableHead>

          <TableHead>Espectativa de atuação</TableHead>

          <Can allowedRoles={["admin"]}>
            <TableHead className="w-[100px] text-center">Ações</TableHead>
          </Can>
        </TableRow>
      </TableHeader>

      <TableBody>
        {studentIncomingData.map((data) => (
          <TableRow key={data.id}>
            <TableCell>{data.year}</TableCell>

            <TableCell>
              <SemesterTag semester={data.semester} />
            </TableCell>

            <TableCell>{data.nocturnalPreference}</TableCell>

            <TableCell>{data.readPedagogicalProject}</TableCell>

            <TableCell>{data.knowRelatedCourseDifference}</TableCell>

            <TableCell>{data.workExpectation}</TableCell>

            <Can allowedRoles={["admin"]}>
              <TableCell className="w-[100px] text-center">
                <StudentIncomingDataActions studentIncomingDataId={data.id} />
              </TableCell>
            </Can>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
