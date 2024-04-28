import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";

import homeIcon from "../../assets/home.png";
import searchIcon from "../../assets/magnifier.png";
import createIcon from "../../assets/writing.png";
import profileIcon from "../../assets/user.png";

const TabIcon = ({ focused, img }) => {
  return (
    <Image source={img} className="w-5 h-5" tintColor={focused && "white"} />
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarInactiveTintColor: "lightgrey",
          tabBarStyle: {
            backgroundColor: "limegreen",
            height: 55,
            paddingBottom: 10,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "black" },
            tabBarIcon: ({ color, focused, size }) => (
              <TabIcon focused={focused} img={homeIcon} />
            ),
            tabBarBadge: 4,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            headerShown: false,
            tabBarLabel: "Search",
            tabBarLabelStyle: { color: "black" },
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} img={searchIcon} />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            headerShown: false,
            tabBarLabel: "Create",
            tabBarLabelStyle: { color: "black" },
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} img={createIcon} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "black" },
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} img={profileIcon} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
