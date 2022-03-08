import Styled from "styled-components"
import { questions } from "../data/questions"
import { removeUnNecessaryCharacter } from "../helper/charcter"

const Questions = ({ selectAnswer, questionNo, isVisible }) => {

  return (
    <div>
      <Question>{removeUnNecessaryCharacter(questions[questionNo].question)}</Question>
      <AnswersContainer>
        {questions[questionNo].incorrect_answers.map((answer) => (
          <Answer disabled={isVisible} className="answer" key={answer} onClick={() => selectAnswer(answer)}>{removeUnNecessaryCharacter(answer)}</Answer>
        ))}
        <Answer disabled={isVisible} className="answer" onClick={() => selectAnswer(questions[questionNo].correct_answer)}>{removeUnNecessaryCharacter(questions[questionNo].correct_answer)}</Answer>

      </AnswersContainer>
    </div>
  )
}
export default Questions


const Question = Styled.h5`
overflow-wrap:break-word;
font-size:18px;
font-weight:normal;
`
const AnswersContainer = Styled.div`
 display:flex;
 flex-wrap:wrap;
 align-items:center;
`
const Answer = Styled.button`
width:45%;
margin:10px;
padding:6px;
user-select:none;
overflow:hidden;
font-size:16px;
outline:none;
border:1px solid grey;
/* display:inline-block; */

`