import { StyleSheet } from "react-native";

export const navstyle = StyleSheet.create({
  container: {
    marginTop: "auto",
    paddingBottom: 30,
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d1d5db",
    gap: 8,
  },
  buttonActive: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
  },
  text: {
    fontSize: 18,
    color: "gray",
    fontWeight: 400,
    fontFamily: "Trebuchet MS",
  },
  textActive: {
    fontSize: 18,
    color: "blue",
    fontWeight: 500,
    fontFamily: "Trebuchet MS",
  },
});
