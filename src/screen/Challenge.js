import { useState } from "react"
import Styled from "styled-components"
import Answers from "../components/Answers"
import QuestionProgress from "../components/QuestionProgress"

import QuestionUpper from "../components/QuestionUpper"
import { questions } from "../data/questions"
const Challenge = () => {
  const [questionNo, setQuestionNo] = useState(0)
  const [isAnswerGiven, setIsAnswerGiven] = useState(false)
  const [correctAnswer, setCorrectAnswer] = useState(false)
  const [noOfCorrectAnswer, setNoOfCorrectAnswer] = useState(0)
  const [questionAnswered, setQuestionAnswered] = useState(0)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(100)
  const [percentage, setPercentage] = useState(0)

  const selectAnswer = (e) => {
    setIsAnswerGiven(true)
    setQuestionAnswered(questionNo + 1)
    if (e === questions[questionNo].correct_answer) {
      setCorrectAnswer(true)
      let min = (((noOfCorrectAnswer + 1) / questions.length) * 100)
      let percentage = (((noOfCorrectAnswer + 1) / (questionAnswered + 1)) * 100)
      let max = (((noOfCorrectAnswer + 1 + (questions.length - (questionAnswered + 1))) / questions.length) * 100)

      setPercentage(percentage)
      setMin(min)
      setMax(max)
      setNoOfCorrectAnswer(noOfCorrectAnswer + 1)

    } else {
      setCorrectAnswer(false)
      let answeredGiven = questionAnswered + 1
      let min = (((noOfCorrectAnswer) / questions.length) * 100)
      let max = (((noOfCorrectAnswer + (questions.length - answeredGiven)) / questions.length) * 100)
      let percentage = (((noOfCorrectAnswer) / (questionAnswered + 1)) * 100)
      setPercentage(percentage)
      setMax(max)
      setMin(min)
    }
  }

  const nextQuestion = () => {
    setQuestionNo(questionNo + 1)
    setIsAnswerGiven(false)
  }
  const finishQuiz = () => {
    alert(percentage >= 75 ? "YOU WON" : "YOU LOST")
    window.location.reload()
  }




  return (
    <div>


      <progress value={questionNo + 1} className="question-progress" max={questions.length}></progress>
      <div className="challenge-wrapper">
        <QuestionUpper question={questions[questionNo]} totalQuestions={questions.length} questionNo={questionNo} />
        <Answers isAnswerGiven={isAnswerGiven} selectAnswer={selectAnswer} question={questions[questionNo]} />
        <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center' }}>

          {
            isAnswerGiven && <Incorrect> {correctAnswer ? "Correct" : "Sorry"}</Incorrect>
          }
          {isAnswerGiven && <NextQuestion onClick={questions.length - 1 === questionNo ? finishQuiz : nextQuestion}> {questions.length - 1 === questionNo ? "Finish Check Result" : "Next Question"} </NextQuestion>}
        </div>
        <QuestionProgress min={min} max={max} percentage={percentage} />
      </div>

    </div>
  )
}
export default Challenge




const Incorrect = Styled.p`
font-size:20px;
text-align:center;
`

const NextQuestion = Styled.button`
padding:12px 8px ;
background-color:#000;
color:white;
border:1px solid #000;
margin-top:5px;
margin:auto ;
width:150px;
`