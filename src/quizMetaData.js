import { number, select } from "@inquirer/prompts";

const TRIVIA_CATEGORIES = [
  { value: 9, name: "General Knowledge" },
  { value: 10, name: "Entertainment: Books" },
  { value: 11, name: "Entertainment: Film" },
  { value: 12, name: "Entertainment: Music" },
  { value: 13, name: "Entertainment: Musicals & Theatres" },
  { value: 14, name: "Entertainment: Television" },
  { value: 15, name: "Entertainment: Video Games" },
  { value: 16, name: "Entertainment: Board Games" },
  { value: 17, name: "Science & Nature" },
  { value: 18, name: "Science: Computers" },
  { value: 19, name: "Science: Mathematics" },
  { value: 20, name: "Mythology" },
  { value: 21, name: "Sports" },
  { value: 22, name: "Geography" },
  { value: 23, name: "History" },
  { value: 24, name: "Politics" },
  { value: 25, name: "Art" },
  { value: 26, name: "Celebrities" },
  { value: 27, name: "Animals" },
  { value: 28, name: "Vehicles" },
  { value: 29, name: "Entertainment: Comics" },
  { value: 30, name: "Science: Gadgets" },
  { value: 31, name: "Entertainment: Japanese Anime & Manga" },
  { value: 32, name: "Entertainment: Cartoon & Animations" },
];

export const selectNumberOfQuestions = async () =>
  await number({
    message: "Enter Total Question You Want",
    min: 1,
    max: 50,
    required: true,
  });

export const selectCategory = async () =>
  await select({
    message: "Select a category",
    choices: TRIVIA_CATEGORIES,
  });

export const selectDifficulty = async () =>
  await select({
    message: "Select a difficulty",
    choices: [
      {
        name: "Easy",
        value: "easy",
      },
      {
        name: "Medium",
        value: "medium",
      },
      {
        name: "Hard",
        value: "hard",
      },
    ],
  });

export const selectType = async () =>
  await select({
    message: "Select Type",
    choices: [
      {
        name: "Multiple Choice",
        value: "multiple",
      },
      {
        name: "True/False",
        value: "boolean",
      },
    ],
  });
