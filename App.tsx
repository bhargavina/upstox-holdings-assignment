import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import HoldingItem from './src/components/holdingItem/HoldingItem';
import UpstoxHeader from './src/components/upstoxHeader/UpstoxHeader';
import BottomSheet from './src/components/bottomSheet/BottomSheet';
import {colors} from './src/theme/Colors';
import {useStocks} from './useStocks';
import {
  HiddenComponent,
  VisibleComponent,
} from './src/components/bottomSheet/PlBottomSheetComponents';

export type HoldingItem = {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number;
};

function App(): React.JSX.Element {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const {
    isLoading,
    stocksList,
    totalCurrentValue,
    totalPlValue,
    totalInvestmentValue,
    todayPAndL,
  } = useStocks();

  function onHandlePress() {
    setIsBottomSheetOpen(prev => !prev);
  }

  if (isLoading) {
    return (
      <SafeAreaView>
        <StatusBar />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <UpstoxHeader />
      <FlatList
        data={stocksList}
        renderItem={({item}: {item: HoldingItem}) => (
          <HoldingItem
            symbol={item.symbol}
            close={item.close}
            averagePrice={item.avgPrice}
            quantity={item.quantity}
            ltp={item.ltp}
          />
        )}
        keyExtractor={(item: HoldingItem) => item.symbol}
      />
      <BottomSheet
        isOpen={isBottomSheetOpen}
        onHandlePress={onHandlePress}
        HiddenComponent={
          <HiddenComponent
            totalCurrentValue={totalCurrentValue}
            totalInvestmentValue={totalInvestmentValue}
            todayPAndL={todayPAndL}
            totalPlValue={totalPlValue}
          />
        }
        VisibleComponent={<VisibleComponent totalPlValue={totalPlValue} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: colors.darkGrey,
  },
});

export default App;
