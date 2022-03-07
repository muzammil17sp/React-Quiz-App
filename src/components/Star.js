import Styled from "styled-components"
const Star = () =>{
  return(
<StarContainer>
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
        <span>★</span>
        <span>★</span>
      </StarContainer>
  )
}

export default Star
const StarContainer = Styled.div`
display:flex;
align-items:center;
`