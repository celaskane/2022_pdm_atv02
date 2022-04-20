import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function randomNoRepeats(array) {
  var copy = array.slice(0);
  return function() {
    if (copy.length < 1) { copy = array.slice(0); }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}
var chooser = randomNoRepeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                              11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                              21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                              31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                              41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                              51, 52, 53, 54, 55, 56, 57, 58, 59, 60]);

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
              n1: chooser(),
              n2: chooser(),
              n3: chooser(),
              n4: chooser(),
              n5: chooser(),
              n6: chooser()
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