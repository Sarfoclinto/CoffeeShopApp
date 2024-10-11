import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";

const Map = () => {
  const [mapregion, setMapregion] = useState({
    latitude: 6.648503493126279,
    longitude: -1.6097655589980373,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [location, setLocation] = useState<Location.LocationObject>();
  const [text, setText] = useState<string>("Waiting");
  const [mylocation, setMylocation] = useState();

  // 6.648503493126279, -1.6097655589980373;

  const userlocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permisson to access location was denied");
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    setMylocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  useEffect(() => {
    userlocation();
  }, []);

  // if (errorMsg) {
  //   setText(errorMsg);
  // } else if (location) {
  //   setText(JSON.stringify(location));
  // }
  console.log("Erro: ", errorMsg);
  console.log("Location: ", location);
  console.log("Text: ", text);

  const deliveryLocation = {
    latitude: 6.648503,
    longitude: -1.609766,
  };

  // 6.6456064162215815, -1.61111113471066
  const other = {
    latitude: 6.6456064162215815,
    longitude: -1.61111113471066,
  };
  // 6.648503, -1.609766;
  const route = [deliveryLocation, other];
  return (
    <View className="flex-1">
      <View className=" border flex-1">
        <MapView initialRegion={mapregion} className="flex-1">
          <Marker coordinate={deliveryLocation} />
          <Marker coordinate={other} />
          <Polyline coordinates={route} strokeWidth={2} strokeColor="orange" />
        </MapView>
      </View>
    </View>
  );
};

export default Map;
