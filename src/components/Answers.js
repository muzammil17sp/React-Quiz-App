import React, { useEffect, useState } from 'react'
const Answers = ({ question, selectAnswer, isAnswerGiven }) => {
    const [answer, setAnswer] = useState([])

    function shuffleArray(array) {
        let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    useEffect(() => {
        let completeArray = question.incorrect_answers.push(question.correct_answer)
        let mixAnswers = shuffleArray(question.incorrect_answers)
        setAnswer(mixAnswers)

    }, [question])
    return (
        <div className="answer-container">
            {answer.map((answer) => (
                <button className="answer" disabled={isAnswerGiven} onClick={() => selectAnswer(answer)} key={answer} >{decodeURIComponent(answer)}</button>
            ))}
            {/* <button className="answer" disabled={isAnswerGiven} onClick={() => selectAnswer(question.correct_answer)}>{decodeURIComponent(question.correct_answer)}</button> */}

        </div>
    )
}

export default Answers
