import {StyleSheet} from 'react-native';
import {colors} from '../../theme/Colors';

export const holdingItemStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,

    backgroundColor: colors.white,
  },
  innerContainer: {
    paddingVertical: 12,
    borderColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  row1Container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  symbolContainer: {},
  symbolText: {
    fontWeight: 'bold',
    color: colors.black,
  },
  ltpContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  ltpText: {
    color: colors.black,
  },
  ltpNumText: {
    fontWeight: 'bold',
    color: colors.black,
  },
  row2Container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityContainer: {},
  quantityText: {color: colors.black},
  plContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  plText: {
    color: colors.black,
  },
  plValueText: {
    fontWeight: 'bold',
    color: colors.black,
  },
});
