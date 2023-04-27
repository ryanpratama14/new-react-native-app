import React from "react";
import {
  Alert,
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { authstyles } from "../Styles/AuthStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";

export default function AuthScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async () => {
    if (email === "example@example.com" && password === "example") {
      try {
        await AsyncStorage.setItem("@token", password);
        navigation.navigate("Main");
      } catch (e) {
        console.log(e);
      }
    } else {
      Alert.alert("Incorrect email or password");
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@token");
      if (value !== null) {
        navigation.navigate("Main");
      }
    } catch (e) {}
  };

  getData();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
          }}
        >
          <Text
            style={{ fontFamily: "Trebuchet MS", fontSize: 40, color: "blue" }}
          >
            Welcome!
          </Text>
          <TextInput
            value={email.toLowerCase()}
            placeholder="example@example.com"
            onChangeText={setEmail}
            style={authstyles.input}
          />
          <TextInput
            placeholder="*******"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            style={authstyles.input}
          />
          <TouchableOpacity onPress={handleSubmit} style={{ width: "50%" }}>
            <View
              style={{
                paddingVertical: 8,
                paddingHorizontal: 12,
                backgroundColor: "#22c55e",
                borderRadius: 8,
              }}
            >
              <Text
                style={{ fontSize: 24, textAlign: "center", fontWeight: 600 }}
              >
                Login
              </Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </View>
  );
}
