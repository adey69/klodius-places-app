import React, { memo } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { useStyles } from './styles';
import { Colors } from '../../theme';

interface ListEmptyViewProps {
  message: string;
  isLoading?: boolean;
}

const ListEmptyView: React.FC<ListEmptyViewProps> = ({
  message,
  isLoading,
}) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.grayText} />
      ) : (
        <Text style={styles.message}>{message}</Text>
      )}
    </View>
  );
};

export default memo(ListEmptyView);
