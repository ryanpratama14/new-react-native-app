import { StyleSheet } from "react-native";

export const navstyle = StyleSheet.create({
  container: {
    marginTop: "auto",
    paddingBottom: 30,
    paddingTop: 0,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 14,
    backgroundColor: "#d1d5db",
  },
  icon: {
    width: 20,
    height: 20,
    marginBottom: 5,
  },
  buttonActive: {
    alignItems: "center",
    justifyContent: "center",
    width: 74,
    paddingTop: 8,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 74,
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
