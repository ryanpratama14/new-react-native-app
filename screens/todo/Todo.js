import { StatusBar } from "expo-status-bar";
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { convertDate, dateFormat } from "../../utils";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  FlatList,
  Keyboard,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

const initialValues = [
  {
    title: "Mastering React Native",
    date: "2023-12-12",
    isDone: false,
    id: 12,
  },
];

export default function Todo() {
  const [dataTodo, onChangeData] = React.useState(initialValues);
  const [title, onChangeTitle] = React.useState("");
  const [date, onChangeDate] = React.useState(new Date());
  const [show, setShow] = React.useState(false);
  const deleteTodo = (index) => {
    const temp = [...dataTodo];
    temp.splice(index, 1);
    onChangeData(temp);
  };

  const markTodo = (index) => {
    const temp = [...dataTodo];
    temp[index].isDone = true;
    onChangeData(temp);
  };

  const onChange = (event, selectedValue) => {
    const currentDate = selectedValue || new Date();
    onChangeDate(currentDate);
  };

  const ToDo = ({ data, index }) => {
    return (
      <View style={styles.todoComp}>
        <View style={styles.todoDesc}>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              width: "70%",
            }}
          >
            <Text style={styles.heading}>{data?.title}</Text>
            <Text style={{ color: "darkblue" }}>{dateFormat(data?.date)}</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              width: "30%",
              alignContent: "end",
              justifyContent: "end",
            }}
          >
            <TouchableOpacity
              activeOpacity={100}
              style={{ width: "100%", alignItems: "center" }}
              onPress={() => deleteTodo(index)}
            >
              <View style={styles.btnDel}>
                <Text style={styles.btnTextDel}>Delete</Text>
              </View>
            </TouchableOpacity>
            {!data?.isDone && (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => markTodo(index)}
                style={{ width: "100%", alignItems: "center" }}
              >
                <View style={styles.btnDone}>
                  <Text style={styles.btnTextDone}>Done</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.todoContainer}>
      <StatusBar style="auto" />
      <View
        style={{
          padding: 6,
          display: "flex",
          gap: 6,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: "auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <Image
            source={require("../../assets/faoTech.png")}
            style={{ width: 20, aspectRatio: "4/4" }}
          />
          <Text style={{ fontSize: 24, fontWeight: 600 }}>
            Welcome to: Todo App
          </Text>
        </View>
        <Text style={{ fontSize: 16, fontWeight: 600, textAlign: "center" }}>
          faoTech
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: "#e2e8f0",
          flex: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          paddingVertical: 20,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="Mastering React Native"
          value={title}
          onChangeText={onChangeTitle}
        />
        <DateTimePicker
          display="default"
          mode="date"
          themeVariant="light"
          value={date}
          onChange={onChange}
        />
        <Pressable
          onPress={() => {
            if (title) {
              onChangeData([
                ...dataTodo,
                {
                  title,
                  id: Math.trunc(Math.random() * (100 - 2) + 2),
                  isDone: false,
                  date: convertDate(date),
                },
              ]);
              onChangeTitle("");
              Keyboard.dismiss();
            }
          }}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>Input Data</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.childContainer}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 600,
            color: "blue",
            textAlign: "center",
          }}
        >
          Todo List
        </Text>
        <FlatList
          style={styles.flatList}
          data={dataTodo.reverse()}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return !item?.isDone && <ToDo data={item} index={index} />;
          }}
        />
      </View>
      <View style={styles.childContainer2}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 600,
            color: "green",
            textAlign: "center",
          }}
        >
          Done
        </Text>
        <FlatList
          style={styles.flatList}
          data={dataTodo}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return item?.isDone && <ToDo data={item} index={index} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: 700,
    width: "60%",
  },
  todoComp: {
    padding: 15,
    backgroundColor: "#F5F7FF",
    borderRadius: 12,
    marginBottom: 20,
  },
  todoDesc: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  todoContainer: {
    flex: 1,
  },
  children: {
    paddingHorizontal: 50,
    flex: 1,
    gap: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a3a3a3",
    width: "100%",
  },
  childContainer: {
    flex: 3,
    flexDirection: "column",
    gap: 12,
    backgroundColor: "#ffff",
    paddingTop: 30,
    paddingHorizontal: 40,
  },
  childContainer2: {
    flex: 3,
    flexDirection: "column",
    gap: 36,
    backgroundColor: "#fffc",
    paddingTop: 30,
    paddingHorizontal: 40,
  },
  input: {
    width: "50%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 6,
    color: "#3E3E3E",
    paddingHorizontal: 12,
    fontSize: 20,
  },
  btn: {
    padding: 8,
    backgroundColor: "#F5C901",
    borderRadius: 6,
    width: "100%",
  },
  btnText: {
    fontSize: 20,
    color: "#3E3E3E",
    fontWeight: 600,
  },
  btnDel: {
    padding: 8,
    backgroundColor: "#c91f3b",
    borderRadius: 6,
  },
  btnTextDel: {
    fontSize: 20,
    color: "#fff",
    fontWeight: 600,
  },
  btnDone: {
    padding: 8,
    backgroundColor: "darkgreen",
    borderRadius: 6,
  },
  btnTextDone: {
    fontSize: 20,
    color: "#fff",
    fontWeight: 600,
  },
});
