import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import googleIcon from "../../assets/google.png";

const SignIn = () => {
  const [focused1, setFocused1] = useState(false);

  const handleFocus1 = () => {
    setFocused1((prev) => !prev);
    focused2 && setFocused2(false);
  };
  const [focused2, setFocused2] = useState(false);

  const handleFocus2 = () => {
    setFocused2((prev) => !prev);
    focused1 && setFocused1(false);
  };

  return (
    <>
      <SafeAreaView className="h-full items-center justify-center px-4 text-center gap-y-12">
        <View className="w-full">
          <Text className="text-4xl font-semibold text-center">
            Hello Again!
          </Text>
          <Text className="text-gray-500 text-center">
            Sign in to your account
          </Text>
        </View>

        <View className="w-full gap-y-3">
          <TextInput
            className={`w-full h-14 pl-3 border border-solid rounded-md ${
              focused1 && "border-green-400"
            }`}
            placeholder="Email address"
            inputMode="email"
            keyboardType="email-address"
            onFocus={handleFocus1}
          />
          <TextInput
            className={`w-full h-14 pl-3 border border-solid rounded-md ${
              focused2 && "border-green-400"
            }`}
            placeholder="Enter your password"
            secureTextEntry={true}
            onFocus={handleFocus2}
          />
          <Text className="underline text-green-400 self-start">
            Forgot your password?
          </Text>
        </View>

        <View className="w-full gap-y-3 items-center">
          <TouchableOpacity
            className="w-full bg-green-500 items-center justify-center rounded-lg h-14"
            onPress={() => {
              router.push("/home");
            }}
            activeOpacity={0.7}
          >
            <Text className="text-white">Sign in</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: "grey",
                height: 1,
                flex: 1,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                paddingHorizontal: 5,
                color: "grey",
              }}
            >
              Or with
            </Text>
            <View
              style={{
                backgroundColor: "grey",
                height: 1,
                flex: 1,
                alignSelf: "center",
              }}
            />
          </View>

          <TouchableOpacity
            className="w-full bg-gray-200 items-center justify-center rounded-lg h-14 mb-4 flex-row"
            onPress={() => {
              router.push("/home");
            }}
            activeOpacity={0.7}
          >
            <Image source={googleIcon} className="h-4 w-4 mr-2" />
            <Text className="text-black">Sign in with Google</Text>
          </TouchableOpacity>

          <Text className="text-center">
            Dont have an accout? Let's{" "}
            <Link href="/register" className="underline text-green-400">
              Sign up
            </Link>
          </Text>
        </View>
      </SafeAreaView>
      <StatusBar style="light" backgroundColor="black" />
    </>
  );
};

export default SignIn;
