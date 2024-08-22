import { Text, View } from "react-native";
import LoginView from "./login";
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import SignUpView from "./signup";

export default function Index() {
  return (
    <NativeRouter>
      <Routes>
        <Route exact path="/login" Component={LoginView} />
        <Route path="/signup" Component={SignUpView} />
      </Routes>
    </NativeRouter>
  );
}
