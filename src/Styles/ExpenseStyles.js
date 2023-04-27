import { StyleSheet } from "react-native";

export const expensestyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  children: {
    flex: 1,
  },
  inputDataContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 16,
  },
  inputContainer: {
    width: "50%",
    flexDirection: "column",
  },
  expenseList: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 40,
    paddingTop: 15,
  },
  input: {
    padding: 12,
    backgroundColor: "#F5F7FF",
    fontSize: 20,
    width: "100%",
    borderRadius: 8,
    fontFamily: "Trebuchet MS",
  },
  inputLabel: {
    textAlign: "left",
    marginLeft: 6,
    marginBottom: 2,
    color: "darkgreen",
    fontWeight: 600,
    fontSize: 16,
    fontFamily: "Trebuchet MS",
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
  btnParent: {
    width: "100%",
    alignItems: "center",
  },
  btn: {
    width: "50%",
    paddingVertical: 6,
    backgroundColor: "green",
    borderRadius: 8,
  },
  btnText: {
    textAlign: "center",
    fontFamily: "Trebuchet MS",
    color: "white",
    fontSize: 20,
    fontWeight: 600,
  },
  btnDel: {
    width: "100%",
    paddingVertical: 6,
    backgroundColor: "red",
    borderRadius: 8,
    alignItems: "center",
  },
  expenseContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 4,
    borderRadius: 8,
    backgroundColor: "#F5F7FF",
    width: "100%",
    marginBottom: 16,
  },
});
