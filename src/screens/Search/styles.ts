import { StyleSheet } from 'react-native';
import { Alignment, Colors } from '../../theme';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      ...Alignment.PTlarge,
      ...Alignment.PHmedium,
      backgroundColor: Colors.white,
    },
    inputContainer: {
      ...Alignment.PRsmall,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: Colors.borderGray,
      borderRadius: 8,
    },
    input: {
      ...Alignment.PHsmall,
      height: 40,
    },
    inputContainerFocused: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    predictionItem: {
      ...Alignment.PHsmall,
      paddingVertical: 12,
    },
    predictionText: {
      fontSize: 16,
    },
    listContainer: {
      position: 'absolute',
      top: 40,
      left: 0,
      right: 0,
      zIndex: 10,
    },
    listContentContainer: {
      backgroundColor: Colors.white,
      borderWidth: 1,
      borderTopWidth: 0,
      borderColor: Colors.borderGray,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      ...Alignment.PTsmall,
    },
    inputFocusedListContainer: {},
    searchesListContainer: {
      ...Alignment.PVmedium,
    },
    header: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 12,
    },
    historyItem: {
      paddingVertical: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    placeText: {
      fontSize: 16,
      color: '#333',
    },
    searchListCross: {
      height: 20,
      width: 20,
    },
    inputFieldCross: {
      height: 20,
      width: 20,
    },
  });
};
