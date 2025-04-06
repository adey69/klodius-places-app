import { StyleSheet } from 'react-native';
import { Alignment, Colors } from '../../theme';

export const useStyles = () => {
  return StyleSheet.create({
    container: { flex: 1 },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -10,
    },
    details: { padding: 10, fontSize: 16 },
    detailsContainer: {
      ...Alignment.Plarge,
      backgroundColor: Colors.white,
    },
  });
};
