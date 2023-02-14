import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { homeData } from "../homeData";
import tw from "twrnc";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const HomeTop = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`py-2 text-center flex flex-row justify-center`}>
      {homeData?.map((data) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Map")}
          style={tw`bg-white hover:bg-gray-50 hover:shadow-lg shadow-md mx-4 py-2`}
          key={data.key}
        >
          <Image
            style={{
              width: 120,
              height: 100,
              resizeMode: "contain",
              paddingVertical: 10,
            }}
            source={{
              uri: data.image,
            }}
          />
          <Text style={tw`font-bold`}>{data.name}</Text>
          <View style={tw`flex justify-center flex-row mt-2`}>
            <Icon
              style={tw`bg-blue-500 w-[30px] text-sm py-[0.1rem] rounded`}
              name="arrowright"
              color="white"
              type="antdesign"
              size={17}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default HomeTop;
