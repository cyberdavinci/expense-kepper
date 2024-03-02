import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "@/components/Themed";
import Dashboard from "@/components/Dashboard";
import CategoriesDashboard from "@/components/CategoriesDashboard";
import React from "react";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const MainScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
      {/* <Text>MainScreen</Text> */}
      <Dashboard />
      {/* <CategoriesDashboard /> */}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
