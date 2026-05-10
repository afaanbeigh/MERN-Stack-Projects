import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from '../styles/AppStyles';

function convertTemperature(value, from, to) {
  let celsius = value;

  if (from === 'Fahrenheit') {
    celsius = (value - 32) * (5 / 9);
  }

  if (from === 'Kelvin') {
    celsius = value - 273.15;
  }

  if (to === 'Fahrenheit') {
    return celsius * (9 / 5) + 32;
  }

  if (to === 'Kelvin') {
    return celsius + 273.15;
  }

  return celsius;
}

function formatNumber(value) {
  if (value === null || Number.isNaN(value)) {
    return '';
  }

  if (Math.abs(value) >= 100000000 || (Math.abs(value) < 0.0001 && value !== 0)) {
    return value.toExponential(4);
  }

  return Number(value.toFixed(6)).toString();
}

function getUnitNames(category) {
  return category.isTemperature ? category.units : Object.keys(category.units);
}

function ConverterCard({ category }) {
  const unitNames = useMemo(() => getUnitNames(category), [category]);
  const [amount, setAmount] = useState('');
  const [fromUnit, setFromUnit] = useState(unitNames[0]);
  const [toUnit, setToUnit] = useState(unitNames[1] || unitNames[0]);
  const [result, setResult] = useState('');

  React.useEffect(() => {
    const nextUnits = getUnitNames(category);
    setAmount('');
    setFromUnit(nextUnits[0]);
    setToUnit(nextUnits[1] || nextUnits[0]);
    setResult('');
  }, [category]);

  const numericAmount = Number(amount);
  const canConvert = amount.trim() !== '' && !Number.isNaN(numericAmount);

  function calculateConversion() {
    if (category.isTemperature) {
      return convertTemperature(numericAmount, fromUnit, toUnit);
    }

    const baseValue = numericAmount * category.units[fromUnit];
    return baseValue / category.units[toUnit];
  }

  function swapUnits() {
    setFromUnit(toUnit);
    setToUnit(fromUnit);

    if (result) {
      setAmount(result);
    }

    setResult('');
  }

  function convertUnits() {
    if (!canConvert) {
      return;
    }

    setResult(formatNumber(calculateConversion()));
  }

  return (
    <View style={styles.converterWrap}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle} numberOfLines={1} adjustsFontSizeToFit>
            {category.label}
          </Text>
          <View style={[styles.accentDot, { backgroundColor: category.accent }]} />
        </View>

        <Text style={styles.fieldLabel}>Amount</Text>
        <TextInput
          value={amount}
          onChangeText={(value) => {
            setAmount(value);
            setResult('');
          }}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor="#94A3B8"
          returnKeyType="done"
          style={styles.input}
        />

        <Text style={styles.fieldLabel}>From</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.unitScrollContent}
        >
          {unitNames.map((unit) => (
            <TouchableOpacity
              key={unit}
              style={[
                styles.unitChip,
                fromUnit === unit && styles.unitChipActive,
              ]}
              onPress={() => {
                setFromUnit(unit);
                setResult('');
              }}
              activeOpacity={0.75}
            >
              <Text
                style={[
                  styles.unitChipText,
                  fromUnit === unit && styles.unitChipTextActive,
                ]}
              >
                {unit}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.swapRow}>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.swapButton} onPress={swapUnits}>
            <Text style={styles.swapButtonText}>Swap</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
        </View>

        <Text style={styles.fieldLabel}>To</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.unitScrollContent}
        >
          {unitNames.map((unit) => (
            <TouchableOpacity
              key={unit}
              style={[
                styles.unitChip,
                toUnit === unit && styles.unitChipActive,
              ]}
              onPress={() => {
                setToUnit(unit);
                setResult('');
              }}
              activeOpacity={0.75}
            >
              <Text
                style={[
                  styles.unitChipText,
                  toUnit === unit && styles.unitChipTextActive,
                ]}
              >
                {unit}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.resultPanel}>
          <Text style={styles.resultLabel}>Result</Text>
          <Text
            style={styles.resultValue}
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.7}
          >
            {result || '0'}
          </Text>
          {result ? (
            <Text style={styles.resultCaption}>
              {`${amount} ${fromUnit} = ${result} ${toUnit}`}
            </Text>
          ) : null}
        </View>

        <TouchableOpacity
          style={[styles.primaryButton, !canConvert && styles.primaryButtonDisabled]}
          disabled={!canConvert}
          onPress={convertUnits}
          activeOpacity={0.8}
        >
          <Text style={styles.primaryButtonText}>Convert</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ConverterCard;
