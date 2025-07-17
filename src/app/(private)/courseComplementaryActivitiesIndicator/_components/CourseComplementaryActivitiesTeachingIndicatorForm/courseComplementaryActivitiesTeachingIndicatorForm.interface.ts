import { CourseComplementaryActivitiesExtensionIndicatorFormData } from "../CourseComplementaryActivitiesExtensionIndicatorForm/courseComplementaryActivitiesExtensionIndicatorForm.interface";
import { CourseComplementaryActivitiesSearchIndicatorFormData } from "../CourseComplementaryActivitiesSearchIndicatorForm/courseComplementaryActivitiesSearchIndicatorForm.interface";

export interface CourseComplementaryActivitiesTeachingIndicatorFormProps {
  title: string;
}

export interface CourseComplementaryActivitiesTeachingIndicatorFormData {
  electivesDisciplines: number;
  preparationForTest: number;
  subjectMonitoring: number;
  sponsorshipOfNewStudents: number;
  providingTraining: number;
  coursesInTheArea: number;
  complementaryCoursesInTheArea: number;
  coursesOutOfTheArea: number;
}

export interface CourseComplementaryActivitiesIndicatorFormData
  extends CourseComplementaryActivitiesTeachingIndicatorFormData,
    CourseComplementaryActivitiesSearchIndicatorFormData,
    CourseComplementaryActivitiesExtensionIndicatorFormData {}
