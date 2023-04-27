import { StyleSheet } from "react-native";

export const shopstyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  children: {
    flex: 1,
  },
  introduction: {
    justifyContent: "center",
    paddingVertical: 16,
    width: "100%",
  },
  introductionText: {
    paddingHorizontal: 20,
    textAlign: "center",
    fontWeight: 600,
    fontSize: 40,
    fontFamily: "Trebuchet MS",
  },
  itemsContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 20,
  },
  itemContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "blue",
    padding: 15,
    borderRadius: 20,
  },
  itemDesc: {
    flexDirection: "column",
    gap: 6,
  },
  btn: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "green",
    borderRadius: 7,
  },
  btnText: {
    color: "white",
    fontSize: 16,
  },
  itemHeading: {
    fontSize: 24,
    fontWeight: 600,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 500,
    color: "darkblue",
  },
});
