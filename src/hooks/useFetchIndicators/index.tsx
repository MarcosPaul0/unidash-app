import { Semester } from "@unidash/api/dtos/courseStudentsData.dto";
import { useCourseStore } from "@unidash/store/course.store";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { UseFetchIndicatorsParams } from "./useFetchIndicators.interface";

export function useFetchIndicators<T>({
  fetchIndicators,
}: UseFetchIndicatorsParams<T>) {
  const [indicators, setIndicators] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);

  const searchParams = useSearchParams();

  const { activeCourse } = useCourseStore();

  const yearFrom = searchParams.get("yearFrom");
  const yearTo = searchParams.get("yearTo");
  const semester = searchParams.get("semester") as Semester;

  useEffect(() => {
    (async () => {
      setIsFetching(true);

      if (!activeCourse?.id) {
        return;
      }

      const indicatorsResponse = await fetchIndicators(activeCourse.id, {
        semester,
        yearFrom,
        yearTo,
      });

      setIndicators(indicatorsResponse);

      setIsFetching(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCourse, semester, yearFrom, yearTo]);

  return {
    indicators,
    isFetching,
  };
}
