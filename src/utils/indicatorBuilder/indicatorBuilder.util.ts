import { SITUATION_TYPE } from "@unidash/app/(private)/dashboard/_components/IndicatorCard/indicatorCard.constant";
import {
  PercentageBuilderParams,
  PercentageBuilderReturn,
} from "./indicatorBuilder.interface";

export class IndicatorBuilder {
  public static percentageBuild({
    currentValue,
    observations,
    previousValue,
  }: PercentageBuilderParams): PercentageBuilderReturn {
    if (currentValue == previousValue) {
      return {
        observation: observations.indifferent,
        situation: SITUATION_TYPE.indifferent,
      };
    }

    const percentage = new Intl.NumberFormat("pt-BR", {
      style: "percent",
    }).format(currentValue / previousValue);

    if (currentValue > previousValue) {
      return {
        observation: `${percentage} ${observations.increase}`,
        situation: SITUATION_TYPE.increase,
      };
    }

    return {
      observation: `${percentage} ${observations.regress}`,
      situation: SITUATION_TYPE.regress,
    };
  }
}
