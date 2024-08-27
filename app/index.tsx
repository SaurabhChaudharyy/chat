import { Text, View } from "react-native";
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import SignUpView from "./signup";
import LoginView from "./login";
import ChatView from "./chats";

export default function Index() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" Component={ChatView} />
        <Route path="/login" Component={LoginView} />
        <Route path="/signup" Component={SignUpView} />
        <Route path="/chats" Component={ChatView} />
      </Routes>
    </NativeRouter>
  );
}
