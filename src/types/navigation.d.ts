type RootStackParamsList = {
  SearchScreen: undefined;
  PlaceDetailsScreen: {
    placeId: string;
    placeName: string;
  };
};

type RootStackNavigationProp =
  import('@react-navigation/stack').StackNavigationProp<RootStackParamsList>;

type PlaceDetailsScreenRouteProp = import('@react-navigation/native').RouteProp<
  RootStackParamsList,
  'PlaceDetailsScreen'
>;
