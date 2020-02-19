import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Header from './src/components/header';

export default class SimpleCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = { input1: '', input2: '', result: '' };

    this.sum = this.sum.bind(this);
    this.sub = this.sub.bind(this);
    this.mul = this.mul.bind(this);
    this.div = this.div.bind(this);


  }
  sum() {
    number1 = parseFloat(this.state.input1);
    number2 = parseFloat(this.state.input2);

    result = number1 + number2;
    this.setState({
      result: result
    })
  }
  sub() {
    number1 = parseFloat(this.state.input1);
    number2 = parseFloat(this.state.input2);

    result = number1 - number2;
    this.setState({
      result: result
    })
  }
  mul() {
    number1 = parseFloat(this.state.input1);
    number2 = parseFloat(this.state.input2);

    result = number1 * number2;
    this.setState({
      result: result
    })
  }

  div() {
    number1 = parseFloat(this.state.input1);
    number2 = parseFloat(this.state.input2);

    result = number1 / number2;
    this.setState({
      result: result
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <View style={styles.contentWrapper}>
          <TextInput style={styles.input}
            placeholder="First Number"
            onChangeText={(text) => {
              this.setState({
                input1: text
              })
            }}
            value={this.state.input1}
          />
          <Text style={styles.sampleText}>First Number: {this.state.input1} </Text>
          <View style={styles.buttonWrapper}>
            <Button onPress={this.sum}
              color='#841584'
              title='+'
            />
            <Button onPress={this.sub}
              color='#841584'
              title='-'
            />
            <Button onPress={this.mul}
              color='#841584'
              title='*'
            />
            <Button onPress={this.div}
              color='#841584'
              title='/'
            />
          </View>

          <TextInput style={styles.input}
            placeholder="Second Number"
            onChangeText={(text) => {
              this.setState({
                input2: text
              })
            }}
            value={this.state.input2}
          />

          <Text style={styles.sampleText}>First Number: {this.state.input2} </Text>

          <Text style={styles.result}>Result: {this.state.result}</Text>


        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  contentWrapper: {
    padding: 20,
    flexDirection: "column",
    justifyContent: "center"
  },
  input: {
    height: 40
  },
  sampleText: {
    height: 30,
    fontSize: 14
  },
  result: {
    height: 40,
    fontSize: 20
  },

  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-around"
  }
});
/*
🍕

*/