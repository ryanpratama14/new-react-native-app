import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../main/Main";
import Todo from "../todo/Todo";

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Welcome!" component={Main} />
      <Tab.Screen name="Todo App" component={Todo} />
    </Tab.Navigator>
  );
}
