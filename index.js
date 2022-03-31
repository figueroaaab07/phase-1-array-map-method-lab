const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newTutorials = tutorials.map((tutorial) => {
    const tutorialArray = tutorial.split(" ");
    const tutorialArrayCased = tutorialArray.map((tutorialWord) => {
      return tutorialWord.charAt(0).toUpperCase() + tutorialWord.slice(1);
    })
    return tutorialArrayCased.join(" ");
  })
  return newTutorials;
}
