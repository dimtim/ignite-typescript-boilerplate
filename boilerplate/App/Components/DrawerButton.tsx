import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import ExamplesRegistry from "../Services/ExamplesRegistry";
import styles from "./Styles/DrawerButtonStyles";

// Note that this file (App/Components/DrawerButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample("Drawer Button", () =>
  (
  <DrawerButton
    text="Example left drawer button"
    // tslint:disable-next-line:jsx-no-lambda
    onPress={() => window.alert("Your drawers are showing")}
  />),
);

interface Props {
  onPress: () => void;
  text: string;
}

const DrawerButton = ({text, onPress = () => {}}:Props) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default DrawerButton;