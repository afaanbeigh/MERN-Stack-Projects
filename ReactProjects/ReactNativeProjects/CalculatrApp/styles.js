import { Platform, StyleSheet } from 'react-native';

const createStyles = (width, height) => {
  const shortestSide = Math.min(width, height);
  const isTablet = shortestSide >= 768;
  const isCompact = height < 700;
  const pagePadding = isTablet ? 32 : 16;
  const cardWidth = Math.min(width - pagePadding * 2, isTablet ? 430 : 390);
  const cardPadding = isTablet ? 24 : 18;
  const gap = isTablet ? 12 : 9;
  const buttonSize = Math.floor((cardWidth - cardPadding * 2 - gap * 3) / 4);

  const fonts = {
    title: Platform.select({ ios: 'Helvetica Neue', android: 'sans-serif-medium', default: 'sans-serif' }),
    body: Platform.select({ ios: 'Helvetica Neue', android: 'sans-serif', default: 'sans-serif' }),
  };

  return StyleSheet.create({
    screen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: pagePadding,
      paddingVertical: isCompact ? 14 : 24,
      backgroundColor: '#10131a',
    },
    calculator: {
      width: cardWidth,
      padding: cardPadding,
      borderWidth: 1,
      borderColor: '#2f3747',
      borderRadius: 30,
      backgroundColor: '#171b24',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 18 },
      shadowOpacity: 0.3,
      shadowRadius: 24,
      elevation: 14,
    },
    title: {
      marginBottom: isCompact ? 14 : 18,
      color: '#f8fafc',
      fontFamily: fonts.title,
      fontSize: isTablet ? 30 : 25,
      fontWeight: '800',
      textAlign: 'center',
    },
    displayCard: {
      minHeight: isCompact ? 116 : 142,
      justifyContent: 'flex-end',
      marginBottom: isCompact ? 16 : 22,
      paddingHorizontal: isTablet ? 22 : 18,
      paddingVertical: isTablet ? 18 : 16,
      borderWidth: 1,
      borderColor: '#283142',
      borderRadius: 22,
      backgroundColor: '#0c111c',
    },
    historyText: {
      minHeight: 24,
      marginBottom: 8,
      color: '#8b95a7',
      fontFamily: fonts.body,
      fontSize: isTablet ? 18 : 15,
      textAlign: 'right',
    },
    displayText: {
      color: '#ffffff',
      fontFamily: fonts.body,
      fontSize: Math.max(42, Math.min(58, buttonSize * 0.78)),
      fontWeight: '800',
      textAlign: 'right',
    },
    keypad: {
      gap,
    },
    row: {
      flexDirection: 'row',
      gap,
    },
    tallOperatorGroup: {
      flexDirection: 'row',
      gap,
    },
    middleRows: {
      gap,
    },
    button: {
      width: buttonSize,
      height: buttonSize,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#323b4d',
      borderRadius: Math.max(18, buttonSize * 0.28),
      backgroundColor: '#242b38',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.22,
      shadowRadius: 8,
      elevation: 7,
    },
    equalWideButton: {
      width: buttonSize * 2 + gap,
    },
    plusTallButton: {
      height: buttonSize * 2 + gap,
    },
    operatorButton: {
      borderColor: '#f3b13f',
      backgroundColor: '#f0a928',
    },
    equalButton: {
      borderColor: '#54d2ff',
      backgroundColor: '#22b8f0',
    },
    clearButton: {
      borderColor: '#596274',
      backgroundColor: '#dce4f0',
    },
    buttonText: {
      color: '#f8fafc',
      fontFamily: fonts.body,
      fontSize: Math.max(22, Math.min(30, buttonSize * 0.36)),
      fontWeight: '700',
      includeFontPadding: false,
    },
    operatorText: {
      color: '#21170a',
      fontWeight: '900',
    },
    equalText: {
      color: '#031722',
      fontWeight: '900',
    },
    clearText: {
      color: '#1f2937',
      fontWeight: '900',
    },
  });
};

export default createStyles;
