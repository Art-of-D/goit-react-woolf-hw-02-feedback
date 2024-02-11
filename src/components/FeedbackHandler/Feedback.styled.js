import styled from 'styled-components';

export const FeedbackSection = styled.section`
  padding: 5px;
  padding-left: 30px;
`;

export const FeedbackTitle = styled.h2`
  margin-top: 5px;
  margin-bottom: 0;
  font-size: larger;
  font-weight: bold;
  text-decoration: underline;
`;

export const FeedbackListButtons = styled.ul`
  display: flex;
  padding: 0;
  gap: 10px;
`;

export const FeedbackButton = styled.button`
  width: 90px;
  border-radius: 5px;
`;

export const FeedbackList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 2px;
`;

export const FeedbackListElements = styled.li`
  list-style: none;
  position: relative;
  display: flex;
  gap: 10px;
  border-radius: 5px;
  padding-top: 5px;
`;
