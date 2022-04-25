import { createSlice } from "@reduxjs/toolkit";
import { LETTER_GUESS_TYPE } from "../utils/constants";

const initialState = {
  wordHistory: [],
  guesses: [],
  guess: [],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setWord: (state, action) => {
      state.wordHistory.push(action.payload);
    },
    guessWord: (state) => {
      const array = [];
      const word = state.wordHistory[state.wordHistory.length - 1];

      state.guess.forEach((letter, index) => {
        if (word.includes(letter) && letter === word.charAt(index)) {
          array.push({ letter, type: LETTER_GUESS_TYPE.correct });
        }
        if (word.includes(letter) && letter !== word.charAt(index)) {
          array.push({ letter, type: LETTER_GUESS_TYPE.misplace });
        }
        if (!word.includes(letter)) {
          array.push({ letter, type: LETTER_GUESS_TYPE.wrong });
        }
      });
      state.guesses.push(array);
      state.guess = initialState.guess;
    },
    setLetter: (state, action) => {
      state.guess.length < 5 && state.guess.push(action.payload);
    },
    deleteLetter: (state) => {
      state.guess.splice(-1);
    },
    clearState: (state) => {
      state = initialState;
    },
  },
});

export const { setWord, guessWord, setLetter, deleteLetter } =
  gameSlice.actions;
export default gameSlice.reducer;
