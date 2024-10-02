import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "./Home";
import { store, persistor } from "../management/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const index = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Home />
      </PersistGate>
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
