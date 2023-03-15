import { ActionSheetIOS, Alert, BackHandler, Button, DrawerLayoutAndroid, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'

const DrawerLayout = () => {

    const [result, setResult] = useState("0");

    const drawer = useRef(null);

    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>
            <Text style={styles.paragraph}>I'm in the Drawer!</Text>
            <Button
                title="Close drawer"
                onPress={() => drawer.current.closeDrawer()}
            />
        </View>
    );

    const showToast = () => {
        ToastAndroid.show('Toast MEssage...', ToastAndroid.SHORT);
    }

    const showToastWithGravity = () => {
        ToastAndroid.showWithGravity('Toast Message WIth Gravity..',
            ToastAndroid.LONG,
            ToastAndroid.TOP,
        )
    }


    const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
    };

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);

        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, []);

    const onPress = () => {
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: ["Cancel", "Generate Number", "reset",],
                destructiveButtonIndex: 2,
                cancelButtonIndex: 0,
                userInterfaceStyle: 'dark',
                tintColor: 'skyblue',


            },
            buttonIndex => {
                if (buttonIndex === 0) {
                    //cancel button
                } else if (buttonIndex == 1) {
                    setResult(Math.floor(Math.random() * 100));
                } else if (buttonIndex === 2) {
                    setResult("00");
                }
            }
        )
    }
    return (

        <DrawerLayoutAndroid
            ref={drawer}
            drawerPosition='left'
            drawerWidth={300}
            renderNavigationView={navigationView}
            drawerBackgroundColor='skyblue'
            drawerLockMode='unlocked'
        >
            <View>
                <Text>DrawerLayout</Text>
                <Button
                    title='Open Drawer'
                    onPress={() => drawer.current.openDrawer()}
                />

                <Button
                    title='Toast '
                    onPress={() => showToast()}
                />

                <Button
                    title='Toast WIth Gravity'
                    onPress={() => showToastWithGravity()}
                />

                <Text>{result}</Text>
                <Button title='Show Action Sheet' onPress={onPress} />

            </View>
        </DrawerLayoutAndroid>
    )
}

export default DrawerLayout

const styles = StyleSheet.create({})