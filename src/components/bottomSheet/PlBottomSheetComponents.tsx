import React from 'react';
import {View, Text} from 'react-native';
import {formatAmount} from '../../utils/Currency';
import {plBottomSheetComponentsStyles as styles} from './PlBottomSheetComponentsStyles';
import {messages} from '../../i18n/en';

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
        <Text style={styles.bottomSheetHeading}>{messages.currentValue}</Text>
        <View style={styles.bottomSheetValueContainer}>
          <Text style={styles.bottomSheetValueText}>
            {formatAmount(totalCurrentValue)}
          </Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.bottomSheetHeading}>
          {messages.totalInvestment}
        </Text>
        <View style={styles.bottomSheetValueContainer}>
          <Text style={styles.bottomSheetValueText}>
            {formatAmount(totalInvestmentValue)}
          </Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.bottomSheetHeading}>
          {messages.todaysProfitAndLoss}
        </Text>
        <View style={styles.bottomSheetValueContainer}>
          <Text style={styles.bottomSheetValueText}>
            {formatAmount(todayPAndL)}
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
    <View style={[styles.rowContainer, styles.profitAndLossContainer]}>
      <Text style={styles.bottomSheetHeading}>{messages.profitAndLoss}</Text>
      <View style={styles.bottomSheetValueContainer}>
        <Text style={styles.bottomSheetValueText}>
          {formatAmount(totalPlValue)}
        </Text>
      </View>
    </View>
  );
}
