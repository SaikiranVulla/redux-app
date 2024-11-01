import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "./Home";
import PostList from "./PostList";
import PostAdd from "./PostAdd";
import UserList from "./UserList";
import { store } from "../ReduxToolkit/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const index = () => {
  return (
    <Provider store={store}>
      {/* <UserList /> */}
      <PostAdd />
      <PostList />
    </Provider>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
