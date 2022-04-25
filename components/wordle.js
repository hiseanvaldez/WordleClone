import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import WordGrid from "./wordGrid";
import Keyboard from "./keyboard";
import { setWord } from "../redux/gameSlice";
import { WORDS } from "../utils/constants";

const Wordle = () => {
  const { guess, guesses, wordHistory } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const getRandomWord = () => WORDS[Math.floor(Math.random() * WORDS.length)];

  useEffect(() => {
    dispatch(setWord(getRandomWord()));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
        }}
      >
        <WordGrid />
      </View>
      <Keyboard />
    </View>
  );
};

export default Wordle;

const styles = StyleSheet.create({});
