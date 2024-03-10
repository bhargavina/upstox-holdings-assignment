import React from 'react';
import {Text, View} from 'react-native';
import {holdingItemStyles as styles} from './HoldingItemStyles';
import {formatAmount} from '../../utils/Currency';
import {messages} from '../../i18n/en';

type HoldingItemProps = {
  symbol: string;
  quantity: number;
  ltp: number;
  averagePrice: number;
  close?: number;
};

function HoldingItem(props: HoldingItemProps): React.JSX.Element {
  const {symbol = '', quantity = 0, ltp = 0, averagePrice = 0} = props;

  const currentValue = ltp * quantity;

  const investmentValue = averagePrice * quantity;

  const plValue = currentValue - investmentValue;

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.row1Container}>
          <View style={styles.symbolContainer}>
            <Text style={styles.symbolText}>{symbol.toUpperCase()}</Text>
          </View>
          <View style={styles.ltpContainer}>
            <Text style={styles.ltpText}>{messages.ltp}</Text>
            <Text style={styles.ltpNumText}>{formatAmount(ltp)}</Text>
          </View>
        </View>
        <View style={styles.row2Container}>
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityText}>{quantity}</Text>
          </View>
          <View style={styles.plContainer}>
            <Text style={styles.plText}>{messages.pAndL}</Text>
            <Text style={styles.plValueText}>{formatAmount(plValue)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default HoldingItem;
