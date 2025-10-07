import {
  ChecksIcon,
  InfoIcon,
  SparkleIcon,
} from "@phosphor-icons/react/dist/ssr";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@unidash/components/Tooltip";
import { ActionPlansTooltipProps } from "./actionPlansTooltip.interface";

export function ActionPlansTooltip({ descriptions }: ActionPlansTooltipProps) {
  const hasFirstDescription = Boolean(descriptions?.first);
  const hasSecondDescription = Boolean(descriptions?.second);

  if (!hasFirstDescription && !hasSecondDescription) {
    return null;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild className="absolute right-36 fill-muted">
        <InfoIcon size={36} />
      </TooltipTrigger>

      <TooltipContent className="p-3 text-base flex flex-col gap-3">
        <h2 className="flex items-center gap-2">
          <SparkleIcon size={16} weight="fill" /> Planos de ações
        </h2>

        {hasFirstDescription && (
          <p className="flex flex-col gap-2 bg-popover-secondary p-2 rounded-xl max-w-xl">
            <strong className="flex items-center gap-2">
              <ChecksIcon size={24} />
              Descrição do primeiro semestre:
            </strong>
            <span>{descriptions.first}</span>
          </p>
        )}

        {hasSecondDescription && (
          <p className="flex flex-col gap-2 bg-popover-secondary p-2 rounded-xl max-w-xl">
            <strong className="flex items-center gap-2">
              <ChecksIcon size={24} />
              Descrição do segundo semestre:
            </strong>
            <span>{descriptions.second}</span>
          </p>
        )}
      </TooltipContent>
    </Tooltip>
  );
}
