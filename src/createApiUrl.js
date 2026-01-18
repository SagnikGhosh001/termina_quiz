export const createAPiUrl = (totalQuestion, category, difficulty, type) =>
  `https://opentdb.com/api.php?amount=${totalQuestion}&category=${category}&difficulty=${difficulty}&type=${type}`;
