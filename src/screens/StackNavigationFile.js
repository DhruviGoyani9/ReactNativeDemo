import { Button, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { NavigationContainer, useFocusEffect, useIsFocused, useNavigation, useRoute } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from 'react-native-gesture-handler';


const HomeScreen = ({ navigation, route }) => {

    const isHomeFocused = useIsFocused();
    const hookNavigation = useNavigation();

    const [count, setCount] = useState(0);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button title='Update Count' onPress={() => setCount((c) => c + 1)} />
            )
        })
    }, [navigation])

    React.useEffect(() => {
        if (route.params?.title) {
            console.log('Use effect ')
        }
    }, [route.params?.title])

    return (
        <View style={{ alignItems: 'center' }}>
            <Text>Home Screen</Text>

            <Text>{isHomeFocused ? console.log('home focused') : console.log('home un focused')}</Text>

            <Button
                title='Go to Details'
                onPress={() =>
                    navigation.navigate('DetailScreen',
                        {
                            itemId: 1,
                            otherParameter: 'another Parameter'
                        }
                    )}
            />

            <Text style={{ fontSize: 20, color: 'red' }}>Title: {route.params?.title}</Text>
            <Text>Count: {count}</Text>

            <Button
                title='Using Hook go to Details'
                onPress={() => hookNavigation.navigate('DetailScreen', { id: 1, name: 'Dhruvi' })}
            />
            <Button
                title='Using useRoutehook'
                onPress={() => hookNavigation.navigate('DetailScreen', { caption: 'Some caption' })}
            />
        </View>
    )
}

const DetailScreen = ({ route, navigation }) => {
    const { itemId, otherParameter, id, name } = route.params;
    const [value, onChangeText] = React.useState('');

    const hookNavigation = useNavigation();

    const routeNavigation = useRoute();

    const isFocused = useIsFocused();


    React.useEffect(() => {

        navigation.setOptions({
            title: value === '' ? 'No Title' : value,
        })
    }, [navigation, value])
    return (
        <View style={{ alignItems: 'center' }}>
            <Text>Detail Screen</Text>
            <Text>itemId: {itemId}</Text>
            <Text>otherParameter: {otherParameter}</Text>
            <Text>{isFocused ? console.log('detail screen focused') : console.log('detail screen unfocused')} </Text>
            <TextInput
                placeholder="Enter Text"
                style={{ borderBottomColor: 'red', borderBottomWidth: 2, width: '90%' }}
                onChangeText={onChangeText}
                value={value}
            />
            <Button title='Go to Details... again'
                onPress={() => navigation.push('DetailScreen', {
                    itemId: Math.floor(Math.random() * 100),
                    otherParameter: 'Detail screen again'
                })} />
            <Button
                title='Go to Home'
                onPress={() => {
                    navigation.navigate({
                        name: 'Home',
                        params: { title: value },
                        merge: true
                    })
                }}
            />

            <Button title='Go Back' onPress={() => navigation.goBack()} />
            <Button title='Go back to first screen in stack'
                onPress={() => navigation.popToTop()} />
            <Button
                title='Update the button title'
                onPress={() => navigation.setOptions({ title: 'Updated!!' })}
            />

            <Button
                title='reset'
                onPress={() => navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }]
                })}
            />

            <Button
                title='Back using Hook'
                onPress={() => {
                    hookNavigation.goBack();
                }}
            />

            <Text>Id:{id}</Text>
            <Text>Name: {name}</Text>
            <Text>Caption: {routeNavigation.params.caption}</Text>

        </View>
    )
}

const LogoTitle = () => {
    return (
        <Image
            style={{ width: 40, height: 40 }}
            source={require('/Users/mac/Desktop/projects/NewProject/NewProject/src/assets/tiny_logo.png')}
        />
    )
}
const Stack = createNativeStackNavigator();


const StackNavigationFile = () => {

    const [name, setName] = useState('Dhruvi');

    useEffect(() => {

        console.log({ name });
    }, [name])

    // useFocusEffect(
    //     useCallback(() => {
    //         console.log({ name })
    //     }, [name])

    // )
    return (

        <NavigationContainer>

            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'red'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                }}
            >


                <Stack.Screen
                    name='DetailScreen'
                    component={DetailScreen}
                    initialParams={{ itemId: 10 }}
                    options={{
                        title: 'My Home',
                        headerStyle: {
                            backgroundColor: 'yellow'
                        },
                        headerTintColor: 'red',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        },
                        headerBackTitle: 'Back Button'
                    }}
                />
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        title: 'option Home',
                        headerTitle: (props) => <LogoTitle {...props} />,
                        // headerRight: () => (
                        //     <Button
                        //         //onPress={() => alert('This is a Header Button')}
                        //         title='Update Count'
                        //     //color={'pink'}
                        //     />
                        // )
                    }} />
                {/* <Stack.Screen name='Home'>
                    {(prop) => <HomeScreen {...prop} extraData={'some Data'} />}
                </Stack.Screen> */}
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default StackNavigationFile

const styles = StyleSheet.create({})