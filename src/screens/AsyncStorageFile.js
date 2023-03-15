import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TouchableOpacity } from 'react-native-gesture-handler'


const AsyncStorageFile = () => {

    const saveData = () => {
        //let name = "Dhruvi";
        let obj = {
            name: 'Dhruvi',
            email: 'Dhruvi@gmail.com',
            city: 'Surat'
        }
        AsyncStorage.setItem('user', JSON.stringify(obj));
    }

    const displayData = async () => {
        try {
            let user = await AsyncStorage.getItem('user');
            let parsed = JSON.parse(user);
            alert(parsed.email);
        }
        catch (error) {
            alert(error)
        }
    }

    const USER_1 = {
        name: 'Dhruvi',
        age: 20,
        traits: {
            hair: 'black',

        }
    }

    const USER_1_DELTA = {
        age: 30,
        traits: {
            eyes: 'green'
        }
    }

    const USER_2 = {
        name: 'Goyani',
        age: 21,
        hobby: 'cars',
        traits: {
            hair: 'brown'
        }
    }

    const USER_2_DELTA = {
        age: 31,
        traits: {
            hair: 'blue'
        }
    }

    const mergeUser = async () => {

        const firstPair = ['userData', 'goyanidhruvi']
        const secondPair = ['user', 'goyani']
        try {
            await AsyncStorage.setItem('userData', JSON.stringify(USER_1))

            await AsyncStorage.mergeItem('userData', JSON.stringify(USER_2))

            const currentUser = await AsyncStorage.getItem('userData')
            console.log(`merge user : ${currentUser}`)

            keys = await AsyncStorage.getAllKeys()
            console.log('All keys : ', keys)

            values = await AsyncStorage.multiGet(['userData', 'user'])
            console.log('get multiple items: ', values)

            multiset = await AsyncStorage.multiSet([firstPair, secondPair])
            console.log('multi Set : -- ', multiset)

            getCurrentData = await AsyncStorage.getItem('user');
            console.log('get Current Data : --- ', getCurrentData)



            const remove = await AsyncStorage.removeItem('userData')
            console.log('removed Item......')

            keys = await AsyncStorage.getAllKeys()
            console.log('All keys : ', keys)

            keys = ['user1', 'user2']
            const multiRemove = await AsyncStorage.multiRemove(keys)
            console.log('multiple remove :: -- ', multiRemove)

            keys = await AsyncStorage.getAllKeys()
            console.log('All keys : ', keys)

            clearall = await AsyncStorage.clear()
            console.log('clear all ::  ', clearall)
            keys = await AsyncStorage.getAllKeys()
            console.log('All keys : ', keys)
        }
        catch (e) {
            console.log(e);
        }
    }


    const multiSet = [
        ['user1', JSON.stringify(USER_1)],
        ['user2', JSON.stringify(USER_2)]
    ]

    const multiMerge = [
        ['user1', JSON.stringify(USER_1_DELTA)],
        ['user2', JSON.stringify(USER_2_DELTA)]
    ]

    const mergeMultiple = async () => {
        let currentlyMerged

        try {
            await AsyncStorage.multiSet(multiSet)
            await AsyncStorage.multiMerge(multiMerge)
            currentlyMerged = await AsyncStorage.multiGet(['user1', 'user2'])
            console.log('Multiple Merged ... :: ', currentlyMerged)
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <SafeAreaView>

            <View>
                <Text>AsyncStorageFile</Text>
                <TouchableOpacity onPress={saveData}>
                    <Text>CLick to save Data</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={displayData}
                >
                    <Text>CLick to Display data</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={mergeUser}
                >
                    <Text>Merge Item</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={mergeMultiple}
                >
                    <Text>Multiple Merge</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default AsyncStorageFile

const styles = StyleSheet.create({})