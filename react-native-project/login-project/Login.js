import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Madoka } from 'react-native-textinput-effects';
import AwesomeButton from 'react-native-really-awesome-button';
import AwesomeAlert from 'react-native-awesome-alerts';


export class Login extends React.Component {
    static navigationOptions = {
        title: 'Login'
    };

    constructor(props) {
       super(props);
       this.state = {
           email: '',
           senha: '',
           label: '',
           labelDesc: ''
       }
    }

    showAlert = () => {
        this.setState({
            showAlert: true
        });
    };
     
    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };
    
    login = () => {
        if (this.state.email === "" || this.state.senha === "") {
            this.setState(
                {
                    label: 'Error',
                    labelDesc: 'Please, fill the email and the password.',
                } 
            );
            this.showAlert();
            return;
        }
        url = "http://yfipassword.000webhostapp.com/server/YFiPassword/php/UserService.php?metodo=logar&email=";
        fetch(url + this.state.email + "&senha=" + this.state.senha)
        .then((response) => response.json())
        .then((data) => {
            console.log(JSON.stringify(data));
            if (!data[0]){
                this.setState(
                    {
                        label: 'Error',
                        labelDesc: 'User Not Found',
                    } 
                );
            } else {
                this.setState(
                    {   
                        label: 'User Found!',
                        labelDesc: 'Welcome to our system. ',
                    } 
                );
            }
            this.showAlert();
        })
        .catch((error) => {
            console.error(error);
        });
    }

  render() {

    let {navigate} = this.props.navigation;
    const {showAlert} = this.state;
    return (
        <View style={styles.container}>§
            <Madoka
                label={'Email Address'}
                borderColor={'#841584'}
                labelStyle={{ color: '#841584' }}
                inputStyle={{ color: '#841584' }}
                value={this.state.email}
                onChangeText={(email)=> this.setState({email : email})}
            />

            <Madoka
                label={'Password'}
                borderColor={'#841584'}
                labelStyle={{ color: '#841584' }}
                inputStyle={{ color: '#841584' }}
                secureTextEntry={true}
                value={this.state.senha}
                onChangeText={(senha)=>this.setState({senha})}
            />
            <AwesomeButton
                backgroundColor="#841584"
                borderRadius= {10}
                onPress={() => this.login()}>
                Login
            </AwesomeButton>

            <AwesomeButton
                type="primary"
                backgroundColor="#841584"
                
                borderRadius= {10}
                onPress={() => {
                    navigate('register');
                }}>
                Register
            </AwesomeButton>

            <AwesomeButton
                type="primary"
                backgroundColor="#841584"
                
                borderRadius= {10}
                onPress={() => {
                    navigate('forgot');
                }}>
                Forgot
            </AwesomeButton>
            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title={this.state.label}
                message={this.state.labelDesc}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Close it"
                confirmButtonColor="#DD6B55"
                onConfirmPressed={() => {
                    this.hideAlert();
                }}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      margin: 30,
    }
});