import React from 'react';
import {Pressable, View} from 'react-native';
import {bottomSheetStyles as styles} from './BottomSheetStyles';

type BottomSheetProps = {
  HiddenComponent: React.JSX.Element;
  VisibleComponent: React.JSX.Element;
  isOpen: boolean;
  onHandlePress: () => void;
};

function BottomSheet(props: BottomSheetProps): React.JSX.Element {
  const {
    isOpen = false,
    HiddenComponent = null,
    VisibleComponent = null,
    onHandlePress = () => null,
  } = props;

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.handleContainer}
        onPress={onHandlePress}
        pressRetentionOffset={{bottom: 16, top: 16, left: 16, right: 16}}>
        <View style={isOpen ? styles.openHandle : styles.closeHandle} />
      </Pressable>
      {isOpen ? HiddenComponent : null}
      {VisibleComponent}
    </View>
  );
}

export default BottomSheet;
