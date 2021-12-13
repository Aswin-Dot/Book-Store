import React from "react";
import { Text, View, TouchableOpacity, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { icons, COLORS, SIZES, FONTS } from "../../constants";
import LineDivider from "../shared/LineDivider";

const BookCover = ({ book }) => {

    const navigation = useNavigation();

    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={book.bookCover}
          resizeMode="cover"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />

        {/* color overlay */}
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: book.backgroundColor,
          }}
        ></View>

        {/* Navigation Header */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: SIZES.padding,
            height: 80,
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{ marginLeft: SIZES.base }}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={icons.back_arrow_icon}
              resizeMode="contain"
              style={{
                height: 25,
                width: 25,
                tintColor: book.navTintColor,
              }}
            />
          </TouchableOpacity>

          <View style={{ alignItems: "center" }}>
            <Text style={{ ...FONTS.h3, color: book.navTintColor }}>
              Book Detail
            </Text>
          </View>

          <TouchableOpacity
            style={{ marginLeft: SIZES.base }}
            onPress={() => console.log("more details")}
          >
            <Image
              source={icons.more_icon}
              resizeMode="contain"
              style={{
                height: 25,
                width: 25,
                tintColor: book.navTintColor,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Book cover */}
        <View
          style={{ flex: 5.5, paddingTop: SIZES.padding2, alignItems: "center" }}
        >
          <Image
            source={book.bookCover}
            resizeMode="contain"
            style={{
              flex: 1,
              width: 150,
              height: "auto",
            }}
          />
        </View>

        {/* title and author */}
        <View
          style={{ flex: 1.5, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ ...FONTS.h3, color: COLORS.navTintColor }}>
            {book.bookName}
          </Text>
          <Text style={{ ...FONTS.h4, color: COLORS.navTintColor }}>
            {book.author}
          </Text>
        </View>

        {/* Book info */}
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 20,
            margin: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        >
          {/* rating */}
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>
              {book.rating}
            </Text>
            <Text style={{ ...FONTS.body4, color: COLORS.white }}>Rating</Text>
          </View>

          <LineDivider vertical={8} color={COLORS.lightGray2} />

          {/* No. of Pages */}
          <View
            style={{
              flex: 1,
              paddingHorizontal: SIZES.radius,
              alignItems: "center",
            }}
          >
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>
              {book.pageNo}
            </Text>
            <Text style={{ ...FONTS.body4, color: COLORS.white, textAlign: "center" }}>
              Number of Page
            </Text>
          </View>

          <LineDivider vertical={8} color={COLORS.lightGray2} />

          {/* Language */}
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>
              {book.language}
            </Text>
            <Text style={{ ...FONTS.body4, color: COLORS.white }}>
              Language
            </Text>
          </View>
        </View>
      </View>
    );
};

export default BookCover;