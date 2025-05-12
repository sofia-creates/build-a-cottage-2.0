import { useEffect } from "react";


const FeedbackContainer = (isAnswerCorrect: true | false | null) => {
    let feedback = "";
    let getFeedback = (isAnswerCorrect: true | false | null)=> {
        if (isAnswerCorrect) {
            feedback = "Correct! Well done";
        } else if (!isAnswerCorrect) {
            feedback = "Sorry, wrong answer!"
        }
    }
    useEffect(()=> {
      getFeedback(isAnswerCorrect)

    }, [isAnswerCorrect])

  return (
    <div><p>{feedback}</p></div>
  )
}

export default FeedbackContainer