import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
import { Card, Text } from "react-native-paper";
import {
  fetchPosts,
  getAllPosts,
  getPostStatus,
  getPostError,
} from "../ReduxToolkit/PostSlice";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getAllPosts);
  const postsStatus = useSelector(getPostStatus);
  const postsError = useSelector(getPostError);

  useEffect(() => {
    if (postsStatus == "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, postsError]);

  return (
    <View style={styles.container}>
      {postsStatus == "succeeded" && (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              style={{ marginBottom: 10 }}
              contentStyle={{ padding: 5 }}
              elevation={5}
            >
              <Card.Title title={item.title} />
              <Card.Content>
                <Text variant="bodyMedium">{item.body}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text variant="bodyMedium">{`${
                    item.authorName ? item.authorName : "by unKnown"
                  }`}</Text>
                  <TimeAgo timeStramp={item.date} />
                </View>
                <ReactionButton posts={item} />
              </Card.Content>
            </Card>
          )}
        />
      )}
      {postsStatus === "loading" && <Text>Loading....</Text>}
    </View>
  );
};

export default PostList;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  cardView: {
    borderWidth: 0.5,
    borderRadius: 4,
    padding: 5,
    backgroundColor: "grey",
    marginTop: 10,
    borderColor: "white",
  },
  titleText: {
    color: "white",
    fontSize: 24,
    alignSelf: "center",
  },
  contentText: {
    color: "white",
    fontSize: 16,
  },
});
