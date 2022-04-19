import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      texto: "Texto inicial",
      n1: 0,
      n2: 0,
      n3: 0,
      n4: 0,
      n5: 0,
      n6: 0
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>{this.state.n1}</Text>
        <Text>{this.state.n2}</Text>
        <Text>{this.state.n3}</Text>
        <Text>{this.state.n4}</Text>
        <Text>{this.state.n5}</Text>
        <Text>{this.state.n6}</Text>
        <Button
          title="OK"
          onPress={() => {
            this.setState({n1: this.state.n1 + 1})
            this.setState({n2: this.state.n2 +2})
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});