import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const centerPoint = getCenter(coordinates);

  const [viewPort, setViewport] = useState({
    latitude: centerPoint.latitude,
    longitude: centerPoint.longitude,
    zoom: 11,
    width: "100%",
    height: "100%",
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.mapbox_key}
      mapStyle="mapbox://styles/jeplindm/ckzgsjtp9001p14qt7tz9amkv"
      {...viewPort}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.lat}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>

          {selectedLocation.long === result.long && (
            <Popup
              latitude={result.lat}
              longitude={result.long}
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
            >
              {result.title}
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
