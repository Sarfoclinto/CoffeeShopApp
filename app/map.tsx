import { View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const Map = () => {
  const sheetRef = useRef(null);
  const [mapregion, setMapregion] = useState({
    latitude: 6.648503493126279,
    longitude: -1.6097655589980373,
    latitudeDelta: 0.0822,
    longitudeDelta: 0.0521,
  });
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [mylocation, setMylocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const userlocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permisson to access location was denied");
    }
    let location = await Location.getCurrentPositionAsync({});
    // setLocation(location);
    setMylocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  useEffect(() => {
    userlocation();
  }, []);

  const other = {
    latitude: 6.67701565660565,
    longitude: -1.5710164793725465,
  };
  const route = [mylocation, other];
  return (
    <View className="flex-1 relative">
      <View className=" border flex-1">
        <MapView initialRegion={mapregion} className="flex-1">
          <Marker identifier="mylocation" coordinate={mylocation} />
          <Marker identifier="deliverer" coordinate={other} />
          <Polyline coordinates={route} strokeWidth={2} strokeColor="orange" />
        </MapView>
      </View>
      <View className="absolute top-5 flex flex-row items-center justify-between px-3 w-full">
        <View className="bg-white p-2 rounded-xl">
          <AntDesign name="left" size={30} color={"black"} />
        </View>
        <View className="bg-white p-2 rounded-xl ">
          <Ionicons name="locate-sharp" size={30} color={"black"} />
        </View>
      </View>
    </View>
  );
};

export default Map;
