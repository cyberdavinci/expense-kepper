import { StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "@/constants/Colors";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CategoriesDashboard from "./CategoriesDashboard";
import BalanceDashboard from "./BalanceDashboard";
const { height } = Dimensions.get("screen");
const Dashboard = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.dashboard, { paddingTop: insets.top }]}>
      {/* <Text>Dashboard</Text> */}
      <BalanceDashboard />
      <CategoriesDashboard />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  dashboard: {
    backgroundColor: Colors.dark.lighterDark,
    height: height,
    // flex: 1,
  },
});
