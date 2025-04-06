import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';

interface ListEmptyViewProps {
  message: string;
}

const ListEmptyView: React.FC<ListEmptyViewProps> = ({ message }) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default memo(ListEmptyView);
