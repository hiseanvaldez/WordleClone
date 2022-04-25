import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WordRow from "./wordRow";

const WordGrid = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <WordRow />
      <WordRow />
      <WordRow />
      <WordRow />
      <WordRow />
      <WordRow />
    </View>
  );
};

export default WordGrid;

const styles = StyleSheet.create({});
