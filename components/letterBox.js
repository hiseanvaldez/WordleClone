import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, LETTER_GUESS_TYPE } from "../utils/constants";

const LetterBox = ({ letter }) => {
  const getColors = () => {
    if (!letter) {
      return;
    }

    if (typeof letter === "string") {
      return {
        backgroundColor: COLORS.white,
        borderColor: COLORS.black,
      };
    }

    switch (letter.type) {
      case LETTER_GUESS_TYPE.correct:
        return {
          backgroundColor: COLORS.green,
          borderColor: COLORS.green,
        };
        break;
      case LETTER_GUESS_TYPE.misplace:
        return {
          backgroundColor: COLORS.yellow,
          borderColor: COLORS.yellow,
        };
        break;
      case LETTER_GUESS_TYPE.wrong:
        return {
          backgroundColor: COLORS.darkGray,
          borderColor: COLORS.darkGray,
        };
        break;
    }
  };

  const getValue = () => {
    if (!letter) {
      return "";
    }
    if (typeof letter === "object") {
      return letter.letter.toUpperCase();
    }
    return letter.toUpperCase();
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
      <Text style={{ fontSize: 36, fontWeight: "600" }}>{getValue()}</Text>
    </View>
  );
};

export default LetterBox;

const styles = StyleSheet.create({});
