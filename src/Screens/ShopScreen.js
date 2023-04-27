import React from "react";
import { View } from "react-native";
import { shopstyle } from "../Styles/ShopStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "../Components/Navigation";

const ShopScreen = ({ navigation, route }) => {
  const params = route.params;
  return (
    <View style={shopstyle.container}>
      <SafeAreaView></SafeAreaView>
      <Navigation navigation={navigation} params={params} active="shop" />
    </View>
  );
};

export default ShopScreen;
