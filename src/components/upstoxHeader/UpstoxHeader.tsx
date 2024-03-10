import React from 'react';
import {Text, View} from 'react-native';
import {upstoxHeaderStyles as styles} from './UpstoxHeaderStyles';

type UpstoxHeaderProps = {
  title?: string;
};

function UpstoxHeader(props: UpstoxHeaderProps): React.JSX.Element {
  const {title = 'Upstox Holding'} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
}

export default UpstoxHeader;
