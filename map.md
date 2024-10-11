<!-- 
import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const DeliveryTracking = () => {
  const courierLocation = {
    latitude: 37.78825,
    longitude: -122.4324,
  };

  const deliveryLocation = {
    latitude: 37.78825,
    longitude: -122.4324,
  };

  const routeCoordinates = [
    { latitude: 37.78825, longitude: -122.4324 },
    { latitude: 37.78825, longitude: -122.4324 },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={courierLocation} />
        <Marker coordinate={deliveryLocation} />
        <Polyline coordinates={routeCoordinates} strokeWidth={2} strokeColor="orange" />
      </MapView>
      <View style={styles.infoContainer}>
        <Text style={styles.timeText}>10 minutes left</Text>
        <Text style={styles.deliveryText}>Delivery to Jl. Kpg Sutoyo</Text>
        <Text style={styles.statusText}>Delivered your order</Text>
        <Text style={styles.messageText}>We deliver your goods to you in the shortest possible time.</Text>
        <View style={styles.courierContainer}>
          <Image source={{ uri: 'courier_image_url' }} style={styles.courierImage} />
          <Text style={styles.courierName}>Johan Hawn</Text>
          <Button title="Call" onPress={() => { /* Call function */ }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  infoContainer: {
    padding: 16,
    backgroundColor: 'white',
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  deliveryText: {
    fontSize: 16,
    marginVertical: 4,
  },
  statusText: {
    fontSize: 14,
    color: 'green',
  },
  messageText: {
    fontSize: 14,
    marginVertical: 4,
  },
  courierContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  courierImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  courierName: {
    fontSize: 16,
    flex: 1,
  },
});

export default DeliveryTracking; 

-->
