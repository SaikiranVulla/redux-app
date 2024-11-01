import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../ReduxToolkit/UserSlice";
import { Dropdown } from "react-native-element-dropdown";

const UserList = ({ getUser, userName }) => {
  const userList = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  function modifiedArray() {
    let sampleArray = [];
    userList.length > 0 &&
      userList.map((user) => {
        sampleArray.push({
          label: user.username,
          value: user.username,
        });
      });
    return sampleArray;
  }

  // console.log("UserList =-=->", userList);

  return (
    <View>
      <Dropdown
        data={modifiedArray()}
        style={{
          height: 50,
          borderColor: "gray",
          borderWidth: 0.5,
          borderRadius: 8,
          paddingHorizontal: 8,
          marginBottom: 10,
        }}
        maxHeight={300}
        labelField="label"
        valueField="value"
        value={userName}
        onChange={(item) => {
          if (typeof getUser === "function") {
            getUser(item);
          }
        }}
      />
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({});
