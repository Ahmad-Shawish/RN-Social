import { View, Text, Image, ScrollView, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import cameraIcon from "../../assets/camera.png";
import bellIcon from "../../assets/bell.png";
import Card from "../../components/card";

import data from "../../data.json";

const Home = () => {
  return (
    <SafeAreaView>
      <View className="container h-full">
        <View className="flex flex-row justify-between items-center p-4">
          <Image source={cameraIcon} className="w-7 h-7" resizeMode="contain" />
          <Link href="/notifications">
            <Image source={bellIcon} className="w-7 h-7" resizeMode="contain" />
          </Link>
        </View>

        <View className="w-full border-b border-gray-400 mb-4" />

        {/* <ScrollView className=""> */}
        <FlatList
          className="px-4"
          data={data}
          renderItem={(param) => (
            // console.log(param);
            // <Link
            //   href={{ pathname: "/post/[id]", params: { id: param.item.id } }}
            // >
            <Card
              id={param.item.id}
              name={param.item.name}
              text={param.item.text}
              following={param.item.following}
              date={param.item.date}
            />
            // </Link>
          )}
        />
        {/* </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

export default Home;
