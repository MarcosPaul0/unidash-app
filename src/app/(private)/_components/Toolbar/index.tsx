import { ChartTabsList } from "../../dashboard/_components/ChartTabsList";
import { FilterForm } from "../FilterForm";

export function Toolbar() {
  return (
    <div className="flex items-center justify-between border-b-2 border-muted">
      <ChartTabsList />

      <FilterForm />
    </div>
  );
}
