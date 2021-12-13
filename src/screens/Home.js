import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, SIZES } from "../constants";
import { HeaderSection, ButtonSection, BooksSection } from "../components/home";

const Home = () => {

  return (
    <SafeAreaView style={styles.container}>
      {/*---------------- Header ------------------------*/}
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          paddingTop: 7,
        }}
      >
        <HeaderSection />
      </View>

      {/* ---------------- Buttons ---------------------*/}
      <View style={{ justifyContent: "center", padding: SIZES.padding }}>
        <ButtonSection />
      </View>

      {/* ---------------- Books ---------------------- */}
      <ScrollView
        style={{ marginTop: SIZES.base }}
        nestedScrollEnabled={true}
      >
        <BooksSection />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black
  }
});

export default Home;
