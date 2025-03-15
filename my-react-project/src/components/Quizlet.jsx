import questionArray from "../data/questions";
import { useEffect } from "react";

const Quizlet = ({ level, setLevel }) => {
  let currentQuestion;

  //when level is changed, pick a question and render it
  useEffect(() => {
    console.log("level is: ", { level });
    //console.log(questionArray);

    //pick question
    function getRandomQuestion(questionArray) {
      //console.log(questionArray);
      // Generate a random index based on the array's length
      const randomIndex = Math.floor(Math.random() * questionArray.length);
      // Return the element at that index
      currentQuestion = questionArray[randomIndex];
      console.log("current question is: ", currentQuestion);
    }

    getRandomQuestion(questionArray);

    //render question
  }, [level]);

  let handleLevelUp = () => {
    setLevel((prevLevel) => prevLevel + 1);
  };

  return (
    <div>
      <form action="">
        <p id="question">{currentQuestion.question}</p>
        <input type="radio" name="question" id="" />
      </form>

      <button onClick={handleLevelUp}>Level up</button>
    </div>
  );
};

export default Quizlet;
