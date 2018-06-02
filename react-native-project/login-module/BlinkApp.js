import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class Blink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isShowingText: true};

        // Toggle the state every second
        /*setInterval(() => {
        this.setState(previousState => {
            return { isShowingText: !previousState.isShowingText };
        });
        }, 1000);*/
    }

    render() {
        let display = this.state.isShowingText ? this.props.text : ' ';
        return (
        <Text>{display}</Text>
        );
    }
}

export class BlinkApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isShowingView: true
        }

        onButtonPress = () => {
            this.setState(previousState => {
                return {
                    isShowingView: !previousState.isShowingView
                };
            })
        };
    }


    render() {
        let display = this.state.isShowingView ? this.props.text : ' ';
        return (
            <View>
                <View> { display }
                    <Blink text='I love to blink' />
                    <Blink text='Yes blinking is so great' />
                    <Blink text='Why did they ever take this out of HTML' />
                    <Blink text='Look at me look at me look at me' />
                </View>
                <Button 
                    onPress={
                        () => {
                            onButtonPress();
                        }
                    }
                    title="Press Me"
                />
            </View>
        );
    }
}