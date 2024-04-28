import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import backIcon from "../assets/back.png";
import userIcon from "../assets/emptyuser.png";
import { router } from "expo-router";

const data = [
  { id: 1, name: "name1", noti: "shared your post", date: "a moment ago" },
  { id: 2, name: "name2", noti: "liked your post", date: "25 mins ago" },
  { id: 3, name: "name3", noti: "liked your post", date: "30 mins ago" },
  { id: 4, name: "name4", noti: "commented on your post", date: "53 mins ago" },
  { id: 5, name: "name5", noti: "commented on your post", date: "2 hours ago" },
];

const renderNoti = ({ item }) => {
  return (
    <View
      className="flex-row bg-white w-[350px] items-center mb-4 px-4 py-2 rounded-lg"
      style={{ borderRadius: 50 }}
    >
      <Image source={userIcon} resizeMode="contain" className="w-9 h-9 mr-3" />
      <View>
        <View className="flex-row gap-x-2 items-center">
          <Text className="text-lg">{item.name}</Text>
          <Text className="text-base text-gray-400">{item.noti}</Text>
        </View>
        <Text className="text-sm text-gray-400">{item.date}</Text>
      </View>
    </View>
  );
};

const Notifications = () => {
  return (
    <SafeAreaView>
      <View className="flex-row items-center pl-4">
        <TouchableOpacity
          className="bg-green-400 rounded p-1"
          onPress={() => {
            router.back();
          }}
        >
          <Image source={backIcon} resizeMode="contain" className="w-6 h-6" />
        </TouchableOpacity>
        <Text className="p-4 text-xl">Notifications</Text>
      </View>
      <View className="w-full border-b border-gray-300 mb-4" />
      <View className="items-center w-[390px]">
        <FlatList data={data} renderItem={renderNoti} />
      </View>
    </SafeAreaView>
  );
};

export default Notifications;
