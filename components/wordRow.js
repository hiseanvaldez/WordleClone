import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LetterBox from "./letterBox";
import { useSelector } from "react-redux";

const WordRow = ({ word }) => {
  const renderLetters = () => {
    const letters = [];
    for (let i = 0; i < 5; i++) {
      letters.push(<LetterBox letter={Array.isArray(word) ? word[i] : word} />);
    }
    return letters;
  };

  return <View style={{ flexDirection: "row" }}>{renderLetters()}</View>;
};

export default WordRow;

const styles = StyleSheet.create({});
