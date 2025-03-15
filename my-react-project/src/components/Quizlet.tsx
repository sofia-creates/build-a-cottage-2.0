// import React from "react";
import questionArray from "../data/questions";
import { useEffect , useState } from "react";
import { Question } from "../interfaces/question";
import { QuizletProps } from "../interfaces/quizletProps";


const Quizlet = ({ level, setLevel }: QuizletProps) => {
  let [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);

  let defaultQuestion = {question: "Are you ready to start?", answerOptions: [
    {text: "Yes!", correctAnswer: true},
    {text: "Hell yes!", correctAnswer: true}
  ]}
  let currentQuestion = defaultQuestion;

  //when level is changed, pick a question and render it
  useEffect(() => {
    console.log("level is: ", { level });
    //console.log(questionArray);

    //pick question
    function getRandomQuestion(questionArray: Question[]) {
      // console.log(questionArray);
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

  let submitAnswer = () => {
    //check selectedAnswer state

    if (selectedAnswer = true) {

    }

    //if selectedAnswer = false then run handlelevelup
  }


  return (
    <div>
      {/* <form action="">
        <p id="question">{currentQuestion.question}</p>
        <label htmlFor="">{currentQuestion.answerOptions[1].text}</label>
        <input type="radio" name="question" id="" />
        </form> */}

      <div>
        {currentQuestion.answerOptions.map((option, index) => (
          <div key={index}>
            <label htmlFor={`answer${index}`}>{option.text}</label>
            <input type="radio" name="question" id={`answer${index}`} onChange={() => setSelectedAnswer(option.correctAnswer)} 
            />
          </div>
        ))}
        <button onClick={submitAnswer}>Submit answer</button>
      </div>

      <button onClick={handleLevelUp}>Level up</button>
    </div>
  );
};

export default Quizlet;
