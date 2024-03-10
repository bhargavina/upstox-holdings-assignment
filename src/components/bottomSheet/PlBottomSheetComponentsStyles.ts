import {StyleSheet} from 'react-native';
import {colors} from '../../theme/Colors';

export const plBottomSheetComponentsStyles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomSheetHeading: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 18,
  },
  bottomSheetValueContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginStart: 16,
  },
  bottomSheetValueText: {
    color: colors.black,
  },
});
