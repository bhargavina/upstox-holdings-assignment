import {StyleSheet} from 'react-native';
import {colors} from '../../theme/Colors';

export const bottomSheetStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 16,
    backgroundColor: colors.white,
    borderRadius: 16,
  },
  handleContainer: {
    alignItems: 'center',
  },
  closeHandle: {
    width: 0,
    height: 0,
    borderBottomColor: colors.primary,
    borderLeftColor: colors.white,
    borderRightColor: colors.white,
    borderBottomWidth: 20,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 2,
  },
  openHandle: {
    width: 0,
    height: 0,
    borderTopColor: colors.primary,
    borderLeftColor: colors.white,
    borderRightColor: colors.white,
    borderTopWidth: 20,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2,
  },
});
