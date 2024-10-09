import React from "react"

export default function Quiz(props) {
    const [userAnswers, setUserAnswers] = React.useState(
        props.answers.length > 0 ? props.answers : Array(props.questions.length).fill("")
    )

    const handleAnswerChange = (index, answer) => {
        const newAnswers = [...userAnswers]
        newAnswers[index] = answer
        setUserAnswers(newAnswers)
    }

    const allAnswered =
        userAnswers.length === props.questions.length &&
        userAnswers.every(answer => answer)

    const handleSubmit = () => {
        props.checkAnswers(userAnswers)
    }

    return (
        <div className="quiz-container">
            {props.questions.map((question, questionIndex) => {
                const options = [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5)
                return (
                    <div key={questionIndex} className="question-block">
                        <p className="quiz--text">{question.question}</p>
                        <div className="options-wrapper">
                            {options.map((answer, index) => (
                                <button
                                    key={index}
                                    className={`option--btn ${userAnswers[questionIndex] === answer ? "selected" : ""}`}
                                    onClick={() => handleAnswerChange(questionIndex, answer)}
                                >
                                    {answer}
                                </button>
                            ))}
                        </div>
                    </div>
                )
            })}

            <button 
                className="check--btn" 
                onClick={handleSubmit} 
                disabled={!allAnswered}
            >
                Check Answers
            </button>
        </div>
    )
}