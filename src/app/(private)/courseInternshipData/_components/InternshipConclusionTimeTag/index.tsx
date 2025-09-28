import { Badge } from "@unidash/components/Badge";
import { InternshipConclusionTimeTagProps } from "./internshipConclusionTimeTag.interface";
import { CONCLUSION_TIME } from "@unidash/api/dtos/courseInternshipData.dto";

const CONCLUSION_TIME_COLOR = {
  [CONCLUSION_TIME.bigger]: "bg-icon-red text-icon-red-foreground",
  [CONCLUSION_TIME.medium]: "bg-icon-yellow text-icon-yellow-foreground",
  [CONCLUSION_TIME.smaller]: "bg-icon-green text-icon-green-foreground",
} as const;

const CONCLUSION_TIME_LABEL = {
  [CONCLUSION_TIME.bigger]: "Maior",
  [CONCLUSION_TIME.medium]: "Médio",
  [CONCLUSION_TIME.smaller]: "Menor",
} as const;

export function WorkExpectationTag({
  conclusionTime,
}: InternshipConclusionTimeTagProps) {
  return (
    <Badge
      className={`text-xs md:text-sm ${CONCLUSION_TIME_COLOR[conclusionTime]}`}
    >
      {CONCLUSION_TIME_LABEL[conclusionTime]}
    </Badge>
  );
}
