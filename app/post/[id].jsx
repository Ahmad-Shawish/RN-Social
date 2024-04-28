import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import userIcon from "../../assets/emptyuser.png";
import randomImage from "../../assets/randomimage.jpg";
import shareIcon from "../../assets/share.png";
import likeIcon from "../../assets/heart.png";
import backIcon from "../../assets/back.png";
import data from "../../data.json";

const Comment = ({ item }) => {
  return (
    <View className="mb-2 gap-y-2">
      <View className="flex-row items-center gap-x-2">
        <Image source={userIcon} resizeMode="contain" className="w-7 h-7" />
        <View>
          <Text className="font-semibold">{item.user}</Text>
          <Text className="text-gray-500 text-xs">moments ago</Text>
        </View>
      </View>
      <Text className="text-gray-700">{item.text}</Text>
      <View className="w-full border-b border-gray-300 mb-1" />
    </View>
  );
};

const PostID = () => {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView>
      <ScrollView className="p-3 gap-y-2">
        <TouchableOpacity
          className="bg-green-400 rounded p-1 mr-2 w-8"
          onPress={() => {
            router.back();
          }}
        >
          <Image source={backIcon} resizeMode="contain" className="w-6 h-6" />
        </TouchableOpacity>
        <View className="flex-row items-center gap-x-2">
          <Image source={userIcon} resizeMode="contain" className="w-8 h-8" />
          <View>
            <Text className="text-lg font-bold">{data[id - 1].name}</Text>
            <Text className="text-xs text-gray-500">{data[id - 1].date}</Text>
          </View>
        </View>
        <Text className="text-base leading-5">{data[id - 1].text}</Text>
        <Image
          source={randomImage}
          resizeMode="contain"
          className="w-full h-64"
        />
        <View className="flex-row justify-between items-center">
          <View className="flex-row gap-x-2 items-center">
            <Image
              source={shareIcon}
              resizeMode="contain"
              className="w-6 h-6"
            />
            <Text>20</Text>
          </View>
          <View className="flex-row gap-x-2 items-center">
            <Image source={likeIcon} resizeMode="contain" className="w-6 h-6" />
            <Text>50</Text>
          </View>
        </View>

        <View className="w-full border-b border-gray-300 mt-2 mb-2" />

        <View className="flex-row gap-x-2 mb-4">
          <Image source={userIcon} resizeMode="contain" className="w-7 h-7" />
          <TextInput
            placeholder="write a comment.."
            className="w-[88%] border border-gray-400 rounded pl-2"
          />
        </View>

        {data[id - 1].comments.map((item, index) => (
          <Comment key={index} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostID;
