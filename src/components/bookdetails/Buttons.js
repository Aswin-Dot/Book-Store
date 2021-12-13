import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import { icons, COLORS, SIZES, FONTS } from "../../constants";

const Buttons = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingTop: SIZES.base,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Bookmark */}
        <TouchableOpacity
          onPress={() => console.log("bookmark")}
          style={{
            width: 55,
            height: 45,
            backgroundColor: COLORS.secondary,
            marginVertical: SIZES.base,
            marginRight: SIZES.base,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.bookmark_icon}
            resizeMode="contain"
            style={{
              height: 30,
              width: 30,
              tintColor: COLORS.lightGray2,
            }}
          />
        </TouchableOpacity>

        {/* Start reading */}
        <TouchableOpacity
          onPress={() => console.log("start reading")}
          style={{
            flex: 1,
            height: 45,
            backgroundColor: COLORS.primary,
            marginVertical: SIZES.base,
            marginLeft: SIZES.base,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ ...FONTS.h3, color: COLORS.white }}>
            Start Reading
          </Text>
        </TouchableOpacity>
      </View>
    );
};

export default Buttons;
