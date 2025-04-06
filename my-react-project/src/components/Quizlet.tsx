// import React from "react";
import questionArray from "../data/questions";
import { useEffect , useState } from "react";
import { Question } from "../interfaces/question";
import { QuizletProps } from "../interfaces/quizletProps";


const Quizlet = ({ level, setLevel }: QuizletProps) => {
  let defaultQuestion = {question: "Are you ready to start?", answerOptions: [
    {text: "Yes!", correctAnswer: true},
    {text: "Hell yes!", correctAnswer: true}
  ]}

  let [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  let  [currentQuestion, setCurrentQuestion] = useState<Question>(defaultQuestion);
  
  //pick question
  function getRandomQuestion(questionArray: Question[]) {
    // console.log(questionArray);
    // Generate a random index based on the array's length
    const randomIndex = Math.floor(Math.random() * questionArray.length);
    // Return the element at that index
    currentQuestion = questionArray[randomIndex];
    console.log("current question is: ", currentQuestion);
    return currentQuestion;
  }

  //when level is changed, pick a question and render it
  useEffect(() => {
    console.log("level is: ", { level });
    //console.log(questionArray);

    setCurrentQuestion(getRandomQuestion(questionArray));
    
    //render the new question


  }, [level]);

  //if player gets the question right
  let handleLevelUp = () => {
    setLevel((prevLevel) => prevLevel + 1);
  };

  //if player gets question wrong
  let handleTheIdiotFailed = () => {
    setCurrentQuestion(getRandomQuestion(questionArray));
  }

  let submitAnswer = () => {
    //check selectedAnswer state
    console.log(`selectedAnswer is: ${selectedAnswer}`)

    if (selectedAnswer == true) {
      handleLevelUp();
      //make it so that no radiobutton is selected automatically
    } else {
      alert("wrong answer you idiot")
      handleTheIdiotFailed();
    }

    //OBS PROBLEM HÄR
    //om man inte har gjort ett aktivt val och klickar på submit på det förinställda valet så går man vidare till nästa nivå oavsett om det var rätt. det pga selectedANswer har inte ändrats!! sätt så att ingen radioknapp är autovald.
  }


  return (
    <div>
      {/* <form action="">
        <p id="question">{currentQuestion.question}</p>
        <label htmlFor="">{currentQuestion.answerOptions[1].text}</label>
        <input type="radio" name="question" id="" />
        </form> */}

      <div id="formContainer">
      <p id="question">{currentQuestion.question}</p>
        {currentQuestion.answerOptions.map((option, index) => (
          <div key={index}>
            <label htmlFor={`answer${index}`}>{option.text}</label>
            <input type="radio" name="question" id={`answer${index}`} onChange={() => setSelectedAnswer(option.correctAnswer)} 
            />
          </div>
        ))}
        <button onClick={submitAnswer}>Submit answer</button>
      </div>
    </div>
  );
};

export default Quizlet;
