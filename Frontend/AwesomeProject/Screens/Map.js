import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const markers = [
  {
    title: 'Marker 1',
    coordinates: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    title: 'Marker 2',
    coordinates: {
      latitude: 37.78925,
      longitude: -122.4324,
    },
  },
];
const Map = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const onRegionChange = newRegion => {
    setRegion(newRegion);
  };

  return (
    <MapView
      style={styles.map}
      region={region}
      onRegionChange={onRegionChange}
    >
      {markers.map(marker => (
        <Marker
          key={marker.title}
          coordinate={marker.coordinates}
          title={marker.title}
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
