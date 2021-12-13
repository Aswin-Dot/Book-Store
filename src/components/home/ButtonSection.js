import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import { icons, COLORS, SIZES, FONTS } from "../../constants";

import LineDivider from "../shared/LineDivider"

const ButtonSection = () => (
  <View
    style={{
      flexDirection: "row",
      height: 70,
      backgroundColor: COLORS.secondary,
      borderRadius: SIZES.radius,
    }}
  >
    {/* claim */}
    <TouchableOpacity style={{ flex: 1 }} onPress={() => console.log("Claim")}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={icons.claim_icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
          }}
        />
        <Text
          style={{
            marginLeft: SIZES.base,
            ...FONTS.body3,
            color: COLORS.white,
          }}
        >
          Claim
        </Text>
      </View>
    </TouchableOpacity>

    <LineDivider vertical={18} color={COLORS.lightGray} />

    {/* get point */}
    <TouchableOpacity style={{ flex: 1 }} onPress={() => console.log("Claim")}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={icons.point_icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
          }}
        />
        <Text
          style={{
            marginLeft: SIZES.base,
            ...FONTS.body3,
            color: COLORS.white,
          }}
        >
          Point
        </Text>
      </View>
    </TouchableOpacity>

    <LineDivider vertical={18} color={COLORS.lightGray} />

    {/* My card */}
    <TouchableOpacity style={{ flex: 1 }} onPress={() => console.log("Claim")}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={icons.card_icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
          }}
        />
        <Text
          style={{
            marginLeft: SIZES.base,
            ...FONTS.body3,
            color: COLORS.white,
          }}
        >
          Card
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default ButtonSection;
