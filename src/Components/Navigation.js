import React from "react";
import { navstyle } from "../Styles/NavigationStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";
import {
  expense,
  expenseActive,
  home,
  homeActive,
  logoutActive,
  todo,
  todoActive,
} from "../Icons/Navigation";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Navigation = (props) => {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("@token");
      props.navigation.navigate("Auth");
    } catch (e) {
      // error reading value
    }
  };
  return (
    <View style={navstyle.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("Main", props.params);
        }}
        style={props.active == "main" ? navstyle.buttonActive : navstyle.button}
      >
        <SvgXml
          xml={props.active == "main" ? homeActive : home}
          style={navstyle.icon}
        />

        <Text
          style={props.active == "main" ? navstyle.textActive : navstyle.text}
        >
          Welcome!
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("Expense", props.params);
        }}
        style={
          props.active == "expense" ? navstyle.buttonActive : navstyle.button
        }
      >
        <SvgXml
          xml={props.active == "expense" ? expenseActive : expense}
          style={navstyle.icon}
        />
        <Text
          style={
            props.active == "expense" ? navstyle.textActive : navstyle.text
          }
        >
          Expense
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("Todo", props.params);
        }}
        style={props.active == "todo" ? navstyle.buttonActive : navstyle.button}
      >
        <SvgXml
          xml={props.active == "todo" ? todoActive : todo}
          style={navstyle.icon}
        />
        <Text
          style={props.active == "todo" ? navstyle.textActive : navstyle.text}
        >
          Todo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={navstyle.buttonActive}
        activeOpacity={0.7}
        onPress={handleLogout}
      >
        <SvgXml xml={logoutActive} style={navstyle.icon} />
        <Text style={navstyle.textActive}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navigation;
