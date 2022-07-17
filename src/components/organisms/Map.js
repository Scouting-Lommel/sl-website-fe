import Script from "next/script";
import { Markup } from "interweave";

const Map = ({ info }) => {
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.5.0/maps/maps.css"
      />
      <Script
        type="text/javascript"
        onLoad={() => mapContent(info)}
        src="https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.5.0/maps/maps-web.min.js"
        defer
      ></Script>
      <style>
        {`
            #map {
              height: 300px;
              width: 500px;
            }

            @media only screen and (max-width: 767px) {
              #map {
                height: 300px;
              }
            }

            #marker {
              background-image: url('/wp-content/uploads/2021/04/copywriter-logo-dark.svg');
              background-size: cover;
              width: 30px;
              height: 30px;
            }
          `}
      </style>
      <h2 className="text-3xl text-center font-bold py-3">{info.Title}</h2>
      <div className="flex pb-3 justify-evenly">
        <div className="p-3">
          <Markup content={info.Content} />
        </div>
        <div className="flex flex-col justify-center">
          <div
            className="items-center p-3 max-w-md max-h-fit border-4 border-double border-black"
            id="map"
          ></div>
        </div>
      </div>
    </>
  );
};

const mapContent = async (info) => {
  var res = await fetch("/api/map");
  var api_key = await res.json();
  api_key = api_key.data;
  const coords = info.Coords.split(" ");
  var latAndLong = { lat: coords[0], lng: coords[1] };
  var zoomLevel = 16;

  var map = tt.map({
    container: "map",
    key: api_key,
    center: latAndLong,
    zoom: zoomLevel,
  });

  var marker = new tt.Marker().setLngLat(latAndLong).addTo(map);

  var popupOffsets = {
    top: [0, 0],
    bottom: [0, -70],
    "bottom-right": [0, -70],
    "bottom-left": [0, -70],
    left: [25, -35],
    right: [-25, -35],
  };

  var popup = new tt.Popup({ offset: popupOffsets });
  marker.setPopup(popup).togglePopup();
};

export { Map };
