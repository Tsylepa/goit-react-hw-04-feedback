import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export default function Feedback() {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const options = Object.keys(feedback);
  const { good, neutral, bad } = feedback;
  const total = Object.values(feedback).reduce((acc, el) => acc + el, 0);
  const positivePercentage = ((good / total) * 100).toFixed() + '%';

  function onLeaveFeedback(e) {
    setFeedback(prevState => ({
      ...prevState,
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  }

  return (
    <>
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      {total ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
}
