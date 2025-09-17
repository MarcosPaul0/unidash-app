"use client";

import { StudentIncomingDialog } from "@unidash/app/(private)/studentIncomingData/_components/StudentIncomingDialog";
import { Can } from "@unidash/components/Can";

export function DashboardDialogs() {
  return (
    <Can allowedRoles={["student"]}>
      <StudentIncomingDialog />
    </Can>
  );
}
