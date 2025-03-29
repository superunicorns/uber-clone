import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

export default function HomeScreen() {
  return (
    <SafeAreaView className="items-center justify-center flex-1 bg-white">
      <Text className="text-red-500">Hello World</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
