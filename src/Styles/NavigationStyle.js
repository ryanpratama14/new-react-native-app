import { StyleSheet } from "react-native";

export const navstyle = StyleSheet.create({
  container: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d1d5db",
    width: "100%",
  },
  buttonActive: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
    paddingTop: 10,
    width: 75,
  },
  button: {
    width: 75,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
    paddingTop: 10,
  },
  text: {
    fontSize: 15,
    color: "gray",
    fontWeight: 400,
    fontFamily: "Trebuchet MS",
  },
  textActive: {
    fontSize: 15,
    color: "blue",
    fontWeight: 500,
    fontFamily: "Trebuchet MS",
  },
});
