import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@unidash/components/Card";
import { IndicatorCardProps } from "./indicatorCardProps.interface";
import { cn } from "@unidash/lib/cn";
import {
  iconVariants,
  indicatorVariants,
  SITUATION_ICON,
} from "./indicatorCard.constant";

export function IndicatorCard({
  icon,
  title,
  value,
  observation,
  situation,
  variant,
  size,
}: IndicatorCardProps) {
  return (
    <Card>
      <CardHeader>
        <i className={cn(iconVariants({ variant }))}>{icon}</i>

        <CardTitle className="font-semibold">{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex items-center gap-2">
        <strong className={cn(indicatorVariants({ size }))}>{value}</strong>

        {situation && SITUATION_ICON[situation]}

        {observation && <span className="text-xs flex-1">{observation}</span>}
      </CardContent>
    </Card>
  );
}
