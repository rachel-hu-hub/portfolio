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
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="#B78CE1" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default TravelMap;
