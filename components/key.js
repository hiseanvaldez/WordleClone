import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setLetter, guessWord, deleteLetter } from "../redux/gameSlice";

const Key = ({ value, letterGuessType }) => {
  const dispatch = useDispatch();

  const getColors = () => {
    if (letterGuessType) {
      return {
        backgroundColor: COLORS.green,
      };
    } else {
      return {
        backgroundColor: COLORS.gray,
      };
    }
  };

  return (
    <TouchableOpacity
      style={[
        getColors(),
        {
          width: "8%",
          height: 52,
          margin: 3,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          flex: value.length > 1 ? 1 : null,
          borderBottomLeftRadius: value === "enter" ? 20 : null,
          borderBottomRightRadius: value === "del" ? 20 : null,
        },
      ]}
      onPress={() => {
        dispatch(
          value === "enter"
            ? guessWord()
            : value === "del"
            ? deleteLetter()
            : setLetter(value)
        );
      }}
    >
      {value === "del" ? (
        <Feather name="delete" size={24} color="black" />
      ) : (
        <Text style={{ fontWeight: "600" }}>{value.toUpperCase()}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Key;

const styles = StyleSheet.create({});
