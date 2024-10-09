import React from "react"

export default function Intro(props) {
    const [loading, setLoading] = React.useState(false)

    const fetchQuestions = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=hard&type=multiple")
            const data = await response.json()
            props.startQuiz(data.results)
        } catch (error) {
            console.error("Failed to fetch questions:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="intro--page">
            <h1 className="intro--head">Quizzical</h1>
            <p className="intro--text">Some description if needed</p>
            <button className="intro--btn" onClick={fetchQuestions} disabled={loading}>
                {!loading ? "Start Quiz" : "Loading..."}
            </button>
        </div>
    )
}