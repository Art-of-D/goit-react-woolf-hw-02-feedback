import { FeedbackSection, FeedbackTitle } from './Feedback.styled';
export const Section = ({ title, children }) => {
  return (
    <FeedbackSection>
      <FeedbackTitle>{title}</FeedbackTitle>
      {children}
    </FeedbackSection>
  );
};
