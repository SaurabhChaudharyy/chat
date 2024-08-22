import { Text, View } from "react-native";
import SignUpView from "./login";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignUpView />
    </View>
  );
}
