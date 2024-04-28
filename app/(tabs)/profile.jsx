import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import userIcon from "../../assets/emptyuser.png";
import randomImage from "../../assets/randomimage.jpg";
import data from "../../data.json";
import Card from "../../components/card";

const Profile = () => {
  return (
    <SafeAreaView className="p-4">
      <ScrollView className="gap-y-4">
        <View className="flex-row justify-between items-center w-screen">
          <View className="flex-1">
            <Text className="font-bold text-3xl mb-[-7px]">John Doe</Text>
            <Text className="text-lg mb-2">@johndoe</Text>
            <Text className="text-base mb-4 leading-5">Random cool bio</Text>
          </View>
          <Image
            source={userIcon}
            className="w-28 h-28 flex-1"
            resizeMode="contain"
          />
        </View>

        <View className="flex-row items-center justify-around">
          <View className="items-center border border-gray-300 rounded-lg p-2 w-20">
            <Text>100</Text>
            <Text className="text-gray-400">Followers</Text>
          </View>
          <View className="items-center border border-gray-300 rounded-lg p-2 w-20">
            <Text>100</Text>
            <Text className="text-gray-400">Following</Text>
          </View>
          <View className="items-center border border-gray-300 rounded-lg p-2 w-20">
            <Text>10</Text>
            <Text className="text-gray-400">Posts</Text>
          </View>
        </View>

        <TouchableOpacity className="w-full bg-green-400 items-center justify-center rounded-lg p-2">
          <Text className="text-white">Edit Pofile</Text>
        </TouchableOpacity>

        <View className="w-full border-b border-gray-300 mb-4" />

        {data.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            name={"Jone Doe"}
            text={item.text}
            following={null}
            date={item.date}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
