import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import mainimg from "../assets/mainimg.jpg";

export default function App() {
  return (
    <>
      <SafeAreaView className="bg-white h-screen items-center justify-between">
        <Image source={mainimg} className="h-72 w-[450]" resizeMode="contain" />
        <View className="w-[90%]">
          <Text className="text-[45px] text-center font-medium mb-4">
            Let's connect with each other
          </Text>
          <Text className="text-center text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            harum molestias
          </Text>
        </View>
        <TouchableOpacity
          className="w-[90%] bg-green-400 items-center justify-center rounded-lg h-14 mb-4"
          onPress={() => {
            router.push("/signin");
          }}
          activeOpacity={0.7}
        >
          <Text className="text-white">Get Started</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <StatusBar style="light" backgroundColor="black" />
    </>
  );
}
