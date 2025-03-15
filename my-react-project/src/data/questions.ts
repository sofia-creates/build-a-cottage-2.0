const questionArray = [
    {
        question: "A compass points to the...",
        answerOptions: [
            {text: "South", correctAnswer: false}, 
            {text: "West",  correctAnswer: false}, 
            {text: "North", correctAnswer: true}]
    }, {
        question: "Which mushroom is edible?",
        answerOptions: [
          { text: "Black chanterelle", correctAnswer: true },
          { text: "Fly agaric", correctAnswer: false },
          { text: "False morel", correctAnswer: false },
        ],
      },
      {
        question: "True or false: If you encounter a wild boar, the best course of action is to scream and run towards it.",
        answerOptions: [
          { text: "True", correctAnswer: false },
          { text: "False", correctAnswer: true },
        ],
      },
      {
        question: "What should you do if you encounter a bear cub in the forest, with no parent in sight.",
        answerOptions: [
          { text: "Have a snuggle, and then leave", correctAnswer: false },
          { text: "Cool, free bear cub!!", correctAnswer: false },
          { text: "Do not touch the cub and walk away asap", correctAnswer: true },
        ],
      },
      {
        question: "True or false: You can eat spruce shoots, the light green tips that appear on a spruce’s branches in spring.",
        answerOptions: [
          { text: "True", correctAnswer: true },
          { text: "False", correctAnswer: false },
        ],
      },

]

export default questionArray;