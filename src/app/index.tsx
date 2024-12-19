import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./../../global.css"

import { images } from "../constants";

const Welcome = () => {

  return (
    <SafeAreaView className="h-full flex-1">
      <Redirect href="/sign-in" />
    </SafeAreaView>
  );
};

export default Welcome;
