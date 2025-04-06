import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';

export const useStyles = () => {
  return StyleSheet.create({
    separator: {
      height: 1,
      backgroundColor: Colors.borderGray,
    },
  });
};
