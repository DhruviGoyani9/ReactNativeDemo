import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Alert, Switch, ActivityIndicator, FlatList, TouchableOpacity, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Modal, Pressable, RefreshControl, SectionList, StatusBar, TouchableHighlight, VirtualizedList } from 'react-native'
import React, { useState } from 'react'

const DATA = [
    {
        id: '1',
        title: 'First Item'
    },
    {
        id: '2',
        title: 'Second Item'
    },
    {
        id: '3',
        title: 'Third Item'
    },
    {
        id: '4',
        title: 'Four Item'
    },
    {
        id: '5',
        title: 'Five Item'
    },
    {
        id: '6',
        title: 'Six Item'
    }
]

const DATA1 = [
    {
        title: "Main dishes",
        data: ["Pizza", "Burger", "Risotto"]
    },
    {
        title: "Sides",
        data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
        title: "Drinks",
        data: ["Water", "Coke", "Beer"]
    },
    {
        title: "Desserts",
        data: ["Cheese Cake", "Ice Cream"]
    }
];

const DATA2 = [];

const getItem = (data, index) => ({
    id: Math.random(),
    title: `Item ${index + 1}`
})

const getItemCount = (data) => 10

const Item2 = ({ title }) => (
    <View style={{ padding: 10, backgroundColor: 'skyblue', marginTop: 10 }}>
        <Text>{title}</Text>
    </View>
);


const Item = ({ item, onPress, backgroundColor, textColor }) => (

    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[textColor]}>{item.title}</Text>
    </TouchableOpacity>

    // <View style={{ backgroundColor: 'skyblue', margin: 10 }}>
    //   <TouchableOpacity>
    //     <Text style={{ padding: 10 }}>{title}</Text>
    //   </TouchableOpacity>

    // </View>
);

const Item1 = ({ title }) => (
    <View>
        <Text>{title}</Text>
    </View>
);

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}


const Corecomponent = () => {

    /* const onPressTitle = () => {
      console.log('hiiii......')
    } */

    const [isEnabled, setIsEnabled] = useState(false);

    const [selectedId, setSelectedId] = useState(null);

    const [modalVisible, setModalVisible] = useState(false);

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    // const renderItem = ({ item }) => (

    //   <Item title={item.title} />
    // );

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "blue" : "skyblue";
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };



    return (
        <SafeAreaView>

            <StatusBar
                animated={true}
                backgroundColor={'red'}
                barStyle={'dark-content'}
                hidden={false}
                networkActivityIndicatorVisible={true}
                showHideTransition={'slide'}
            />

            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                bounces={true}
                refreshControl={<RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    //progressViewOffset={10}
                    tintColor={'red'}
                    title={'refresh'}
                    titleColor={'green'}
                />}
            >

                <View style={styles.container}>
                    {/* <ImageBackground
            source={require('/Users/mac/Desktop/projects/NewProject/NewProject/src/assets/tiny_logo.png')}
            resizeMode='contain'
            imageStyle={{ tintColor: 'yellow' }}
            style={{ flex: 1, justifyContent: 'center' }}
          > */}

                    <Text style={styles.textStyle}>Hellooo.......</Text>
                    <Text style={styles.font}>First React Native App </Text>
                    <Text style={styles.red}>just red</Text>
                    <Text style={[styles.bigBlue, styles.red]}>{"just bigBlue"}{"\n"}</Text>
                    <Text style={styles.bigBlue}>bigBlue, <Text style={styles.red}>then red</Text></Text>
                    <Text style={styles.red}>red, <Text style={styles.bigBlue}>then bigBlue</Text></Text>

                    <View style={{ flexDirection: "row" }}>

                        <View style={{ backgroundColor: "blue", flex: 0.1, height: 100, padding: 10 }} />
                        <View style={{ backgroundColor: "red", flex: 0.3, height: 100, }} />
                        <Text>Hello World!!</Text>
                    </View>

                    <Text>
                        <Text> First Part and </Text>
                        <Text>Second Part</Text>
                    </Text>
                    <View>
                        <Text> First Part and </Text>
                        <Text>Second Part</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                        <Text style={{ fontSize: 30 }}>70.00</Text>
                        <Text>%</Text>
                    </View>

                    <View style={{ direction: 'rtl', flexDirection: 'row' }}>
                        <View style={{ height: 30, width: 30, backgroundColor: 'pink' }}></View>
                        <View style={{ height: 30, width: 50, backgroundColor: 'lightblue' }}></View>
                        <View style={{ height: 30, width: 50, backgroundColor: 'skyblue' }}></View>
                    </View>

                    <View style={{ height: 50, width: '20%', backgroundColor: 'green', alignSelf: 'flex-start' }} />
                    <Text>dfhg</Text>
                    <View style={{ backgroundColor: 'lightgreen', flexDirection: 'row', alignContent: 'space-between', justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'column', }}>
                            <Text>First Column !!!!!! </Text>
                            <Text>How ARe you !!!!!! </Text>
                            <Text>Dhruvi</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text> second column!!!!!! </Text>
                            <Text>How ARe you !!!!!! </Text>
                            <Text>Dhruvi</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ backgroundColor: 'red', height: 50, flexBasis: 50, flexGrow: 0, flexShrink: 0, }}>
                        </View>
                        <View style={{ backgroundColor: 'skyblue', height: 30, flexBasis: 40, flexGrow: 0, flexShrink: 0 }}></View>
                    </View>

                    <View >
                        <View style={[styles.box, { backgroundColor: 'green', top: 10, left: 0, position: 'relative' }]}></View>
                        <View style={[styles.box, { backgroundColor: 'lightgreen', top: 0, left: 50, position: 'relative' }]}></View>
                        <View style={[styles.box, { backgroundColor: 'pink', top: 0, left: 30, position: 'relative' }]}></View>
                    </View>
                    <View flexDirection='row'>
                        <Image style={styles.logo} source={require('/Users/mac/Desktop/projects/NewProject/NewProject/src/assets/tiny_logo.png')}></Image>
                        <Image style={[styles.logo, { height: 100 }]} source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }}></Image>
                        <Image style={styles.logo} source={{ uri: 'https://i.picsum.photos/id/1/400/400.jpg?hmac=lOytrN6lDOH_Yx7NwwGIaCtxp6pyuH2V4hD6Eac-VI0' }}></Image>

                    </View>

                    <TextInput style={{ backgroundColor: 'pink', width: '80%', borderBottomWidth: 2, borderBottomColor: 'red' }}
                        keyboardType="default"
                        multiline={true}
                        maxLength={20}
                        autoCapitalize='sentences'
                        autoFocus={true}
                        blurOnSubmit={true}
                        cursorColor={'red'}

                    />

                    <Button
                        title='Button'
                        //color="#841584"
                        onPress={() => Alert.alert('Simple Button Pressed !!')}
                        accessibilityLabel='Learn More About this Button'
                        //disabled
                        //nextFocusUp={20}
                        touchSoundDisabled
                    />

                    <Switch
                        thumbColor={isEnabled ? 'red' : 'skyblue'}
                        trackColor={{ false: 'yellow', true: 'green' }}
                        onValueChange={toggleSwitch}
                        ios_backgroundColor="#563eac"
                        value={isEnabled}
                    />

                    <ActivityIndicator
                        color={'green'}
                        size={'large'}
                    />

                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "position" : "height"}
                        // contentContainerStyle={{ backgroundColor: 'white' }}
                        //enabled="false"
                        keyboardVerticalOffset={0}
                    >
                        <TouchableWithoutFeedback
                            onPress={Keyboard.dismiss}>
                            <View style={{ padding: 20, marginBottom: 0, backgroundColor: '#F1F1F1' }}>
                                <Text>Header</Text>
                                <TextInput placeholder='UserName'></TextInput>
                                <Button title='submit' onPress={() => null} />
                            </View>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>

                    <View style={[styles.centeredView, { backgroundColor: 'red', marginBottom: 50 }]}>
                        <Modal
                            animationType='slide'
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has not closed');
                                setModalVisible(!modalVisible);
                            }}
                            presentationStyle='overFullScreen'
                        //visible={false}
                        >
                            <View style={[styles.centeredView,]}>
                                <View style={styles.modalView}>
                                    <Text>Hello !!</Text>
                                    <Pressable
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text>Hide</Text>
                                    </Pressable>
                                </View>
                            </View>

                        </Modal>
                        <Pressable
                            onPress={() => setModalVisible(true)}
                            android_disableSound={true}
                            unstable_pressDelay={10000}
                        >
                            <Text>Show Modal</Text>
                        </Pressable>
                    </View>

                    <TouchableHighlight
                        onPress={() => { null }}
                        activeOpacity={1}
                        underlayColor={'lightgreen'}
                        style={{ padding: 10, backgroundColor: 'pink', marginBottom: 10 }}
                    >
                        <Text>Touchable Highlight</Text>
                    </TouchableHighlight>

                    <TouchableOpacity
                        style={{ backgroundColor: 'green', padding: 10 }}
                        activeOpacity={0.6}
                        disabled={true}
                    >
                        <Text>Touchable Opacity</Text>
                    </TouchableOpacity>

                    <TouchableWithoutFeedback
                        accessibilityIgnoresInvertColors={true}
                        accessible={true}
                        accessibilityLabel={'accessibility label'}
                        accessibilityHint={'accessibility hint'}
                        accessibilityRole={'link'}
                        disabled={false}
                    >
                        <Text>TouchableWithoutFeedback</Text>
                    </TouchableWithoutFeedback>

                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        //initialNumToRender={3}
                        //initialScrollIndex={3}
                        extraData={selectedId}
                        horizontal={false}
                        //inverted={'true'}
                        numColumns={3}
                        progressViewOffset={4}
                        refreshing={true}
                    />

                    <SectionList
                        sections={DATA1}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => <Item1 title={item} />}
                        renderSectionHeader={({ section: { title } }) => <Text style={{ color: 'red', fontSize: 20 }}>{title}</Text>}
                        initialNumToRender={2}
                        inverted={false}
                        ListFooterComponent={<Text>Footer.....</Text>}
                        ListHeaderComponent={<Text>Header...</Text>}
                        onEndReachedThreshold={2}
                    />

                    <VirtualizedList
                        data={DATA2}
                        renderItem={({ item }) => <Item2 title={item.title} />}
                        getItemCount={getItemCount}
                        getItem={getItem}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />

                    <Text>hdgfhg</Text>
                </View>

            </ScrollView>
        </SafeAreaView>

        // <SafeAreaView>

        //   <StatusBar
        //     animated={true}
        //     backgroundColor={'red'}
        //     barStyle={'dark-content'}
        //     hidden={false}
        //     networkActivityIndicatorVisible={true}
        //     showHideTransition={'slide'}

        //   />
        //   {/* <FlatList
        //     data={DATA}
        //     renderItem={renderItem}
        //     keyExtractor={item => item.id}
        //     //initialNumToRender={3}
        //     //initialScrollIndex={3}
        //     extraData={selectedId}
        //     horizontal={false}
        //     //inverted={'true'}
        //     numColumns={3}
        //     progressViewOffset={4}
        //     refreshing={true}
        //   /> */}

        //   {/* <SectionList
        //     sections={DATA1}
        //     keyExtractor={(item, index) => item + index}
        //     renderItem={({ item }) => <Item1 title={item} />}
        //     renderSectionHeader={({ section: { title } }) => <Text style={{ color: 'red', fontSize: 20 }}>{title}</Text>}
        //     initialNumToRender={2}
        //     inverted={false}
        //     ListFooterComponent={<Text>Footer.....</Text>}
        //     ListHeaderComponent={<Text>Header...</Text>}
        //     onEndReachedThreshold={2}
        //   /> */}



        //   <ScrollView
        //     contentContainerStyle={{ flexGrow: 1 }}
        //     bounces={true}
        //     refreshControl={<RefreshControl
        //       refreshing={refreshing}
        //       onRefresh={onRefresh}
        //       //progressViewOffset={10}
        //       tintColor={'red'}
        //       title={'refresh'}
        //       titleColor={'green'}
        //     />}
        //   >
        //     <View style={styles.container}>
        //       <ImageBackground
        //       // source={require('/Users/mac/Desktop/projects/NewProject/NewProject/src/assets/tiny_logo.png')}
        //       //resizeMode='contain'
        //       //imageStyle={{ tintColor: 'yellow' }}
        //       // style={{ flex: 1, justifyContent: 'center' }}
        //       >

        //         <Text style={styles.textStyle}>Hellooo.......</Text>
        //         <Text style={styles.font}>First React Native App </Text>
        //         <Text style={styles.red}>just red</Text>
        //         <Text style={[styles.bigBlue, styles.red]}>{"just bigBlue"}{"\n"}</Text>
        //         <Text style={styles.bigBlue}>bigBlue, <Text style={styles.red}>then red</Text></Text>
        //         <Text style={styles.red}>red, <Text style={styles.bigBlue}>then bigBlue</Text></Text>
        //         <View style={{ flexDirection: "row" }}>

        //           <View style={{ backgroundColor: "blue", flex: 0.1, height: 100, padding: 10 }} />
        //           <View style={{ backgroundColor: "red", flex: 0.3, height: 100, }} />
        //           <Text>Hello World!!</Text>
        //         </View>

        //         <Text>
        //           <Text> First Part and </Text>
        //           <Text>Second Part</Text>
        //         </Text>
        //         <View>
        //           <Text> First Part and </Text>
        //           <Text>Second Part</Text>
        //         </View>
        //         <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
        //           <Text style={{ fontSize: 30 }}>70.00</Text>
        //           <Text>%</Text>
        //         </View>

        //         <View style={{ direction: 'rtl', flexDirection: 'row' }}>
        //           <View style={{ height: 30, width: 30, backgroundColor: 'pink' }}></View>
        //           <View style={{ height: 30, width: 50, backgroundColor: 'lightblue' }}></View>
        //           <View style={{ height: 30, width: 50, backgroundColor: 'skyblue' }}></View>
        //         </View>

        //         <View style={{ height: 50, width: '20%', backgroundColor: 'green', alignSelf: 'flex-start' }} />
        //         <Text>dfhg</Text>
        //         <View style={{ backgroundColor: 'lightgreen', flexDirection: 'row', alignContent: 'space-between', justifyContent: "space-between" }}>
        //           <View style={{ flexDirection: 'column', }}>
        //             <Text>First Column !!!!!! </Text>
        //             <Text>How ARe you !!!!!! </Text>
        //             <Text>Dhruvi</Text>
        //           </View>
        //           <View style={{ flexDirection: 'column' }}>
        //             <Text> second column!!!!!! </Text>
        //             <Text>How ARe you !!!!!! </Text>
        //             <Text>Dhruvi</Text>
        //           </View>
        //         </View>

        //         {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

        //     <View style={{ flexDirection: 'column', alignItems: 'center', }}>
        //       <View style={{ backgroundColor: 'red', width: 50, height: 50 }}></View>
        //       <View style={{ backgroundColor: 'blue', width: 50, height: 30 }}></View>
        //       <View style={{ backgroundColor: 'pink', width: 80, height: 30 }}></View>
        //       <View style={{ backgroundColor: 'skyblue', width: 50, height: 100 }}></View>
        //       <View style={{ backgroundColor: 'green', width: 100, height: 100 }}></View>

        //     </View>
        //     <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
        //       <View style={{ backgroundColor: 'blue', width: 50, height: 50 }}></View>
        //       <View style={{ backgroundColor: 'skyblue', width: 50, height: 70 }}></View>
        //       <View style={{ backgroundColor: 'green', width: 80, height: 30 }}></View>
        //       <View style={{ backgroundColor: 'blue', width: 80, height: 100 }}></View>

        //     </View>
        //   </View> */}

        //         {/* flexwarp  */}
        //         {/* <View style={{ height: 80 }}>

        //       <View style={{ flexWrap: 'wrap' }}>
        //         <View style={{ backgroundColor: 'red', width: 50, height: 50 }}></View>
        //         <View style={{ backgroundColor: 'blue', width: 50, height: 30 }}></View>
        //         <View style={{ backgroundColor: 'pink', width: 80, height: 30 }}></View>
        //         <View style={{ backgroundColor: 'skyblue', width: 50, height: 10 }}></View>
        //         <View style={{ backgroundColor: 'green', width: 100, height: 30 }}></View>
        //         <View style={{ backgroundColor: 'pink', width: 80, height: 30 }}></View>
        //         <View style={{ backgroundColor: 'skyblue', width: 50, height: 100 }}></View>

        //       </View>
        //     </View> */}
        //         {/* flexShrink,flexBasis,flexGrow */}
        //         <View style={{ flexDirection: 'row' }}>
        //           <View style={{ backgroundColor: 'red', height: 50, flexBasis: 50, flexGrow: 0, flexShrink: 0, }}>
        //           </View>
        //           <View style={{ backgroundColor: 'skyblue', height: 30, flexBasis: 40, flexGrow: 0, flexShrink: 0 }}></View>
        //         </View>

        //         <View >
        //           <View style={[styles.box, { backgroundColor: 'green', top: 10, left: 0, position: 'relative' }]}></View>
        //           <View style={[styles.box, { backgroundColor: 'lightgreen', top: 0, left: 50, position: 'relative' }]}></View>
        //           <View style={[styles.box, { backgroundColor: 'pink', top: 0, left: 30, position: 'relative' }]}></View>
        //         </View>

        //         <View flexDirection='row'>
        //           <Image style={styles.logo} source={require('/Users/mac/Desktop/projects/NewProject/NewProject/src/assets/tiny_logo.png')}></Image>
        //           <Image style={[styles.logo, { height: 100 }]} source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }}></Image>
        //           <Image style={styles.logo} source={{ uri: 'https://avatars.mds.yandex.net/i?id=270a181b5fe0310b7360bfba70dfe865ff2f7826-5530840-images-thumbs&n=13' }}></Image>
        //         </View>

        //         <TextInput style={{ backgroundColor: 'pink', width: '80%', borderBottomWidth: 2, borderBottomColor: 'red' }}
        //           keyboardType="default"
        //           multiline true
        //           maxLength={20}
        //           autoCapitalize='sentences'
        //           autoFocus true
        //           blurOnSubmit true
        //           cursorColor={'red'}

        //         />

        //         <Button
        //           title='Button'
        //           //color="#841584"
        //           onPress={() => Alert.alert('Simple Button Pressed !!')}
        //           accessibilityLabel='Learn More About this Button'
        //           //disabled
        //           //nextFocusUp={20}
        //           touchSoundDisabled
        //         />

        //         <Switch
        //           thumbColor={isEnabled ? 'red' : 'skyblue'}
        //           trackColor={{ false: 'yellow', true: 'green' }}
        //           onValueChange={toggleSwitch}
        //           ios_backgroundColor="#563eac"
        //           value={isEnabled}
        //         />

        //         <ActivityIndicator
        //           size={'small'}
        //           color="#fe34ac"
        //           animating='true'
        //         //hidesWhenStopped
        //         />

        //         <KeyboardAvoidingView
        //           behavior='position'
        //           // contentContainerStyle={{ backgroundColor: 'white' }}
        //           //enabled="false"
        //           keyboardVerticalOffset={50}
        //         >
        //           <TouchableWithoutFeedback
        //             onPress={Keyboard.dismiss}>
        //             <View style={{ padding: 20, marginBottom: 0, backgroundColor: '#F1F1F1' }}>
        //               <Text>Header</Text>
        //               <TextInput placeholder='UserName'></TextInput>
        //               <Button title='submit' onPress={() => null} />
        //             </View>
        //           </TouchableWithoutFeedback>
        //         </KeyboardAvoidingView>

        //         <View style={[styles.centeredView, { backgroundColor: 'red', marginBottom: 50 }]}>
        //           <Modal
        //             animationType='slide'
        //             transparent={true}
        //             visible={modalVisible}
        //             onRequestClose={() => {
        //               Alert.alert('Modal has not closed');
        //               setModalVisible(!modalVisible);
        //             }}
        //             presentationStyle='overFullScreen'
        //           //visible={false}
        //           >
        //             <View style={[styles.centeredView,]}>
        //               <View style={styles.modalView}>
        //                 <Text>Hello !!</Text>
        //                 <Pressable
        //                   onPress={() => setModalVisible(!modalVisible)}>
        //                   <Text>Hide</Text>
        //                 </Pressable>
        //               </View>
        //             </View>

        //           </Modal>
        //           <Pressable
        //             onPress={() => setModalVisible(true)}
        //             android_disableSound={true}
        //             unstable_pressDelay={10000}
        //           >
        //             <Text>Show Modal</Text>
        //           </Pressable>
        //         </View>

        //         <TouchableHighlight
        //           onPress={() => { null }}
        //           activeOpacity={1}
        //           underlayColor={'lightgreen'}
        //           style={{ padding: 10, backgroundColor: 'pink', marginBottom: 10 }}
        //         >
        //           <Text>Touchable Highlight</Text>
        //         </TouchableHighlight>

        //         <TouchableOpacity
        //           style={{ backgroundColor: 'green', padding: 10 }}
        //           activeOpacity={0.6}
        //         >
        //           <Text>Touchable Opacity</Text>
        //         </TouchableOpacity>

        //         <TouchableWithoutFeedback
        //           accessibilityIgnoresInvertColors={true}
        //           accessible={true}
        //           accessibilityLabel={'accessibility label'}
        //           accessibilityHint={'accessibility hint'}
        //           accessibilityRole={'link'}
        //           disabled={false}
        //         >
        //           <Text>TouchableWithoutFeedback</Text>
        //         </TouchableWithoutFeedback>
        //       </ImageBackground>

        //     </View>
        //     <FlatList
        //       data={DATA}
        //       renderItem={renderItem}
        //       keyExtractor={item => item.id}
        //       //initialNumToRender={3}
        //       //initialScrollIndex={3}
        //       extraData={selectedId}
        //       horizontal={false}
        //       //inverted={'true'}
        //       numColumns={3}
        //       progressViewOffset={4}
        //       refreshing={true}
        //     />

        //     <SectionList
        //       sections={DATA1}
        //       keyExtractor={(item, index) => item + index}
        //       renderItem={({ item }) => <Item1 title={item} />}
        //       renderSectionHeader={({ section: { title } }) => <Text style={{ color: 'red', fontSize: 20 }}>{title}</Text>}
        //       initialNumToRender={2}
        //       inverted={false}
        //       ListFooterComponent={<Text>Footer.....</Text>}
        //       ListHeaderComponent={<Text>Header...</Text>}
        //       onEndReachedThreshold={2}
        //     />

        //     <VirtualizedList
        //       data={DATA2}
        //       renderItem={({ item }) => <Item2 title={item.title} />}
        //       getItemCount={getItemCount}
        //       getItem={getItem}
        //     />
        //   </ScrollView>


        // </SafeAreaView >
    )
}
//{
//   return (
//     <View>
//       <Text>corecomponent</Text>
//     </View>
//   )
// }

export default Corecomponent

const styles = StyleSheet.create({

    container: {
        marginTop: 30,
        alignItems: 'center',
        flex: 1
    },
    textStyle: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 30
    },
    font: {
        fontSize: 20,
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        fontSize: 20,
        color: 'red',
        fontFamily: 'Cochin'
    },
    box: {
        width: 50,
        height: 50
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'cover',

    },
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
})