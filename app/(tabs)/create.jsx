import {
  View,
  Text,
  Switch,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Create = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((prev) => !prev);
  };
  return (
    <SafeAreaView>
      <View className="items-center h-full gap-y-5">
        <Text className="text-2xl font-medium pt-10">New Post</Text>
        <TextInput
          placeholder="Say something..."
          multiline={true}
          textAlignVertical="top"
          className="w-[90%] p-2 h-20 border border-gray-400"
        />
        <TouchableOpacity>
          <View className="w-44 h-10 bg-green-200 justify-center rounded-3xl">
            <Text className="text-center">Add an image..</Text>
          </View>
        </TouchableOpacity>

        <View className="flex-row items-center justify-between">
          <Text>Enable comments?</Text>
          <Switch
            value={isEnabled}
            onValueChange={toggleSwitch}
            trackColor={{ false: "lightgrey", true: "limegreen" }}
            thumbColor={isEnabled ? "lime" : "grey"}
            style={{
              ...(Platform.OS === "android" && {
                backgroundColor: "transparent",
                borderWidth: 1,
                borderColor: "#ccc",
              }),
            }}
          />
        </View>

        <TouchableOpacity>
          <View className="w-44 h-10 bg-green-400 justify-center rounded-3xl">
            <Text className="text-center">Share</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Create;
