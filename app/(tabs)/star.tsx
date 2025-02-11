import { View, Text, StyleSheet } from "react-native";
import { Symbol } from "expo-symbols";

export default function StarScreen() {
  return (
    <View>
      <Symbol /> {/* Add icon */}
      <Text>Star Screen</Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   icon: {
//     width: 50,
//     height: 50,
//   },
// });
