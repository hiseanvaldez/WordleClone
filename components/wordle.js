import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import WordGrid from "./wordGrid";
import Keyboard from "./keyboard";
import { setWord } from "../redux/gameSlice";
import { WORDS } from "../utils/constants";

const Wordle = () => {
  const wordHistory = useSelector((state) => state.game.wordHistory);
  const dispatch = useDispatch();

  const getRandomWord = () => WORDS[Math.floor(Math.random() * WORDS.length)];

  useEffect(() => {
    dispatch(setWord(getRandomWord()));
  }, []);

  console.log(wordHistory);

  return (
    <View>
      <View style={{ backgroundColor: "red" }}>
        <WordGrid />
      </View>
      <Keyboard />
    </View>
  );
};

export default Wordle;

const styles = StyleSheet.create({});
