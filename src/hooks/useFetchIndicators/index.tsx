import { useCourseStore } from "@unidash/store/course.store";
import { useEffect, useState } from "react";
import { UseFetchIndicatorsParams } from "./useFetchIndicators.interface";

export function useFetchIndicators<T>({
  fetchIndicators,
}: UseFetchIndicatorsParams<T>) {
  const [indicators, setIndicators] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);

  const { activeCourse } = useCourseStore();

  useEffect(() => {
    setIsFetching(true);

    if (!activeCourse) {
      return;
    }

    (async () => {
      try {
        const indicatorsResponse = await fetchIndicators(activeCourse.id, {
          semester: null,
          yearFrom: null,
          yearTo: null,
        });

        setIndicators(indicatorsResponse);
        setIsFetching(false);
      } catch {
        setIndicators(null);
        setIsFetching(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCourse]);

  return {
    indicators,
    isFetching,
    courseIsSelected: Boolean(activeCourse),
    hasIndicator: Boolean(indicators),
  };
}
