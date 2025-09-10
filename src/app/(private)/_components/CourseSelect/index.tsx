"use client";

import { GraduationCapIcon } from "@phosphor-icons/react/dist/ssr";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@unidash/components/Select";
import { CourseCSService } from "@unidash/services/course/course.cs.service";
import { useCourseStore } from "@unidash/store/course.store";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const LOCAL_STORAGE_COURSE_ID_ITEM = "unidash_lastActiveCourseId";

export function CourseSelect() {
  const params = useParams();
  const pathname = usePathname();

  const router = useRouter();

  const {
    courses,
    activeCourse,
    setCourses,
    setActiveCourse,
    clearActiveCourse,
  } = useCourseStore();

  function handleChangeCourse(courseId: string) {
    const selectedCourse = courses.find(
      (currentCourse) => currentCourse.id === courseId
    );

    if (!selectedCourse) {
      clearActiveCourse();

      return;
    }

    setActiveCourse(selectedCourse);
    localStorage.setItem(LOCAL_STORAGE_COURSE_ID_ITEM, courseId);

    const hasCourseInRoute = Boolean(params?.courseId);

    if (hasCourseInRoute) {
      const currentCourseId = new RegExp(`${params.courseId}$`);
      const newPathname = pathname.replace(currentCourseId, courseId);

      router.replace(newPathname);
    }
  }

  useEffect(() => {
    (async () => {
      const coursesResponse = await CourseCSService.getAll();

      setCourses(coursesResponse.courses);

      const lastActiveCourseId = localStorage.getItem(
        LOCAL_STORAGE_COURSE_ID_ITEM
      );

      if (!lastActiveCourseId) {
        return;
      }

      const lastActiveCourse = coursesResponse.courses.find(
        (course) => course.id === lastActiveCourseId
      );

      if (!lastActiveCourse) {
        return;
      }

      setActiveCourse(lastActiveCourse);
    })();
  }, [setCourses, setActiveCourse]);

  return (
    <Select
      onValueChange={handleChangeCourse}
      value={activeCourse ? activeCourse.id : undefined}
    >
      <SelectTrigger
        className={`
            max-w-[460px] bg-button data-[placeholder]:text-button-foreground
            px-4 text-xl font-title font-semibold text-button-foreground
            [&_svg:not([class*='text-'])]:text-button-foreground rounded-2xl
          `}
        size="lg"
      >
        <GraduationCapIcon
          size={24}
          className="text-button-foreground size-6"
        />

        <SelectValue className="" placeholder="Selecione um curso" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Cursos</SelectLabel>

          {courses.map((course) => (
            <SelectItem key={course.id} value={course.id}>
              {course.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
