import { useState } from 'react';
import Statistics from './Statistics';
import NotificationMessage from './Notification ';
import FeedbackOptions from './FeedbackOptions';
import Section from './SectionTitle';
import { Container } from './Feedback.styled';

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = Object.keys({ good, neutral, bad });

  const leaveFeedBack = type => {
    switch (type) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  };

  const total = good + neutral + bad;
  const positiveFidback = Math.round((good / total) * 100);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedBack={leaveFeedBack} />
      </Section>
      <Section title="Statistics">
        {good > 0 || neutral > 0 || bad > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFidback}
          />
        ) : (
          <NotificationMessage message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
}

export default Feedback;
