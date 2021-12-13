import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import { myBooksData, categoriesData } from "../data";
import { icons, COLORS, SIZES, FONTS } from "../constants";

import { BookCover, BookDescription, Buttons } from "../components/bookdetails";

const BookDetails = ({ route }) => {

  const [book, setBook] = React.useState(null);

  React.useEffect(() => {
    let { book } = route.params;
    setBook(book);
  }, [book])

  if(book) {
    return (
      <View style={styles.container}>
        {/*-------------------- Book Cover -----------------*/}
        <View style={{ flex: 4 }}>
          <BookCover book={book}/>
        </View>

        {/*---------------- Book Description ---------------*/}
        <View style={{ flex: 2 }}>
          <BookDescription book={book}/>
        </View>

        {/* ------------ Buttons ------------------------- */}
        <View style={{ height: 70 }}>
          <Buttons/>
        </View>
      </View>
    );
  } else {
    return <AppLoading/>
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});

export default BookDetails;
