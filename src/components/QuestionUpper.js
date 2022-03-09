import React from 'react'
import Styled from "styled-components"
import Star from './Star'
const QuestionUpper = ({ questionNo, totalQuestions, question }) => {

    let gameLevel = 0
    if (question.difficulty === "easy") {
        gameLevel = 1
    } else if (question.difficulty === "medium") {
        gameLevel = 2

    } else if (question.difficulty === "hard") {
        gameLevel = 3
    }
    return (
        <div className="question-upper">
            <QuestionTotal>Question {questionNo + 1} of {totalQuestions} </QuestionTotal>
            <QuestionCategory>Category : { ""}{decodeURIComponent(question.category)}</QuestionCategory>
            <Star gameLevel={gameLevel} />
            <Question>{decodeURIComponent(question.question)}</Question>


        </div>
    )
}

export default QuestionUpper
const QuestionTotal = Styled.h2`
font-weight:normal;
margin:10px 0 5px 0;
`
const QuestionCategory = Styled.p`
color:grey;
font-size:12px;
margin:4px 0 10px 0;
`
const Question = Styled.h5`
font-size:18px;
font-weight:normal;
`

