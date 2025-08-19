import questionArray from "../data/questions";
import { useEffect , useState } from "react";
import { Question } from "../interfaces/question";
import { QuizletProps } from "../interfaces/quizletProps";
import FeedbackContainer from "./FeedbackContainer";


const Quizlet = ({ level, setLevel }: QuizletProps) => {
  let defaultQuestion = {question: "Are you ready to start?", answerOptions: [
    {text: "Yes!", correctAnswer: true},
    {text: "Hell yes!", correctAnswer: true}
  ]}

  let [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  let  [currentQuestion, setCurrentQuestion] = useState<Question>(defaultQuestion);
  
  //pick question
  function getRandomQuestion(questionArray: Question[]) {
    // Generate a random index based on the array's length
    const randomIndex = Math.floor(Math.random() * questionArray.length);
    // Return the element at that index
    currentQuestion = questionArray[randomIndex];
    console.log("current question is: ", currentQuestion);
    return currentQuestion;
  }

  //when level is changed, pick a question and render it
  useEffect(() => {
    //console.log("level is: ", { level });
    setCurrentQuestion(getRandomQuestion(questionArray));
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
      setIsAnswerCorrect(true);

      handleLevelUp();

    } else {
      setIsAnswerCorrect(false);
      handleTheIdiotFailed();
    }

  }


  return (
    <div>

      {level === 7 ? (
      <div>
        <h2>🎉 Congratulations, you won! 🎉</h2>
      </div>
    ) : ( 
      <>
        <div id="formContainer">
        <p id="question">{currentQuestion.question}</p>
          {currentQuestion.answerOptions.map((option, index) => (
            <div key={index}>
              <label htmlFor={`answer${index}`}>{option.text}</label>
              <input 
                type="radio" 
                name="question" 
                id={`answer${index}`} 
                checked={selectedAnswer === option.correctAnswer}
                onChange={() => setSelectedAnswer(option.correctAnswer)} 
              />
            </div>
          ))}
          <button onClick={submitAnswer}>Submit answer</button>
        </div>
        <FeedbackContainer rightOrWrong = {isAnswerCorrect} />
      </>
    )}
    </div>
  );
};

export default Quizlet;
