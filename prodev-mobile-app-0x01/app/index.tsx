import { View, Text, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>Entry Screen - Awesome</Text>
      <View>
        <Text style={styles.largeText}>
          Typescript is great if you practice more
        </Text>
        <Text style={styles.mediumText}>
          React Native provides you a single codebase for cross platforms
        </Text>
        <Text style={styles.smallText}>ALX is awesome</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  largeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  mediumText: {
    fontSize: 20,
    color: "#007AFF",
  },
  smallText: {
    fontSize: 16,
    color: "#333",
  },
  noteText: {
    fontSize: 14,
    fontStyle: "italic",
    marginTop: 10,
    color: "gray",
  },
});
