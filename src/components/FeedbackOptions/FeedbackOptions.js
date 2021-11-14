import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <>
            {options.map(label => (
                <button
                    className={s.label}
                    key={label}
                    type="button"
                    onClick={() => onLeaveFeedback({ type: label, payload: 1 })}
                >
                    {label}
                </button>
            ))}
        </>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
