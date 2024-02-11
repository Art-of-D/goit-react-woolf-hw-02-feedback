import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import { Section } from './Section';
import { Component } from 'react';

class FeedbackHandler extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
    onLeaveFeedback: false,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state;
    const totalPositive = Math.round((good / total) * 100);
    this.setState(() => {
      return { positivePercentage: totalPositive };
    });
  };

  handleFeedback = option => {
    this.setState(
      prevState => ({
        [option]: prevState[option] + 1,
        total: prevState.total + 1,
      }),
      () => {
        this.countPositiveFeedbackPercentage();
      }
    );
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    const keyExceptionList = ['total', 'positivePercentage', 'onLeaveFeedback'];
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={[
              ...Object.keys(this.state).filter(
                key => !keyExceptionList.includes(key)
              ),
            ]}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total < 1 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}

export default FeedbackHandler;
