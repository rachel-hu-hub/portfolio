import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const markers = [
  {
    markerOffset: -15,
    name: "Seattle",
    coordinates: [-122.3321, 47.6062],
  },
  {
    markerOffset: -15,
    name: "San Francisco",
    coordinates: [-122.4194, 37.7749],
  },
  {
    markerOffset: -15,
    name: "Bangalore",
    coordinates: [77.5946, 12.9716],
  },
  {
    markerOffset: -15,
    name: "Beijing",
    coordinates: [116.4074, 39.9042],
  },
  {
    markerOffset: -15,
    name: "New York",
    coordinates: [-74.006, 40.7128],
  },
];

const TravelMap = () => {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#713DA4"
              stroke="#935EC6"
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={8} fill="#D4A1E4" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#fff" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default TravelMap;
