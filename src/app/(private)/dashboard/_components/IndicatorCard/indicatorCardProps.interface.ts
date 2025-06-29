import { VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { iconVariants, SituationType } from "./indicatorCard.constant";

export interface IndicatorCardProps extends VariantProps<typeof iconVariants> {
  icon: ReactNode;
  title: string;
  value: number | string;
  observation?: string;
  situation?: SituationType;
}
