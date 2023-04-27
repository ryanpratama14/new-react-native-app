import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./src/Screens/MainScreen";
import ExpenseScreen from "./src/Screens/ExpenseScreen";
import TodoScreen from "./src/Screens/TodoScreen";
import AuthScreen from "./src/Screens/AuthScreen";
import ShopScreen from "./src/Screens/ShopScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      >
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Expense"
          component={ExpenseScreen}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Todo"
          component={TodoScreen}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Shop"
          component={ShopScreen}
          options={{
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
