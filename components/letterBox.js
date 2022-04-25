import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, LETTER_GUESS_TYPE } from "../utils/constants";

const LetterBox = ({ letter, letterGuessType }) => {
  const getColors = () => {
    if (!letterGuessType) {
      return {
        backgroundColor: COLORS.green,
        borderColor: "transparent",
      };
    } else {
      return {
        backgroundColor: COLORS.white,
        borderColor: COLORS.black,
      };
    }
  };

  return (
    <View
      style={[
        getColors(),
        {
          borderWidth: 3,
          borderRadius: 5,
          margin: 4,
          padding: 10,
          width: "15%",
          alignItems: "center",
        },
      ]}
    >
      <Text style={{ fontSize: 36, fontWeight: "600" }}>A</Text>
    </View>
  );
};

export default LetterBox;

const styles = StyleSheet.create({});
