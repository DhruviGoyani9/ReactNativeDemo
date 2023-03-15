import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/FontAwesome';


// const glyphMap = { 'icon-name': 1234, test: '∆' };
// const Icon = createIconSet(glyphMap, 'FontName', 'font-name.ttf')


const HomeScreen = () => {
    return (
        <View>
            <Text>Home Screen</Text>
            <Icons.Button
                name="facebook"
                backgroundColor="#3b5998"
                onPress={() => { this.loginWithFacebook }}
                light
            >
                <Text style={{ fontSize: 20, fontFamily: 'Arial', color: 'white' }}>

                    Login With facebook
                </Text>
            </Icons.Button>

            <Icons.Button
                name='twitter'
                backgroundColor={'#3b5998'}
                onPress={() => console.log('twitter button pressed')}
                color='red'
                size={30}
                iconStyle={{ marginRight: 20, }}
                borderRadius={10}

            >
                Follow me on Twitter
            </Icons.Button>

            <Icons
                name='home'
            />

        </View>
    )
}

const SettingsScreen = () => {
    return (
        <View>
            <Text>Settings Screen</Text>
        </View>
    )
}

const Tab = createMaterialTopTabNavigator();

const TopTabBar = () => {
    return (
        <NavigationContainer>



            <Tab.Navigator
                //initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarLabelStyle: { fontSize: 15 },
                    tabBarItemStyle: { width: 100 },
                    tabBarStyle: { backgroundColor: 'skyblue', marginTop: 40 },
                    tabBarShowLabel: true,
                    tabBarIndicatorStyle: { width: 30, left: 35 },
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home'
                                : 'star'
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'user' : 'cog';
                        }

                        return <Icons
                            name={iconName}
                            size={20}
                            color={color}
                            style={{}}

                        />
                    },

                })
                }
                tabBarPosition='top'

            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>

        </NavigationContainer>
    )
}

export default TopTabBar

const styles = StyleSheet.create({})