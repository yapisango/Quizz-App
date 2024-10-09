import React from "react"
import Intro from "./Intro"
import Quiz from "./Quiz"
import Reply from "./Reply"

export default function App(props) {
    const [questions, setQuestions] = React.useState([])
    const [answers, setAnswers] = React.useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0)
    const [quizStarted, setQuizStarted] = React.useState(false)
    const [quizFinished, setQuizFinished] = React.useState(false)

    const startQuiz = (fetchedQuestions) => {
        setQuestions(fetchedQuestions)
        setQuizStarted(true)
        setQuizFinished(false)
        setCurrentQuestionIndex(0)
        setAnswers(Array(fetchedQuestions.length).fill(null))
    }

    const checkAnswers = (userAnswers) => {
        setAnswers(userAnswers)
        setQuizFinished(true)
    }

    const playAgain = () => {
        setQuizStarted(false)
        setQuizFinished(false)
        setAnswers([])
    }

    return (
        <div className="app" >
            {!quizStarted && <Intro startQuiz={startQuiz} />}
            {quizStarted && !quizFinished && (
                <Quiz
                    questions={questions}
                    currentQuestionIndex={currentQuestionIndex}
                    setCurrentQuestionIndex={setCurrentQuestionIndex}
                    checkAnswers={checkAnswers}
                    answers={answers} 
                />
            )}
            {quizFinished && (
                <Reply
                    questions={questions}
                    answers={answers}
                    playAgain={playAgain}
                />
            )}
        </div>
    )
}

