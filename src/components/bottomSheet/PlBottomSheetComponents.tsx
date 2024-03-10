import React from 'react';
import {View, Text, Animated} from 'react-native';
import {formatAmount} from '../../utils/Currency';
import {plBottomSheetComponentsStyles as styles} from './PlBottomSheetComponentsStyles';

type HiddenComponentProps = {
  totalCurrentValue: number;
  totalInvestmentValue: number;
  todayPAndL: number;
  totalPlValue: number;
};

export function HiddenComponent(
  props: HiddenComponentProps,
): React.JSX.Element {
  const {
    totalCurrentValue = 0,
    totalInvestmentValue = 0,
    todayPAndL = 0,
  } = props;
  return (
    <>
      <View style={styles.rowContainer}>
        <Text style={styles.bottomSheetHeading}>Current Value:</Text>
        <View style={styles.bottomSheetValueContainer}>
          <Text style={styles.bottomSheetValueText}>
            {` ${formatAmount(totalCurrentValue)}`}
          </Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.bottomSheetHeading}>Total Investment:</Text>
        <View style={styles.bottomSheetValueContainer}>
          <Text style={styles.bottomSheetValueText}>
            {` ${formatAmount(totalInvestmentValue)}`}
          </Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.bottomSheetHeading}>
          {"Today's Profit & Loss:"}
        </Text>
        <View style={styles.bottomSheetValueContainer}>
          <Text style={styles.bottomSheetValueText}>
            {` ${formatAmount(todayPAndL)}`}
          </Text>
        </View>
      </View>
    </>
  );
}

type VisibleComponentProps = {
  totalPlValue: number;
};

export function VisibleComponent(props: VisibleComponentProps) {
  const {totalPlValue} = props;
  return (
    <Animated.View style={[styles.rowContainer, {marginTop: 16}]}>
      <Text style={styles.bottomSheetHeading}>Profit & Loss:</Text>
      <View style={styles.bottomSheetValueContainer}>
        <Text style={styles.bottomSheetValueText}>
          {` ${formatAmount(totalPlValue)}`}
        </Text>
      </View>
    </Animated.View>
  );
}
