import { StyleSheet } from 'react-native';
import { Alignment, Colors } from '../../theme';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      ...Alignment.PVlarge,
    },
    message: {
      fontSize: 16,
      color: Colors.grayText,
      textAlign: 'center',
    },
  });
};
