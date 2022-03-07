import Styled from "styled-components"
const QuestionProgress = ({marks}) => {
  return (<>
    <ScoreContainer>
      <SingleScore>Score: {marks} %</SingleScore>
      <SingleScore>Max score 75%</SingleScore>
    </ScoreContainer>
    <Progress className="question-progress" value={marks} max={100}></Progress>
  </>)
}
export default QuestionProgress
const ScoreContainer = Styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin-top:40px;
`
const SingleScore = Styled.p`
font-weight:bold;

`
const Progress = Styled.progress`
width:100%;
padding:15px;
`
