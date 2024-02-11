import {
  FeedbackListButtons,
  FeedbackListElements,
  FeedbackButton,
} from './Feedback.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackListButtons>
      {options.map(option => {
        return (
          <FeedbackListElements>
            <FeedbackButton
              key={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </FeedbackButton>
          </FeedbackListElements>
        );
      })}
    </FeedbackListButtons>
  );
};
