import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Tabs = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Expense</Text>
      <Text style={styles.title}>Income</Text>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    gap: 25,
    paddingVertical: 20,
    paddingTop: 40,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
  },
});
