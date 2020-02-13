import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [resultText, setResultText] = useState('');
  let operations = ['Del', '+', '-', '*', '/'];

  const calculateResult =() => {
    // setResultText()
  }
  const buttonPressed = text => {
    if (text === '=') {
      calculateResult();
    } else {
      setResultText(resultText + text);
    }
  };

  const operate = operation => {
    switch (operation) {
      case 'Del':
        let text = resultText.split('');
        text.pop();
        setResultText(text.join(''));
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = resultText.split('').pop();
        if(operations.indexOf(lastChar)>0) return;
        if(resultText === '') return;
        setResultText(resultText+operation)
    }
  };
  // const calculateResult
  let rows = [];
  let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['.', 0, '=']
  ];
  for (let i = 0; i < 4; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(
        <TouchableOpacity
          onPress={() => buttonPressed(nums[i][j])}
          style={styles.btn}
        >
          <Text style={styles.btnText}>{nums[i][j]}</Text>
        </TouchableOpacity>
      );
    }
    rows.push(<View style={styles.row}>{row}</View>);
  }

  let ops = [];
  for (let i = 0; i < 5; i++) {
    ops.push(
      <TouchableOpacity
        style={styles.btn}
        onPress={() => operate(operations[i])}
      >
        <Text style={(styles.btnText, styles.white)}>{operations[i]}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{resultText}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>122</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>{rows}</View>
        <View style={styles.operations}>{ops}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btnText: {
    fontSize: 30
  },
  white: {
    color: 'white'
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  resultText: {
    fontSize: 30,
    color: 'white'
  },
  calculationText: {
    fontSize: 24,
    color: 'white'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  result: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'red'
  },
  calculation: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'green'
  },
  buttons: {
    flexGrow: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow'
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: 'black'
  }
});
