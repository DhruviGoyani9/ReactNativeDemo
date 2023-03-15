import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState, useContext, useReducer } from 'react'


const themes = {
    light: {
        foreground: 'yellow',
        background: "green"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

const ThemeContext = React.createContext(themes.light);

function Toolbar(props) {
    return (
        <View>
            <ThemedButton />
        </View>
    );
}

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        <Button style={{ background: 'yellow', color: 'red' }} title='I am styled by theme context!'>

        </Button>
    );
}

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

const secondScreen = () => {

}

const Hooks = () => {

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    // const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        setCalculation(() => count * 2)
    }, [count])
    return (
        <SafeAreaView>
            <View>
                <Text>Hooks</Text>
                <Text> count: {count}</Text>
                <Button onPress={() => setCount(0)} title='Reset'></Button>
                <Button title='-' onPress={() => setCount(prevCount => prevCount - 1)} />
                <Button title='+' onPress={() => setCount(prevCount => prevCount + 1)} />
                <Text>calculation: {calculation}</Text>


                {/* <ThemeContext.Provider value={themes.dark}>
                    <Toolbar />
                </ThemeContext.Provider> */}

                {/* Count: {state.count}
                <Button title='+' onPress={() => dispatch({ type: 'increment' })} />
                <Button title='-' onPress={() => dispatch({ type: 'decrement' })} /> */}
            </View>
        </SafeAreaView>
    )
}

export default Hooks

const styles = StyleSheet.create({})