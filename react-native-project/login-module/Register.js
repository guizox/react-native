import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Madoka } from 'react-native-textinput-effects';
import AwesomeAlert from 'react-native-awesome-alerts';
import AwesomeButton from 'react-native-really-awesome-button';


export class Register extends React.Component {
  static navigationOptions = {
    title: 'Register'
  };

  constructor(props) {
    super(props);
    this.state = {
        email: '',
        senha: '',
        name: '',
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

  register = () => {
    url = "http://yfipassword.000webhostapp.com/server/YFiPassword/php/UserService.php?metodo=registrar&email=";
                  
    fetch(url + this.state.email + "&senha=" + this.state.senha + "&nome_completo="+this.state.name)
    .then((response) => response.json())
    .then((data) => {
        if (!data.result){
          this.setState(
            {
              
              label: 'Error',
              labelDesc: 'Cannot Create',
            } 
          );
        } else {
            this.setState(
              {
                label: 'Registered with sucess.',
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
    const {showAlert} = this.state;
    return (
        <View style={styles.container}>
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
                onChangeText={(senha)=> this.setState({senha : senha})}
            />
            <Madoka
                label={'Full Name'}
                borderColor={'#841584'}
                labelStyle={{ color: '#841584' }}
                inputStyle={{ color: '#841584' }}
                value={this.state.name}
                onChangeText={(name)=> this.setState({name : name})}
            />
            <AwesomeButton
                type="primary"
                backgroundColor="#841584"
                borderRadius= {10}
                onPress={() => this.register()}>
                Register
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