import { SafeAreaView, Image, View } from "react-native";
import React from "react";
import tw from "twrnc";

const Home = () => {
  return (
    <SafeAreaView style={tw`h-full bg-white`}>
      <View style={{ padding: 4 }}>
        <Image
          style={{ height: 70, width: 70, resizeMode: "contain" }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAibtuIe2BI9kfJQE2nBDrdkgyBSrASSPWw&usqp=CAU",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
