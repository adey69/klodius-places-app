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
      alignItems: 'center',
      borderWidth: 1,
      borderColor: Colors.borderGray,
      borderRadius: 12,
      backgroundColor: Colors.white,
      shadowColor: Colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
    },
    inputContainerFocused: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    input: {
      ...Alignment.PHsmall,
      flex: 1,
      height: 40,
    },
    predictionItem: {
      ...Alignment.PHmedium,
      paddingVertical: 12,
    },
    predictionText: {
      fontSize: 15,
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
      ...Alignment.PTxSmall,
    },
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
      alignItems: 'center',
    },
    placeText: {
      fontSize: 16,
      flex: 1,
    },
    searchListCross: {
      height: 20,
      width: 20,
      tintColor: Colors.borderGray,
      opacity: 0.6,
    },
    inputFieldCross: {
      height: 20,
      width: 20,
    },
    globeImage: {
      width: 100,
      height: 100,
      alignSelf: 'center',
      opacity: 0.9,
    },
    tagline: {
      textAlign: 'center',
      fontSize: 13,
      marginBottom: 16,
    },
    hitSlop: {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10,
    },
  });
};
