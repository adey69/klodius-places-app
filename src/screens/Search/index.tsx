import React, { useCallback } from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Separator } from '../../components';
import { Images } from '../../theme';
import { useStyles } from './styles';
import { useSearchScreen } from './useSearchScreen';

const mockRecentPlaces = [
  { id: '1', name: 'Central Park, New York' },
  { id: '2', name: 'Times Square, NYC' },
  { id: '3', name: 'Golden Gate Bridge, SF' },
];

const SearchScreen = () => {
  const styles = useStyles();
  const {
    searchText,
    predictions,
    handleInputChange,
    handleSelect,
    isInputFocused,
    setIsInputFocused,
  } = useSearchScreen();

  const renderSeparator = useCallback(() => {
    return <Separator />;
  }, []);

  const renderHistoryItem = useCallback(
    ({ item }) => (
      <TouchableOpacity style={styles.historyItem}>
        <Text style={styles.placeText}>{item.name}</Text>
        <TouchableOpacity>
          <Image source={Images.cross} style={styles.searchListCross} />
        </TouchableOpacity>
      </TouchableOpacity>
    ),
    [],
  );

  const renderHistoryHeader = useCallback(
    () => <Text style={styles.header}>Recent Searches</Text>,
    [],
  );

  return (
    <View style={styles.container}>
      <View>
        <View
          style={[
            styles.inputContainer,
            isInputFocused &&
              searchText?.length > 0 &&
              styles.inputContainerFocused,
          ]}>
          <TextInput
            value={searchText}
            onChangeText={handleInputChange}
            placeholder="Search for a place"
            style={[styles.input]}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
          {searchText?.length > 0 && (
            <TouchableOpacity onPress={() => handleInputChange('')}>
              <Image
                source={Images.crossFilled}
                style={styles.inputFieldCross}
              />
            </TouchableOpacity>
          )}
        </View>
        {isInputFocused &&
          searchText?.length > 0 &&
          predictions?.length > 0 && (
            <FlatList
              data={predictions}
              style={styles.listContainer}
              contentContainerStyle={styles.listContentContainer}
              keyExtractor={item => item.place_id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSelect(item)}
                  style={styles.predictionItem}>
                  <Text style={styles.predictionText}>{item.description}</Text>
                </TouchableOpacity>
              )}
              bounces={false}
              keyboardShouldPersistTaps="handled"
            />
          )}
      </View>
      <FlatList
        data={mockRecentPlaces}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHistoryHeader}
        renderItem={renderHistoryItem}
        contentContainerStyle={styles.searchesListContainer}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default SearchScreen;
