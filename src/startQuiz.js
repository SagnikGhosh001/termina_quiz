import { select } from "@inquirer/prompts";

const fetchApiData = async (url) => await (await fetch(url)).json();

export const selectAnswer = async (question) => {
  const options = [question.correct_answer, ...question.incorrect_answers]
    .sort(() => Math.random() > 0.5 ? -1 : 1)
    .map((opt) => ({ name: opt, value: opt }));

  return await select({
    message: question.question,
    choices: options,
  });
};

const displayMessage = (isAnswerCorrect, correct_answer, score) => {
  if (isAnswerCorrect) {
    console.log(`✅ Your Answer Is Coorect, Your Score is ${score}`);
    return;
  }

  console.log(`❌ Correct Answer is ${correct_answer}, Your Score is ${score}`);
};

const stats = (score, totalQuestion, startTime, endTime) => {
  const percentage = ((score / totalQuestion) * 100).toFixed(2);
  const timeTaken = ((endTime - startTime) / 1000).toFixed(2);
  return { percentage, timeTaken };
};

const askQuestions = async (questions) => {
  let score = 0;
  for (const question of questions) {
    const givenAnswer = await selectAnswer(question);
    const isAnswerCorrect = givenAnswer === question.correct_answer;
    score += isAnswerCorrect ? 1 : 0;
    displayMessage(isAnswerCorrect, question.correct_answer, score);
    console.log();
  }

  return score;
};

export const playQuiz = async (url, totalQs) => {
  const data = await fetchApiData(url);

  const startTime = Date.now();
  const score = await askQuestions(data.results);
  const endTime = Date.now();

  const { percentage, timeTaken } = stats(score, totalQs, startTime, endTime);

  console.log(`\nYour Final Score is :- ${score}`);
  console.log(`\nYou took total :- ${timeTaken}s`);
  console.log(`\nPercentage Of Correctness :- ${percentage}`);
};
