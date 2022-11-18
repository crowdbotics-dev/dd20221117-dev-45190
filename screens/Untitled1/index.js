import { RadioGroup } from "react-native-radio-buttons-group";
import { Switch } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled1 = () => {
  return <View style={_styles.CDsjNBmc}>
      <TextInput style={_styles.YDBvOSnt}></TextInput><Switch style={_styles.nyLYPWfO}></Switch><RadioGroup style={_styles.ouscEhib} radioButtons={[{
      id: "1",
      label: "Option 1",
      value: "option1"
    }, {
      id: "2",
      label: "Option 2",
      value: "option2"
    }]} layout="column"></RadioGroup></View>;
};

export default Untitled1;

const _styles = StyleSheet.create({
  CDsjNBmc: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  YDBvOSnt: {
    left: 51,
    top: 85,
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  nyLYPWfO: {
    left: 106,
    top: 202,
    position: "absolute",
    width: 50,
    height: 25
  },
  ouscEhib: {
    left: 94,
    top: 342,
    position: "absolute",
    width: 120,
    height: 70
  }
});