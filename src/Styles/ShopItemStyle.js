import { StyleSheet } from "react-native";

export const shopitemstyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  children: {
    flex: 1,
  },
  navigator: {
    marginBottom: "auto",
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: "row",
  },
  itemContainer: {
    flexDirection: "column",
    flex: 1,
  },
  backBtn: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "blue",
    borderRadius: 8,
  },
  descContainer: {
    flexDirection: "column",
    padding: 30,
    gap: 16,
  },
  titleContainer: {
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "blue",
    fontWeight: 600,
  },
  price: {
    fontSize: 20,
    color: "gray",
    fontWeight: 500,
  },
});
