import { createAPiUrl } from "./src/createApiUrl.js";
import {
  selectCategory,
  selectDifficulty,
  selectNumberOfQuestions,
  selectType,
} from "./src/quizMetaData.js";
import { playQuiz } from "./src/playQuiz.js";

const main = async () => {
  const totalQuestion = await selectNumberOfQuestions();
  const category = await selectCategory();
  const difficulty = await selectDifficulty();
  const type = await selectType();
  const apiUrl = createAPiUrl(totalQuestion, category, difficulty, type);
  await playQuiz(apiUrl, totalQuestion);
};

main();