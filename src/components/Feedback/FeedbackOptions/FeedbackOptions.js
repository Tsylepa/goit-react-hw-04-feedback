import { Options, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Options>
    {options.map(option => {
      return (
        <li key={option}>
          <Button type="button" name={option} onClick={onLeaveFeedback}>
            {option}
          </Button>
        </li>
      );
    })}
  </Options>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
