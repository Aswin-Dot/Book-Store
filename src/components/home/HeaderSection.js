import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import { icons, images, theme, COLORS, SIZES, FONTS } from "../../constants";

const HeaderSection = () => {

    const [profile, setprofile] = React.useState({
    name: "Johnny Depp",
    points: 200,
    });

    return (
    // Greetings
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            marginRight: SIZES.padding,
          }}
        >
          <Text style={{ ...FONTS.h3, color: COLORS.white }}>
            Good Morning!
          </Text>
          <Text style={{ ...FONTS.h2, color: COLORS.white }}>
            {profile.name}
          </Text>
        </View>

        {/* Points  */}
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            height: 40,
            paddingLeft: 3,
            paddingRight: SIZES.radius,
            borderRadius: 20,
          }}
          onPress={() => {
            console.log("Point");
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <Image
                source={icons.plus_icon}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </View>

            <Text
              style={{
                marginLeft: SIZES.base,
                color: COLORS.white,
                ...FONTS.body3,
              }}
            >
              {profile.points} point
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
}

export default HeaderSection;