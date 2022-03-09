import React from 'react'
const Answers = ({ question, selectAnswer,isAnswerGiven }) => {
    return (
        <div className="answer-container">
            {question.incorrect_answers.map((answer) => (
                <button  className="answer" disabled={isAnswerGiven}  onClick={() => selectAnswer(answer)} key={answer} >{decodeURIComponent(answer)}</button>
            ))}
            <button className="answer" disabled={isAnswerGiven}  onClick={() => selectAnswer(question.correct_answer)}>{decodeURIComponent(question.correct_answer)}</button>

        </div>
    )
}

export default Answers
