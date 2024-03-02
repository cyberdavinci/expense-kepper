import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Tabs from "./Tabs";
import Colors from "@/constants/Colors";
const CategoriesDashboard = () => {
  return (
    <View style={styles.dashboard}>
      <Tabs />

      <ScrollView></ScrollView>
    </View>
  );
};

export default CategoriesDashboard;

const styles = StyleSheet.create({
  dashboard: {
    height: "55%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: Colors.dark.cardBg,
  },
});
