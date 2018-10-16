import React from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet,
    TextInput,
    Text,
    Button,
    View,
} from 'react-native';

// TODO: Create custom button component
export default class IdentificationScreen extends React.Component {
    render() {
        const {
            container,
            textStyle,
            textInputStyle,
            textInputContainer,
            startButoonContainer,
            skipButoonContainer,
        } = styles;
        return (
            <KeyboardAvoidingView style={container} behavior="padding" enabled>
                <Text style={textStyle}>
                    Enter your identification code. Please feel free to skip if you don&apos;t have.
                </Text>
                <View style={textInputContainer}>
                    <TextInput style={textInputStyle} underlineColorAndroid="rgba(0,0,0,0)" />
                </View>
                <View style={startButoonContainer}>
                    <Button
                        onPress={() => console.debug('hello')}
                        title="START"
                        color="#12806a"
                    />
                </View>
                <View style={skipButoonContainer}>
                    <Button
                        onPress={() => console.debug('hello')}
                        title="I don't have a code"
                        color="#5b5b5b"
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    textStyle: {
        fontSize: 20,
        color: '#000',
        alignSelf: 'center',
        textAlign: 'center',
    },
    textInputContainer: {
        marginTop: 10,
        height: 40,
    },
    textInputStyle: {
        height: 40,
        fontSize: 20,
        paddingHorizontal: 10,
        color: '#000',
        borderWidth: 1,
        borderColor: '#12806a',
    },
    buttonStyle: {
        height: 80,
        borderColor: 'transparent',
    },
    startButoonContainer: {
        marginTop: 10,
    },
    skipButoonContainer: {
        marginTop: 10,
    },
});
