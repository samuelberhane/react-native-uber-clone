import { SafeAreaView, Image, View } from "react-native";
import { HomeTop } from "../components";
import React from "react";
import tw from "twrnc";

const Home = () => {
  return (
    <SafeAreaView style={tw`h-full bg-white`}>
      <View style={{ padding: 15 }}>
        <Image
          style={{ height: 50, width: 50, resizeMode: "contain" }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAibtuIe2BI9kfJQE2nBDrdkgyBSrASSPWw&usqp=CAU",
          }}
        />
      </View>
      <HomeTop />
    </SafeAreaView>
  );
};

export default Home;
