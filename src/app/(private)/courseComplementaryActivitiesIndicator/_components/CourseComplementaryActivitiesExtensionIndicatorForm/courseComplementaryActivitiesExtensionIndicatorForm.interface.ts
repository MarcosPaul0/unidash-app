export interface CourseComplementaryActivitiesExtensionIndicatorFormProps {
  title: string;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

export interface CourseComplementaryActivitiesExtensionIndicatorFormData {
  culturalActivities: number;
  sportsCompetitions: number;
  awardsAtEvents: number;
  studentRepresentation: number;
  participationInCollegiateBodies: number;
}
