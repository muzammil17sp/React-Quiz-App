import Styled from "styled-components"
import { questions } from "../data/questions"
const QuestionProgress = ({percentage,max }) => {

  return (<div>
    <ScoreContainer>
      <SingleScore>Score: {percentage || 0} %</SingleScore>
      <SingleScore>Max score {max}%</SingleScore>
    </ScoreContainer>
   
    <progress className="answer-progress question-progress" value={percentage} max={100}></progress>
  </div>)
}
export default QuestionProgress
const ScoreContainer = Styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin-top:10px;
`
const SingleScore = Styled.p`
font-weight:bold;
`

