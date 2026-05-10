import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import createStyles from './styles';

const topRows = [
  ['AC', '⌫', '/', 'x'],
  ['7', '8', '9', '-'],
];

const middleRows = [
  ['4', '5', '6'],
  ['1', '2', '3'],
];

const bottomRow = ['0', '.', '='];
const operators = ['+', '-', 'x', '/'];

const parseDisplay = (value) => Number(String(value).replace(/,/g, ''));

const formatNumber = (value) => {
  if (!Number.isFinite(value)) return 'Error';
  const rounded = Number(value.toFixed(10));
  return rounded.toLocaleString('en-US', { maximumFractionDigits: 10 });
};

const calculate = (left, right, op) => {
  if (op === '+') return left + right;
  if (op === '-') return left - right;
  if (op === 'x') return left * right;
  if (op === '/') return right === 0 ? NaN : left / right;
  return right;
};

function App() {
  const { width, height } = useWindowDimensions();
  const styles = useMemo(() => createStyles(width, height), [width, height]);

  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [pendingOp, setPendingOp] = useState(null);
  const [waitingForNext, setWaitingForNext] = useState(false);
  const [history, setHistory] = useState('');

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setPendingOp(null);
    setWaitingForNext(false);
    setHistory('');
  };

  const addNumber = (number) => {
    if (display === 'Error' || waitingForNext) {
      setDisplay(number);
      setWaitingForNext(false);
      return;
    }

    setDisplay((current) => {
      if (current === '0') return number;
      if (current.replace(/[^0-9]/g, '').length >= 12) return current;
      return `${current}${number}`;
    });
  };

  const addDecimal = () => {
    if (display === 'Error' || waitingForNext) {
      setDisplay('0.');
      setWaitingForNext(false);
      return;
    }

    setDisplay((current) => (current.includes('.') ? current : `${current}.`));
  };

  const backspace = () => {
    if (display === 'Error' || waitingForNext || display.length === 1) {
      setDisplay('0');
      setWaitingForNext(false);
      return;
    }

    setDisplay((current) => current.slice(0, -1) || '0');
  };

  const chooseOperator = (nextOp) => {
    if (display === 'Error') {
      clear();
      return;
    }

    const current = parseDisplay(display);

    if (previousValue !== null && pendingOp && !waitingForNext) {
      const result = calculate(previousValue, current, pendingOp);
      const formatted = formatNumber(result);

      setDisplay(formatted);
      setPreviousValue(parseDisplay(formatted));
      setHistory(`${formatted} ${nextOp}`);
    } else {
      setPreviousValue(current);
      setHistory(`${formatNumber(current)} ${nextOp}`);
    }

    setPendingOp(nextOp);
    setWaitingForNext(true);
  };

  const showResult = () => {
    if (pendingOp === null || previousValue === null || waitingForNext) return;

    const current = parseDisplay(display);
    const result = calculate(previousValue, current, pendingOp);
    const formatted = formatNumber(result);

    setHistory(`${formatNumber(previousValue)} ${pendingOp} ${formatNumber(current)} =`);
    setDisplay(formatted);
    setPreviousValue(null);
    setPendingOp(null);
    setWaitingForNext(true);
  };

  const handlePress = (value) => {
    if (/^\d+$/.test(value)) return addNumber(value);
    if (value === '.') return addDecimal();
    if (value === 'AC') return clear();
    if (value === '⌫') return backspace();
    if (value === '=') return showResult();
    if (operators.includes(value)) return chooseOperator(value);
    return null;
  };

  const getButtonStyle = (button) => [
    styles.button,
    button === '=' && styles.equalWideButton,
    button === '+' && styles.plusTallButton,
    operators.includes(button) && styles.operatorButton,
    button === '=' && styles.equalButton,
    button === 'AC' && styles.clearButton,
  ];

  const getButtonTextStyle = (button) => [
    styles.buttonText,
    operators.includes(button) && styles.operatorText,
    button === '=' && styles.equalText,
    button === 'AC' && styles.clearText,
  ];

  const renderButton = (button) => (
    <TouchableOpacity
      key={button}
      style={getButtonStyle(button)}
      activeOpacity={0.78}
      onPress={() => handlePress(button)}
    >
      <Text style={getButtonTextStyle(button)}>{button}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor="#10131a" />

      <View style={styles.calculator}>
        <Text style={styles.title}>Calculator</Text>

        <View style={styles.displayCard}>
          <Text style={styles.historyText} numberOfLines={1} adjustsFontSizeToFit>
            {history || ' '}
          </Text>
          <Text style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit>
            {display}
          </Text>
        </View>

        <View style={styles.keypad}>
          {topRows.map((row) => (
            <View key={row.join('')} style={styles.row}>
              {row.map(renderButton)}
            </View>
          ))}

          <View style={styles.tallOperatorGroup}>
            <View style={styles.middleRows}>
              {middleRows.map((row) => (
                <View key={row.join('')} style={styles.row}>
                  {row.map(renderButton)}
                </View>
              ))}
            </View>
            {renderButton('+')}
          </View>

          <View style={styles.row}>{bottomRow.map(renderButton)}</View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
