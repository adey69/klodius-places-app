import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useStyles } from './styles';
import { usePlaceDetails } from './usePlaceDetails';
import { Colors } from '../../theme';

const MapScreen = () => {
  const styles = useStyles();
  const { place, isFetchingPlaceDetails } = usePlaceDetails();

  if (isFetchingPlaceDetails) {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator color={Colors.grayText} size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {place ? (
        <>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailLabel}>
              Place:
              <Text style={styles.details}> {place.name}</Text>
            </Text>
            <Text style={styles.detailLabel}>
              Address:
              <Text style={styles.details}> {place.address}</Text>
            </Text>
          </View>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
              latitude: place.coordinates.lat,
              longitude: place.coordinates.lng,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}>
            <Marker
              coordinate={{
                latitude: place.coordinates.lat,
                longitude: place.coordinates.lng,
              }}
              title={place.name}
              description={place.address}
            />
          </MapView>
        </>
      ) : (
        <View style={styles.centeredContainer}>
          <Text style={styles.details}>Place not found</Text>
        </View>
      )}
    </View>
  );
};

export default MapScreen;
