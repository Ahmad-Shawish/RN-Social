import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import searchIcon from "../../assets/magnifier.png";

const Search = () => {
  return (
    <SafeAreaView className="p-4 gap-y-2">
      <View className="flex-row border rounded-lg justify-between items-center">
        <TextInput placeholder="Search for.." className="pl-4 h-8" />
        <Image
          source={searchIcon}
          resizeMode="contain"
          className="w-4 h-4 mr-3"
        />
      </View>
      <ScrollView horizontal className=" gap-x-1">
        <TouchableOpacity>
          <Text className="bg-gray-200 px-4 py-2 rounded-full">Accounts</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="bg-gray-200 px-4 py-2 rounded-full">Places</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="bg-gray-200 px-4 py-2 rounded-full">Hashtags</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
