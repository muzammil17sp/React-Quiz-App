import Styled from "styled-components"
const Star = ({ gameLevel }) => {
  let remaingnngStars = 0
  if (gameLevel == 3) {
    remaingnngStars = 2
  } else if (gameLevel == 2) {
    remaingnngStars = 3
  } else if (gameLevel == 1) {
    remaingnngStars = 4
  }
  return (
    <StarContainer>
      {Array(gameLevel).fill().map((_, i) => <span key={i}>⭐</span>)}
      {Array(remaingnngStars).fill().map((_, i) => <span key={i}>★</span>)}
    </StarContainer>
  )
}

export default Star
const StarContainer = Styled.div`
display:flex;
align-items:center;
`