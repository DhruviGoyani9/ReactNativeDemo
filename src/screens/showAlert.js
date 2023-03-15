import { Alert, Animated, Button, Keyboard, SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'

const AlertBox = () => Alert.alert(
  "alert Title",
  "Alert Message",
  [
    {
      text: "Cancel",
      onPress: () => Alert.alert('Cancel Pressed'),
      style: 'destructive'

    },
  ],
  {
    cancelable: true,
    userInterfaceStyle: 'dark',
    onDismiss: () =>
      Alert.alert('This alert was dismissed ')
  }
)

const PromptBox = () => Alert.prompt(
  'Prompt ',
  'Prompt Message',
  [
    {
      text: "Cancel",
      onPress: () => Alert.alert('Cancel Pressed'),
      style: 'destructive'

    },
    {
      text: "OK",
      onPress: () => Alert.alert('OK Pressed'),
    }
  ],
  'login-password',
  'default value',
)

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const ShowAlert = () => {


  const [dimensions, setDimensions] = useState({ window, screen });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000
    }).start();
  };

  return (
    <SafeAreaView>
      <View>
        <Button
          style={styles.padding}
          title='show alert' onPress={AlertBox}></Button>

        <Button
          style={styles.padding}
          title='show Prompt' onPress={PromptBox} />

        <Animated.View
          style={{ opacity: fadeAnim }}
        >
          <Text>Fading View !</Text>
        </Animated.View>

        <Button title='Fade In View' onPress={fadeIn} />
        <Button title='Fade Out View' onPress={fadeOut} />

        <Text style={styles.header}>Window Dimensions</Text>
        {Object.entries(dimensions.window).map(([key, value]) => (
          <Text>{key} - {value}</Text>
        ))}
        <Text style={styles.header}>Screen Dimensions</Text>
        {Object.entries(dimensions.screen).map(([key, value]) => (
          <Text>{key} - {value}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
}

export default ShowAlert

const styles = StyleSheet.create({

  padding: {
    padding: 10,
    margin: 40
  },
  header: {
    fontSize: 16,
    marginVertical: 10
  }
})