import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PostList from "./PostList";
import PostAdd from "./PostAdd";
import { store } from "../ReduxToolkit/Store";
import { Provider } from "react-redux";

const index = () => {
  return (
    <Provider store={store}>
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
