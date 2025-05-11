const FeedbackContainer = (rightOrWrong) => {
    let feedback = "";
    let getFeedback = ()=> {
        if (rightOrWrong == "rightAnswer") {
            feedback = "Correct! Well done";
        } else if (rightOrWrong == "wrongAnswer") {
            feedback = "Sorry, wrong answer!"
        }
    }

  return (
    <div><p>{feedback}</p></div>
  )
}

export default FeedbackContainer