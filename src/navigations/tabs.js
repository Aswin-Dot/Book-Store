import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens";
import { icons, COLORS } from "../constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: COLORS.black,
            height: "10%",
            borderTopColor: "transparent",
          },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.dashboard_icon}
                resizeMode="contain"
                style={{
                  tintColor: focused ? COLORS.white : COLORS.gray,
                  width: 25,
                  height: 25,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.search_icon}
                resizeMode="contain"
                style={{
                  tintColor: focused ? COLORS.white : COLORS.gray,
                  width: 25,
                  height: 25,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.notification_icon}
                resizeMode="contain"
                style={{
                  tintColor: focused ? COLORS.white : COLORS.gray,
                  width: 25,
                  height: 25,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.menu_icon}
                resizeMode="contain"
                style={{
                  tintColor: focused ? COLORS.white : COLORS.gray,
                  width: 25,
                  height: 25,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
}

export default Tabs;