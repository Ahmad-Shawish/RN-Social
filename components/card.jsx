import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import emptyUser from "../assets/emptyuser.png";
import randomImage from "../assets/randomimage.jpg";
import shareIcon from "../assets/share.png";
import likeIcon from "../assets/heart.png";
import commentIcon from "../assets/comment.png";
import { Link, router } from "expo-router";

const Card = ({ id, name, text, following, date }) => {
  return (
    // <Link href={{ pathname: "/post/[id]", params: { id: id } }}>
    <TouchableOpacity onPress={() => router.navigate(`/post/${id}`)}>
      <View className="gap-y-3">
        <View className="flex-row justify-between">
          <View className="flex-row gap-x-2">
            <Image
              source={emptyUser}
              resizeMode="contain"
              className="w-10 h-10"
            />
            <View>
              <Text>{name}</Text>
              <Text>{date}</Text>
            </View>
          </View>
          {following != null && (
            <View
              className={`my-1 rounded-3xl border items-center justify-center w-24 ${
                following ? "bg-green-400" : "bg-white"
              }`}
            >
              {following ? (
                <Text className="text-xs">Following</Text>
              ) : (
                <Text className="text-xs">Follow</Text>
              )}
            </View>
          )}
        </View>

        <Image
          source={randomImage}
          resizeMode="contain"
          className="w-full h-60"
        />

        <Text className="mb-4">{text.substr(0, 100)}..</Text>

        <View className="flex-row justify-between">
          <View className="flex-row gap-x-1 items-center">
            <Image
              source={shareIcon}
              resizeMode="contain"
              className="w-4 h-4"
            />
            <Text>14</Text>
          </View>

          <View className="flex-row gap-x-3 items-center">
            <View className="flex-row gap-x-1 items-center">
              <Image
                source={likeIcon}
                resizeMode="contain"
                className="w-4 h-4"
              />
              <Text>42</Text>
            </View>
            <View className="flex-row gap-x-1 items-center">
              <Image
                source={commentIcon}
                resizeMode="contain"
                className="w-4 h-4"
              />
              <Text>5</Text>
            </View>
          </View>
        </View>

        <View className="w-full border-b border-gray-400 mb-4" />
      </View>
    </TouchableOpacity>
    // </Link>
  );
};

export default Card;
