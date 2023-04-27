import { StatusBar } from "expo-status-bar";
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  TouchableOpacity,
  Button,
  FlatList,
  ScrollView,
} from "react-native";
import Navigation from "../Components/Navigation";

import { convertDate, dateFormat } from "../../utils";
import { color } from "react-native-reanimated";
import { expensestyles } from "../Styles/ExpenseStyles";

const initialValues = [
  {
    title: "React Native course",
    expense: "2000",
    date: "2023-01-01",
    id: 0,
  },
];

const ExpenseCard = ({ data, index, deleteExpense }) => {
  return (
    <View style={expensestyles.expenseContainer}>
      <View style={{ flexDirection: "column", width: "70%", gap: 4 }}>
        <Text
          style={{
            fontFamily: "Trebuchet MS",
            color: "blue",
            fontSize: 30,
            fontWeight: 600,
          }}
        >
          {data?.title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
          }}
        >
          <Text
            style={{
              fontFamily: "Trebuchet MS",
              fontSize: 20,
              fontWeight: 500,
              color: "gray",
            }}
          >
            ${data?.expense}
          </Text>
          <Text
            style={{
              fontFamily: "Trebuchet MS",
              color: "black",
              fontSize: 16,
            }}
          >
            {dateFormat(data?.date)}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => deleteExpense(index)}
        style={{ width: "30%" }}
        activeOpacity={0.7}
      >
        <View style={expensestyles.btnDel}>
          <Text style={expensestyles.btnText}>Delete</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default function ExpenseScreen({ navigation, route }) {
  const params = route.params;
  const [show, setShow] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [expense, setExpense] = React.useState("");
  const [data, setData] = React.useState(initialValues);

  const deleteExpense = (index) => {
    const temp = [...data];
    temp.splice(index, 1);
    setData(temp);
  };

  const onChange = (e, selectedValue) => {
    const currentDate = selectedValue || new Date();
    setDate(currentDate);
  };

  return (
    <View style={expensestyles.container}>
      <SafeAreaView style={expensestyles.children}>
        <View>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View style={expensestyles.introduction}>
              <Text style={expensestyles.introductionText}>
                Welcome To Expense Tracker App!
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View style={expensestyles.inputDataContainer}>
              <View style={expensestyles.inputContainer}>
                <Text style={expensestyles.inputLabel}>Enter new expense</Text>
                <TextInput
                  value={title}
                  style={expensestyles.input}
                  onChangeText={setTitle}
                  placeholder="BTS concert"
                />
              </View>
              <View style={expensestyles.inputContainer}>
                <Text style={expensestyles.inputLabel}>
                  How much did it cost?
                </Text>
                <TextInput
                  value={expense}
                  style={expensestyles.input}
                  onChangeText={setExpense}
                  keyboardType="numeric"
                  placeholder="$2990"
                />
              </View>
              <View style={expensestyles.inputContainer}>
                <Text style={expensestyles.inputLabel}>Date</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: 6,
                  }}
                >
                  <View
                    style={{
                      borderRadius: 8,
                      padding: 12,
                      width: "50%",
                      backgroundColor: "lightgray",
                    }}
                  >
                    <Text
                      style={{
                        color: "black",
                        fontWeight: 600,
                        fontSize: 16,
                        fontFamily: "Trebuchet MS",
                      }}
                    >
                      {convertDate(date)}
                    </Text>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setShow(!show)}
                    style={{
                      width: "50%",
                      borderRadius: 8,
                      padding: 12,
                      backgroundColor: show ? "blue" : "lightgray",
                    }}
                  >
                    <Text
                      style={{
                        color: show ? "white" : "black",
                        fontWeight: 600,
                        fontSize: 16,
                        fontFamily: "Trebuchet MS",
                        textAlign: "center",
                      }}
                    >
                      {show ? "Confirm" : "Change Date"}
                    </Text>
                  </TouchableOpacity>
                </View>
                {show && (
                  <DateTimePicker
                    value={date}
                    mode="date"
                    onChange={onChange}
                    display="inline"
                  />
                )}
              </View>
              <TouchableOpacity
                disabled={!title && !expense}
                onPress={() => {
                  setData([
                    ...data,
                    {
                      title: title,
                      id: Math.trunc(Math.random() * (100 - 2) + 2),
                      expense: expense,
                      date: convertDate(date),
                    },
                  ]);
                  setTitle("");
                  setExpense("");
                  setDate(new Date());
                  Keyboard.dismiss();
                }}
                activeOpacity={0.7}
                style={expensestyles.btnParent}
              >
                <View
                  style={{
                    width: "50%",
                    paddingVertical: 6,
                    backgroundColor:
                      title?.length && expense?.length ? "green" : "gray",
                    borderRadius: 8,
                  }}
                >
                  <Text style={expensestyles.btnText}>Submit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={expensestyles.expenseList}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: 600,
              fontSize: 30,
              fontFamily: "Trebuchet MS",
              marginBottom: 15,
              fontStyle: "italic",
            }}
          >
            Expense List
          </Text>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <ExpenseCard
                  data={item}
                  index={index}
                  deleteExpense={deleteExpense}
                />
              );
            }}
          />
        </View>
      </SafeAreaView>
      <Navigation navigation={navigation} params={params} active="expense" />
    </View>
  );
}
