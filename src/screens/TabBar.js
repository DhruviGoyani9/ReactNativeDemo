import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons';
import { TextInput } from 'react-native-gesture-handler';






const DetailScreen = () => {
    return (
        <View>
            <Text>Detail Screen</Text>

            <Icon name="rocket" size={20} color='red' />
            <TextInput />

        </View>
    )
}

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Home Screen</Text>

            <Icon name="rocket" size={20} color='red' />

            <Button
                title='Go to Settings'
                onPress={() => navigation.navigate('Details')}
            />

        </View>
    )
}

const SettingsScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Settings Screen</Text>
            <Button
                title='Go to Details'
                onPress={() => navigation.navigate('Details')}
            />
            <TextInput />
        </View>
    )
}
const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={HomeScreen} />
            <HomeStack.Screen name='Details' component={DetailScreen} />
        </HomeStack.Navigator>
    )
}

const SettingStack = createNativeStackNavigator();

const SettingStackScreen = () => {
    return (
        <SettingStack.Navigator>
            <SettingStack.Screen name='Settings' component={SettingsScreen} />
            <SettingStack.Screen name='Details' component={DetailScreen} />
        </SettingStack.Navigator>
    )
}
const TabBar = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarStyle: { position: 'absolute', top: 700, },
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline'
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                        }
                        //return <Ionicons name={iconName} size={size} color={color} />

                        return <Icon name={iconName} size={size} color={color} />
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'black',
                    headerShown: false
                })

                }
            >
                <Tab.Screen
                    name='Home' component={HomeStackScreen}
                    options={{
                        tabBarBadge: 3,
                        tabBarBadgeStyle: { color: 'yellow', backgroundColor: 'black' }
                    }}
                />
                <Tab.Screen
                    name='Settings'
                    component={SettingStackScreen}
                    options={{
                        tabBarLabel: 'setting',
                        tabBarShowLabel: 'false',
                        tabBarLabelPosition: 'beside-icon',
                        // tabBarButton: () => <TouchableOpacity />

                        tabBarActiveBackgroundColor: 'green',
                        tabBarInactiveBackgroundColor: 'pink',
                        tabBarHideOnKeyboard: true
                    }}
                />
            </Tab.Navigator>

        </NavigationContainer >
    )
}

export default TabBar

const styles = StyleSheet.create({})