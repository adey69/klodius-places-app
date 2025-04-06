import React, { useCallback } from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ListEmptyView, Separator } from '../../components';
import { Images } from '../../theme';
import { useStyles } from './styles';
import { useSearchScreen } from './useSearchScreen';

const SearchScreen = () => {
  const styles = useStyles();
  const {
    searchText,
    predictions,
    previousSearches,
    isInputFocused,
    isFetchingPredictions,
    handleInputChange,
    handleSelect,
    setIsInputFocused,
    navigateToPlaceDetails,
    removeFromPreviousSearches,
  } = useSearchScreen();

  const renderSeparator = useCallback(() => {
    return <Separator />;
  }, []);

  const renderHistoryItem = useCallback(
    ({ item: previousSearch }: ListRenderItemInfo<PreviousSearch>) => (
      <TouchableOpacity
        style={styles.historyItem}
        onPress={() =>
          navigateToPlaceDetails(previousSearch.id, previousSearch.name)
        }>
        <Text style={styles.placeText}>{previousSearch.name}</Text>
        <TouchableOpacity
          onPress={() => removeFromPreviousSearches(previousSearch.id)}
          hitSlop={styles.hitSlop}>
          <Image source={Images.cross} style={styles.searchListCross} />
        </TouchableOpacity>
      </TouchableOpacity>
    ),
    [],
  );

  const renderSuggestionsItem = useCallback(
    ({ item: place }: ListRenderItemInfo<PlacePredictionTransformed>) => (
      <TouchableOpacity
        onPress={() => handleSelect(place)}
        style={styles.predictionItem}>
        <Text style={styles.predictionText}>{place.description}</Text>
      </TouchableOpacity>
    ),
    [],
  );

  const renderHistoryHeader = useCallback(
    () => <Text style={styles.header}>🔎 Your Previous Searches</Text>,
    [],
  );

  return (
    <View style={styles.container}>
      <Image source={Images.globe} style={styles.globeImage} />
      <Text style={styles.tagline}>Find places anywhere on Earth</Text>
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
            placeholder="Search for a place, e.g. Tokyo Tower"
            style={styles.input}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
          {searchText?.length > 0 && (
            <TouchableOpacity
              onPress={() => handleInputChange('')}
              hitSlop={styles.hitSlop}>
              <Image
                source={Images.crossFilled}
                style={styles.inputFieldCross}
              />
            </TouchableOpacity>
          )}
        </View>
        {isInputFocused && searchText?.length > 0 && (
          <FlatList
            data={predictions}
            style={styles.listContainer}
            contentContainerStyle={styles.listContentContainer}
            keyExtractor={item => item.id}
            renderItem={renderSuggestionsItem}
            bounces={false}
            keyboardShouldPersistTaps="handled"
            ListEmptyComponent={
              <ListEmptyView
                message="No results found"
                isLoading={isFetchingPredictions}
              />
            }
          />
        )}
      </View>
      <FlatList
        data={previousSearches}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHistoryHeader}
        renderItem={renderHistoryItem}
        contentContainerStyle={styles.searchesListContainer}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={
          <ListEmptyView message="Make a search to start creating your search history!" />
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchScreen;
