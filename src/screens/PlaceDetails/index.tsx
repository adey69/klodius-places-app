import React from 'react';
import { Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useStyles } from './styles';
import { usePlaceDetails } from './usePlaceDetails';

const MapScreen = () => {
  const styles = useStyles();
  const { place } = usePlaceDetails();

  return (
    <View style={styles.container}>
      {place && (
        <>
          <View style={styles.detailsContainer}>
            <Text style={styles.details}>{place.name}</Text>
            <Text style={styles.details}>{place.formatted_address}</Text>
          </View>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
              latitude: place.geometry.location.lat,
              longitude: place.geometry.location.lng,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}>
            <Marker
              coordinate={{
                latitude: place.geometry.location.lat,
                longitude: place.geometry.location.lng,
              }}
              title={place.name}
              description={place.formatted_address}
            />
          </MapView>
        </>
      )}
    </View>
  );
};

export default MapScreen;
