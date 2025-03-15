export interface AnswerOption {
    text: string;
    correctAnswer: boolean; // true for the correct answer, false for incorrect
  }
  
  export interface Question {
    question: string;
    answerOptions: AnswerOption[]; // Array of AnswerOption objects
  }