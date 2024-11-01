import { parseISO, formatDistanceToNow } from "date-fns";

import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TimeAgo = ({ timeStramp }) => {
  let timeAgo = "";
  if (timeStramp) {
    const date = parseISO(timeStramp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 13,
          marginLeft: 15,
        }}
      >
        {timeAgo}
      </Text>
    </View>
  );
};

export default TimeAgo;

const styles = StyleSheet.create({});
