import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Madoka } from 'react-native-textinput-effects';
import AwesomeAlert from 'react-native-awesome-alerts';
import AwesomeButton from 'react-native-really-awesome-button';

export class ForgotPassword extends React.Component {
  static navigationOptions = {
    title: 'Forgot Password'
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      showAlert: false,
      label: 'Error',
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

  getPassword = () => {
    url = "http://yfipassword.000webhostapp.com/server/YFiPassword/php/UserService.php?metodo=esqueci&email=";
                  
    fetch(url + this.state.email)
    .then((response) => response.json())
    .then((data) => {
        if (!data[0]){
          this.setState(
            {
              labelDesc: 'User not found.',
              label: 'Error'
            } 
          );
        } else {
            this.setState(
              {
                labelDesc: data[0].senha,
                label: 'Your password is : '
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
            <AwesomeButton
                type="primary"
                backgroundColor="#841584"
                borderRadius= {10}
                onPress={() => this.getPassword()}>
                Get Password
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
