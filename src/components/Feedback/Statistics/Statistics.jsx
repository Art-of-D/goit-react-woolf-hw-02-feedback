import { FeedbackList, FeedbackListElements } from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <FeedbackList>
      <FeedbackListElements>Good: {good}</FeedbackListElements>
      <FeedbackListElements>Neutral: {neutral}</FeedbackListElements>
      <FeedbackListElements>Bad: {bad}</FeedbackListElements>
      <FeedbackListElements>Total: {total}</FeedbackListElements>
      <FeedbackListElements>
        Positive feedback: {positivePercentage}%
      </FeedbackListElements>
    </FeedbackList>
  );
};
