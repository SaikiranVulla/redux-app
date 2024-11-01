import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPosts } from "../ReduxToolkit/PostSlice";
import { nanoid } from "@reduxjs/toolkit";
import UserList from "./UserList";

const PostAdd = () => {
  const dispatch = useDispatch();
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [authorName, setAuthorName] = useState("");

  function onSubmit() {
    dispatch(addPosts(postTitle, postContent, authorName));
    setAuthorName("");
    setPostTitle("");
    setPostContent("");
  }

  const assigningUser = (item) => {
    setAuthorName(item.value);
  };
  return (
    <View style={styles.container}>
      <Text style={{ alignSelf: "center", fontSize: 21 }}>Post Add</Text>
      <View style={{ marginVertical: 6 }}>
        <Text style={{ fontSize: 16 }}>Post Title</Text>
        <TextInput
          style={{
            borderWidth: 0.5,
            borderRadius: 8,
            padding: 12,
            marginTop: 5,
          }}
          placeholder="Main Post Title"
          value={postTitle}
          onChangeText={(value) => setPostTitle(value)}
        />
      </View>

      <Text style={{ fontSize: 16 }}>Post Description</Text>
      <TextInput
        style={{
          borderWidth: 0.5,
          borderRadius: 8,
          padding: 12,
          marginVertical: 5,
        }}
        multiline={true}
        placeholder="Description....."
        value={postContent}
        onChangeText={(value) => setPostContent(value)}
      />
      <Text style={{ fontSize: 16 }}>Author</Text>
      <UserList userName={authorName} getUser={assigningUser} />
      <Button title="Submit" onPress={() => onSubmit()} />
    </View>
  );
};

export default PostAdd;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "center",
    marginHorizontal: 24,
  },
});
