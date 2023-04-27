import React from "react";
import { View, Text, Image } from "react-native";
import Navigation from "../Components/Navigation";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { mainstyle } from "../Styles/MainStyles";

const MainScreen = ({ navigation, route }) => {
  const params = route.params;
  const [password, setPassword] = React.useState("");

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@token");
      setPassword(value);
      if (value !== "password") {
        navigation.navigate("Auth");
      }
    } catch (e) {
      // error reading value
    }
  };

  getData();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <SafeAreaView style={mainstyle.container}>
        <Text
          style={{
            fontFamily: "Trebuchet MS",
            color: "blue",
            fontSize: 70,
            fontWeight: 600,
          }}
        >
          Hi! 👋
        </Text>
        <Text
          style={{
            fontFamily: "Trebuchet MS",
            color: "gray",
            fontSize: 50,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          It's my first React Native app, take a look!
        </Text>
      </SafeAreaView>
      <Navigation navigation={navigation} params={params} active="main" />
    </View>
  );
};

export default MainScreen;
