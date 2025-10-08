import { SITUATION_TYPE } from "@unidash/app/(private)/dashboard/_components/IndicatorCard/indicatorCard.constant";
import {
  PercentageBuilderParams,
  PercentageBuilderReturn,
} from "./indicatorBuilder.interface";

export class IndicatorBuilder {
  public static buildPercentageFromValues({
    currentValue,
    previousValue,
    observations,
  }: PercentageBuilderParams): PercentageBuilderReturn {
    if (!currentValue) {
      return {
        observation: observations.none,
        situation: SITUATION_TYPE.none,
      };
    }

    if (!previousValue) {
      return {
        observation: observations.onlyCurrent,
        situation: SITUATION_TYPE.onlyCurrent,
      };
    }

    if (currentValue == previousValue) {
      return {
        observation: observations.indifferent,
        situation: SITUATION_TYPE.indifferent,
      };
    }

    const percentage = this.formatPercentage(
      Math.abs(currentValue / previousValue - 1)
    );

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

  public static buildPercentageFromPercentages({
    currentValue,
    previousValue,
    observations,
  }: PercentageBuilderParams): PercentageBuilderReturn {
    if (!currentValue) {
      return {
        observation: observations.onlyCurrent,
        situation: SITUATION_TYPE.onlyCurrent,
      };
    }

    if (!previousValue) {
      return {
        observation: observations.onlyCurrent,
        situation: SITUATION_TYPE.onlyCurrent,
      };
    }

    if (currentValue == previousValue) {
      return {
        observation: observations.indifferent,
        situation: SITUATION_TYPE.indifferent,
      };
    }

    const percentage = Math.abs(currentValue - previousValue).toFixed(2) + "%";

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

  private static formatPercentage(value: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "percent",
    }).format(value);
  }
}
