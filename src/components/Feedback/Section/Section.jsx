import { FeedbackSection, FeedbackTitle } from './Section.style';
export const Section = ({ title, children }) => {
  return (
    <FeedbackSection>
      <FeedbackTitle>{title}</FeedbackTitle>
      {children}
    </FeedbackSection>
  );
};
