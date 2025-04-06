import axios from 'axios';
import { GOOGLE_MAPS_WEB_API_KEY } from '../../config';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';

export const usePlaceDetails = () => {
  const [place, setPlace] = useState();
  const route = useRoute();
  const getPlaceDetails = async () => {
    try {
      const detailsResponse = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json`,
        {
          params: {
            place_id: route?.params?.placeId ?? '',
            key: GOOGLE_MAPS_WEB_API_KEY,
            fields: 'geometry,name,formatted_address', // add more if needed
          },
        },
      );
      const placeDetails = detailsResponse.data.result; // Extract the result object
      setPlace(placeDetails); // Set the extracted result to the state
    } catch (error) {
      console.error('Error fetching place details:', error);
      throw error;
    }
  };

  useEffect(() => {
    getPlaceDetails();
  }, []);

  return { place, getPlaceDetails };
};
