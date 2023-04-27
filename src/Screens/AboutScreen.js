import { StyleSheet, View, Text } from "react-native";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AboutScreen</Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
