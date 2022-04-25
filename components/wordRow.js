import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LetterBox from "./letterBox";

const WordRow = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <LetterBox />
      <LetterBox />
      <LetterBox />
      <LetterBox />
      <LetterBox />
    </View>
  );
};

export default WordRow;

const styles = StyleSheet.create({});
