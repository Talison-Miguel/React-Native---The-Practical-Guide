import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    const [ enteredGoalText, setEnteredGoalText ] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler() {
        console.log(enteredGoalText)
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder='Your Gols' onChangeText={goalInputHandler}/>
                <View style={styles.buttonContainer}>
                    <Button title='Add Gol' onPress={addGoalHandler}/>
                </View>
            </View>
            <View style={styles.goalsContainer}>
                <Text>List of gols</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 50,
        paddingHorizontal: 16,
        flex: 1,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        height: 40
    },
    textInput: {
        borderWidth: 1,
        borderColor:'#cccccc',
        width: '80%',
        height: 40,
        marginRight: 8,
        padding: 8
    },
    buttonContainer: {
        alignSelf: 'center',
        justifyContent: 'center', 
    },
    goalsContainer: {
        flex: 4,
    }
});