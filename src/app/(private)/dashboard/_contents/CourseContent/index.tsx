"use client";

import { TabsContent } from "@unidash/components/Tabs";
import { CHARTS_CATEGORIES } from "../../_components/ChartTabsList/chartsTabsList.constant";
import { Topic } from "../../_components/Topic";
import { IndicatorsCSService } from "@unidash/services/indicators/indicators.cs.service";
import { useFetchIndicators } from "@unidash/hooks/useFetchIndicators";
import { CourseSkeletons } from "../../_charts/course/CourseSkeletons";
import { CourseIndicators } from "../../_charts/course/CourseIndicators";

export function CourseContent() {
  const { indicators, isFetching } = useFetchIndicators({
    fetchIndicators: IndicatorsCSService.getCourseIndicators,
  });

  return (
    <TabsContent
      value={CHARTS_CATEGORIES.COURSE}
      className="flex flex-col gap-8"
    >
      <Topic title="Indicadores do curso" />

      {isFetching ? (
        <CourseSkeletons />
      ) : (
        <CourseIndicators indicators={indicators} />
      )}
    </TabsContent>
  );
}
