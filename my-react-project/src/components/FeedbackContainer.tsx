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

    // let feedback = "";
    // let getFeedback = (rightOrWrong: true | false | null)=> {
    //     if (rightOrWrong) {
    //         feedback = "Correct! Well done";
    //         console.log(feedback)
    //     } else if (!rightOrWrong) {
    //         feedback = "Sorry, wrong answer!"
    //     }
    // }
    // useEffect(()=> {
    //   getFeedback(rightOrWrong)

    // }, [rightOrWrong])

  return (
    <div><p>{feedback}</p></div>
  )
}

export default FeedbackContainer