const QuestionProgress = ({ percentage, max, min }) => {
    return (<>
        <div className="progress-bar-container">
            <div className="progress-bar-titles">
                <p>Score {parseInt(percentage)}%</p>
                <p>Max Score {parseInt(max)}%</p>
            </div>
            <div className="progress-bar">
                <div className="filler"
                    style={{
                        background: `
                linear-gradient(
                    to right, 
                    #000 ${min}%, 
                    #717171 ${min}%, 
                    #717171 ${percentage}%,
                    #D2D2D2 ${percentage}%,
                    #D2D2D2 ${max}% ,
                    #FFFFFF 0)`
                    }} />
            </div>
        </div>
    </>)
}
export default QuestionProgress


