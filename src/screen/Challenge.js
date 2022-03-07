import { useState } from "react"
import Styled from "styled-components"
import QuestionProgress from "../components/QuestionProgress"
import Questions from "../components/Questions"
import Star from "../components/Star"
import { questions } from "../data/questions"
const Challenge = () => {
  const [questionNo, setQuestion] = useState(0)
  const [givenAnswers, setGivenAnswer] = useState([])
  const [marks, setMarks] = useState(0)
  const [isVisible, setIsVisible] = useState("")


  const selectAnswer = (e) => {
    setGivenAnswer([...givenAnswers, e])
    if (e === questions[questionNo].correct_answer) {
      setQuestion(questionNo + 1)
      setMarks(marks + 5)
      setIsVisible("correct")
      setTimeout(() => {
        setIsVisible("")
      }, 1500);

    } else {
      setIsVisible("incorrect")
      console.log(isVisible)
      setTimeout(() => {
        setIsVisible("")
      }, 1500);
      setQuestion(questionNo + 1)

    }
    if (questionNo === questions.length - 1) {
      alert(marks >= 75 ? "YOU WON" : "YOU LOST TRY AGAIN")
      window.location.reload()
    }

  }

  return (
    <ChallengeWrapper>
      <Progress value={givenAnswers.length} max={questions.length}></Progress>
      <QuestionHeading>Question {givenAnswers.length} of {questions.length} </QuestionHeading>
      <QuestionSmallHeading>Entertaimen: Board Games</QuestionSmallHeading>
      <Star/>
      <Questions selectAnswer={selectAnswer} questionNo={questionNo} />
      {
        isVisible && <Incorrect> {isVisible === "correct" ? "Correct Answer" : "InCorrect Answer"}</Incorrect>
      }
      <QuestionProgress marks={marks} />

    </ChallengeWrapper>

  )
}
export default Challenge
const ChallengeWrapper = Styled.div`
width:40%;
margin:20px auto;
padding:40px;
height:70vh;
box-shadow: 0px 0px 11px -7px rgba(0,0,0,1);
border-radius:10px;
`
const QuestionHeading = Styled.h2`
font-weight:normal;
margin:10px 0 5px 0;
`
const QuestionSmallHeading = Styled.p`
color:grey;
font-size:12px;
margin:4px 0 10px 0;
`

const Incorrect = Styled.p`
font-size:20px;
font-weight:bold;
text-align:center;
`
const Progress = Styled.progress`
width:100%;
padding:15px;
`
const ScoreContainer = Styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin-top:40px;
`
const SingleScore = Styled.p`
font-weight:bold;

`