import React, { memo } from 'react';
import { View } from 'react-native';
import { useStyles } from './styles';

const Separator = () => {
  const styles = useStyles();
  return <View style={styles.separator} />;
};

export default memo(Separator);
