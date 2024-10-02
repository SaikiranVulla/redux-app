import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_Todo } from "../management/action";
import { isTemplateExpression } from "typescript";

const Home = () => {
  const [task, setTask] = useState("");
  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todoList);

  function handlePress() {
    dispatch(add_Todo(task));
    setTask("");
  }
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="what your Plan!"
        style={styles.textFieldContainer}
        value={task}
        onChangeText={(value) => {
          setTask(value);
        }}
      />
      <Button title="Add List" onPress={() => handlePress()} />
      <View
        style={{
          flex: 0.5,
          marginTop: 10,
          width: "80%",
          paddingHorizontal: 12,
        }}
      >
        {todoList && todoList.length > 0 && (
          <FlatList
            style={{ flex: 1 }}
            data={todoList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  backgroundColor: "gray",
                  alignItems: "center",
                  marginTop: 10,
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: "white" }}>{item.task}</Text>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  textFieldContainer: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 4,
    paddingVertical: 8,
    width: "80%",
    marginBottom: 9,
  },
  container: {
    flex: 1,
    marginHorizontal: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
