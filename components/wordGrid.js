import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WordRow from "./wordRow";
import { useSelector } from "react-redux";

const WordGrid = () => {
  const { guesses, guess } = useSelector((state) => state.game);

  const getDisplay = (index) => {
    if (index < guesses.length) {
      return guesses[index];
    }
    if (index === guesses.length) {
      return guess;
    }
    if (index > guesses.length) {
      return null;
    }
  };

  const renderWords = () => {
    const rows = [];
    for (let i = 0; i < 6; i++) {
      rows.push(<WordRow word={getDisplay(i)} />);
    }
    return rows;
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {renderWords()}
    </View>
  );
};

export default WordGrid;

const styles = StyleSheet.create({});
