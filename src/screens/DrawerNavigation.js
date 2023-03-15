
import { Button, Linking, SafeAreaView, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';



const HomeScreen = ({ navigation }) => {

    // const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text>Home Screen</Text>
            <Button
                title='open drawer'
                onPress={() => navigation.openDrawer()}
            />
            <Button
                title='toggle drawer'
                onPress={() => navigation.toggleDrawer()}
            />
        </View>
    );
}

const NotificationsScreen = () => {

    //const notificationNavigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Notification Screen</Text>
            {/* <Button
                title='Go to Home'
                onPress={() => notificationNavigation.goBack()}
            /> */}
        </View>
    );
}

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label={'Help'}
                onPress={() => console.log('help.....')}
            />
            <DrawerItem
                label={'close drawer'}
                onPress={() => props.navigation.closeDrawer()}

            />
        </DrawerContentScrollView>
    )
}
//const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

    return (

        // <SafeAreaView>
        //     <View>
        //         <Text>hjgfh</Text>
        //     </View>
        // </SafeAreaView>


        <NavigationContainer>


            <Drawer.Navigator
                initialRouteName='Home'
                defaultStatus='closed'
                drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'home title',
                        drawerLabel: 'fhg',
                        drawerActiveTintColor: 'yellow',
                        drawerStyle: {
                            backgroundColor: 'pink',
                            width: 200
                        },
                        drawerHideStatusBarOnOpen: 'true',
                        headerShown: 'false'
                        //drawerPosition: 'right'

                    }} />
                <Drawer.Screen name="Notification" component={NotificationsScreen} />
            </Drawer.Navigator>

        </NavigationContainer>


    )
}

export default DrawerNavigation

const styles = StyleSheet.create({})