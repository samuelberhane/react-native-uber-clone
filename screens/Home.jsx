import { SafeAreaView, Image, TouchableOpacity } from "react-native";
import { HomeTop } from "../components";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`h-full bg-white`}>
      <TouchableOpacity
        style={{ padding: 15 }}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={{ height: 50, width: 50, resizeMode: "contain" }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAibtuIe2BI9kfJQE2nBDrdkgyBSrASSPWw&usqp=CAU",
          }}
        />
      </TouchableOpacity>
      <HomeTop />
    </SafeAreaView>
  );
};

export default Home;
