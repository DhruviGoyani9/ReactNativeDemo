import 'react-native-gesture-handler';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Alert, Switch, ActivityIndicator, FlatList, TouchableOpacity, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Modal, Pressable, RefreshControl, SectionList, StatusBar, TouchableHighlight, VirtualizedList } from 'react-native'
import React from 'react'
import DrawerNavigation from './src/screens/DrawerNavigation';
import StackNavigationFile from './src/screens/StackNavigationFile';
import TabBar from './src/screens/TabBar';
import TopTabBar from './src/screens/TopTabBar';
import AsyncStorageFile from './src/screens/AsyncStorageFile';
import Corecomponent from './src/screens/Corecomponent';
import DatePickerFile from './src/screens/DatePickerFile';


const App = () => {

  return (
    //<DrawerNavigation />
    // <StackNavigationFile />
    //<TabBar />
    //<TopTabBar />
    //<AsyncStorageFile />
    //<Corecomponent />
    <DatePickerFile />
  )
}

export default App

const styles = StyleSheet.create({

});