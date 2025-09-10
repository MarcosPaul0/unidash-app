import { Toolbar } from "@unidash/app/(private)/_components/Toolbar";
import { CourseSSRService } from "@unidash/services/course/course.ssr.service";
import { TeacherCourseTable } from "../../_components/TeacherCourseTable";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@unidash/components/Card";
import { AddTeacherPopover } from "../../_components/AddTeacherPopover";

interface ListCoursePageProps {
  params: Promise<{ courseId: string }>;
}

export default async function ListCoursePage({ params }: ListCoursePageProps) {
  const currentParams = await params;

  const courseResponse = await CourseSSRService.getById(currentParams.courseId);

  return (
    <>
      <Toolbar breadcrumbPage="Lista de cursos" />

      <Card>
        <CardHeader>
          <CardTitle>
            Docentes do curso de {courseResponse.course.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-8">
          <AddTeacherPopover courseId={currentParams.courseId} />

          <TeacherCourseTable courseId={currentParams.courseId} />
        </CardContent>
      </Card>
    </>
  );
}
