import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wordHistory: [],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setWord: (state, action) => {
      state.wordHistory.push(action.payload);
    },
    clearState: (state) => {
      state = initialState;
    },
  },
});

export const { setWord } = gameSlice.actions;
export default gameSlice.reducer;
