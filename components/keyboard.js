import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Key from "./key";
import { useSelector } from "react-redux";

const row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const row3 = ["z", "x", "c", "v", "b", "n", "m"];

const Keyboard = () => {
  const wordHistory = useSelector((state) => state.game.wordHistory);

  return (
    <View style={{ marginBottom: 24 }}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {row1.map((value) => (
          <Key value={value} key={value} />
        ))}
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {row2.map((value) => (
          <Key value={value} key={value} />
        ))}
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Key value="enter" />
        {row3.map((value) => (
          <Key value={value} key={value} />
        ))}
        <Key value="del" />
      </View>
    </View>
  );
};

export default Keyboard;

const styles = StyleSheet.create({});
