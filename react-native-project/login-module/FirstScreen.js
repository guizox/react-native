import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export class FirstScreen extends React.Component {
    static navigationOption = {
        title: 'first Screen'
    };
    render() {
        return (
            <View>
                <Button 
                    title="Press Me">
                </Button>
            </View>
        );
    }
}

