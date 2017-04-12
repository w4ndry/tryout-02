import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules,
} from 'react-native';

const TodoModule = NativeModules.TodoApp;

export default class TodoApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: 'Your Todo'
    }
  }

  speechtotext(){
    TodoModule.start()
    .then(resp =>{
      this.setState({ text: resp });
    })
    .catch(err => console.log('err', err))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          My Todo
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => this.speechtotext()}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Press to write</Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>
           {this.state.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 3,
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TodoApp', () => TodoApp);
