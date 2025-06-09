import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@unidash/components/Card";
import { CardChartProps } from "./cardChartProps.interface";

export function ChartCard({ children, description, title }: CardChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>

        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}
