import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
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
        <p/>
        <Button
          title="Sorteio Megasena"
          onPress={() => {
            this.setState({
              n1: getRandomInt(1, 61),
              n2: getRandomInt(1, 61),
              n3: getRandomInt(1, 61),
              n4: getRandomInt(1, 61),
              n5: getRandomInt(1, 61),
              n6: getRandomInt(1, 61)
            })
          }}
        />
        <p/>
        <Button
          title="Limpar"
          onPress={() => {
            this.setState({
              n1: 0,
              n2: 0,
              n3: 0,
              n4: 0,
              n5: 0,
              n6: 0
            })
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