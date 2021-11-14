import { useReducer } from 'react';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';

const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case 'good':
            return { ...state, good: state.good + action.payload };

        case 'neutral':
            return { ...state, neutral: state.neutral + action.payload };

        case 'bad':
            return { ...state, bad: state.bad + action.payload };

        default:
            throw new Error(`Unsupported action type: ${action.type}`);
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const countTotalFeedback = () =>
        Object.values(state).reduce((acc, value) => acc + value);

    const countPositiveFeedbackPercentage = () =>
        Math.round((state.good * 100) / countTotalFeedback()) || 0;

    return (
        <>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={Object.keys(state)}
                    onLeaveFeedback={dispatch}
                />
            </Section>

            <Section title="Statistics">
                {countTotalFeedback() ? (
                    <Statistics
                        good={state.good}
                        neutral={state.neutral}
                        bad={state.bad}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()}
                    />
                ) : (
                    <Notification message="No feedback given" />
                )}
            </Section>
        </>
    );
}

export default App;
