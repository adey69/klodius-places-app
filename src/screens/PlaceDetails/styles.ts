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
    details: { ...Alignment.MLsmall, fontSize: 16, fontWeight: '400' },
    detailLabel: { ...Alignment.Psmall, fontSize: 16, fontWeight: 'bold' },
    detailsContainer: {
      ...Alignment.Plarge,
      backgroundColor: Colors.white,
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
      shadowColor: Colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    centeredContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
