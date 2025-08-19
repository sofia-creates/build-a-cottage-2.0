import { useEffect, useState } from "react";

type FeedbackContainerProps = {
  rightOrWrong: boolean | null;
};

const FeedbackContainer = ({ rightOrWrong }: FeedbackContainerProps) => {

   const [feedback, setFeedback] = useState<string>("");

  useEffect(() => {
    if (rightOrWrong === true) {
      setFeedback("Correct! Well done");
    } else if (rightOrWrong === false) {
      setFeedback("Sorry, wrong answer!");
    } else {
      setFeedback(""); 
    }
  }, [rightOrWrong]);


  return (
    <div><p><i>{feedback}</i></p></div>
  )
}

export default FeedbackContainer