import words from "./index.json";

export const getValue = (key: keyof typeof words.FN) => {
  return words.FN[key];
};
