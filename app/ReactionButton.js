import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { reactionsAdded } from "../ReduxToolkit/PostSlice";
import { useDispatch } from "react-redux";

const reactions = {
  thumbsUp: "👍",
  wow: "😲",
  heart: "❤️",
  rocket: "🚀",
  coffee: "🍵",
};

const ReactionButton = ({ posts }) => {
  const dispatch = useDispatch();

  const ButtonReaction = Object.entries(reactions).map(([name, emoji]) => {
    return (
      <TouchableOpacity
        key={emoji}
        activeOpacity={0.7}
        onPress={() => {
          dispatch(reactionsAdded({ postId: posts.id, reaction: name }));
        }}
      >
        <Text>
          {emoji} {posts.reactions[name]}
        </Text>
      </TouchableOpacity>
    );
  });
  return (
    <View>
      <Text>{ButtonReaction}</Text>
    </View>
  );
};

export default ReactionButton;

const styles = StyleSheet.create({});
