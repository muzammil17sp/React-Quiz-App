import { useEffect, useState } from "react"
import Styled from "styled-components"
import QuestionProgress from "../components/QuestionProgress"
import Questions from "../components/Questions"
import Star from "../components/Star"
import { questions } from "../data/questions"
const Challenge = () => {
  const [questionNo, setQuestionNo] = useState(1)
  const [givenAnswers, setGivenAnswers] = useState([])
  const [correctAnswer, setCorrectAnswer] = useState(0)
  const [inCorrectAnswer, setInCorrectAnswer] = useState(0)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(100)
  const [marks, setMarks] = useState(0)
  const [isVisible, setIsVisible] = useState("")
  const percentage = Math.round(marks / givenAnswers.length * 100)

  const selectAnswer = (e) => {
    setGivenAnswers([...givenAnswers, true])
    if (e === questions[questionNo].correct_answer) {
      setIsVisible("correct")
      setMarks(marks + 1)
      setCorrectAnswer(correctAnswer + 1)
      let min = (((correctAnswer + 1) / questions.length) * 100)
      // let max = (((correctAnswer + 1 + (questions.length - givenAnswers.length)) / questions.length) * 100)
      setMin(min)
      setMax(max -5)
    } else {
      let min = (((correctAnswer + 1) / questions.length) * 100)
      // let max = (((correctAnswer + 1 + (questions.length - givenAnswers.length)) / questions.length) * 100)
      setMin(min)
      setMax(max -5)
      setIsVisible("incorrect")
      setInCorrectAnswer(inCorrectAnswer + 1)
    }
  }


  const nextQuestion = () => {
    setQuestionNo(questionNo + 1)
    setIsVisible("")
  }

  useEffect(() => {
    if (givenAnswers.length === questions.length - 1) {
      alert(percentage >= 75 ? "YOU WON" : "YOU LOST TRY AGAIN")
      window.location.reload()

    }

  }, [givenAnswers])


  return (
    <ChallengeWrapper>
      <progress value={questionNo} className="question-progress" max={questions.length}></progress>
      <QuestionHeading>Question {questionNo} of {questions.length} </QuestionHeading>
      <QuestionSmallHeading>Entertaimen: Board Games</QuestionSmallHeading>
      <Star />
      <Questions selectAnswer={selectAnswer} isVisible={isVisible} questionNo={questionNo} />
      {
        isVisible && <Incorrect> {isVisible === "correct" ? "Correct" : "Sorry"}</Incorrect>
      }
      {isVisible && <NextQuestion onClick={nextQuestion}>Next Question</NextQuestion>}
      <QuestionProgress percentage={percentage} max={max} />

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

const NextQuestion = Styled.button`
padding:12px 8px ;
background-color:#000;
color:white;
border:1px solid #000;
width:40%;
margin-top:10px;


`