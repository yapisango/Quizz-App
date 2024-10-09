import React from "react"

function decodeHTML(html) {
    const txt = document.createElement("textarea")
    txt.innerHTML = html
    return txt.value
}

export default function Reply(props) {
    const score = props.questions.reduce((total, question, index) => {
        return total + (props.answers[index] === question.correct_answer ? 1 : 0)
    }, 0)

    return (
        <div className="reply--page">
            {props.questions.map((question, questionIndex) => {
                const questionText = decodeHTML(question.question)
                const options = [...question.incorrect_answers, question.correct_answer]
                    .sort(() => Math.random() - 0.5)
                    .map(option => decodeHTML(option))
                
                const userAnswer = props.answers[questionIndex]
                const correctAnswer = question.correct_answer

                return (
                    <div key={questionIndex} className="question-block">
                        <p className="reply--text">{questionText}</p>
                        <div className="options-wrapper">
                            {options.map((option, index) => {
                                const isUserAnswer = userAnswer === option
                                const isCorrect = correctAnswer === option

                                let className = "option--btn"
                                if (isCorrect) {
                                    className += " correct"
                                } else if (isUserAnswer && !isCorrect) {
                                    className += " incorrect"
                                }

                                return (
                                    <button
                                        key={index}
                                        className={className}
                                        disabled
                                    >
                                        {option}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                )
            })}

            <div className="result-section">
                <p className="score-text">You scored {score}/{props.questions.length} correct answers</p>
                <button className="reply--btn" onClick={props.playAgain}>Play Again</button>
            </div>
        </div>
    )
}
