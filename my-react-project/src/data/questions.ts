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
          { text: "Do not touch the cub and walk away ASAP", correctAnswer: true },
        ],
      },
      {
        question: "True or false: You can eat spruce shoots, the light green tips that appear on a spruce’s branches in spring.",
        answerOptions: [
          { text: "True", correctAnswer: true },
          { text: "False", correctAnswer: false },
        ],
      },
      {
        question: "You find a stream in the woods. Which is a clue that the water might be drinkable?",
        answerOptions: [
          { text: "The stream is clear and runs fast over rocks", correctAnswer: true },
          { text: "The stream is stagnant and runs slowly", correctAnswer: false },
          { text: "A strong, metallic taste", correctAnswer: false },
        ],
      },
      {
        question: "Moss only growing on a certain side of trees can mean...",
        answerOptions: [
          { text: "The wind often blows from the other direction", correctAnswer: true },
          { text: "That side of the tree is northward", correctAnswer: true },
          { text: "It's Carlinen-moss, which simply grows like that", correctAnswer: false },
        ],
      },

]

export default questionArray;