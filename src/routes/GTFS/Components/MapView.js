import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import './styles.css';
import trips123 from './Route_M14A+_2_trips_singlejson';
import './map_style.css';

const customMarker = new L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40]
});

const customMarkerGreen = new L.icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40]
});

const customMarkerDraggble = new L.icon({
  iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40]
});

const GetCoordinates = ({ getLatLng, editable }) => {
  const map = useMap();
  const [pos, setPos] = useState(null);

  useEffect(() => {
    if (!map) return;
    const info = L.DomUtil.create('div', 'legend');

    const positon = L.Control.extend({
      options: {
        position: 'bottomleft'
      },

      onAdd: function () {
        info.textContent = 'Click on map';
        return info;
      },
      onRemove: function () {}
    });

    map.on('click', (e) => {
      info.textContent = editable ? e.latlng : null;
      editable && setPos([e.latlng.lat, e.latlng.lng]);
      editable && getLatLng(e);
    });

    map.addControl(new positon());
  }, [map]);
  return editable && pos && <Marker position={pos} />;
};

export default function MapView() {
  const mapRef = useRef(null);
  const plugin = useRef(null);

  const markerRef = useRef(null);

  const [draggable, setDraggable] = useState(false);
  const [stopDraggable, setStopDraggable] = useState({});
  const [editable, setEditable] = useState(false);
  const [newPos, setNewPos] = useState([]);
  const [center] = useState([40.725953364868595, -73.99183782368647]);
  const [zoom] = useState(13);

  const GetlatLng = (e) => {
    editable ? e && setNewPos([e.latlng.lat, e.latlng.lng]) : setNewPos([]);
  };

  const handleSave = () => {
    console.log('Old pos', stopDraggable);
    console.log('New pos', newPos);
    setEditable(false);
    setDraggable(false);
    setStopDraggable({});
    setNewPos([]);
  };

  const handleCancel = () => {
    setDraggable(false);
    setEditable(false);
    setStopDraggable({});
    setNewPos([]);
    console.log('Cancel clicked');
  };

  const handleEdit = () => {
    setEditable(!editable);
  };

  return (
    <>
      <MapContainer center={center} zoom={zoom} ref={mapRef}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {editable && <GetCoordinates getLatLng={GetlatLng} editable={editable} />}
        {editable &&
          (newPos.length === 0 ? null : (
            <Marker key={editable} position={newPos} icon={customMarkerGreen} />
          ))}

        {trips123['M14A+'].map((stop, k) => {
          return (
            <>
              <Polyline
                key={k}
                // color={
                //   stop.trip_id === "MQ_E0-Saturday-006200_SBS14_2"
                //     ? "blue"
                //     : "green"
                // }
                positions={
                  stop.trip_id === 'MQ_E0-Saturday-006200_SBS14_2'
                    ? k === 19
                      ? [
                          [trips123['M14A+']?.[19]?.stop_lat, trips123['M14A+']?.[19]?.stop_lon],
                          [trips123['M14A+']?.[19]?.stop_lat, trips123['M14A+']?.[19]?.stop_lon]
                        ]
                      : [
                          [trips123['M14A+']?.[k]?.stop_lat, trips123['M14A+']?.[k]?.stop_lon],
                          [
                            trips123['M14A+']?.[k + 1]?.stop_lat,
                            trips123['M14A+']?.[k + 1]?.stop_lon
                          ]
                        ]
                    : k === 41
                    ? [
                        [trips123['M14A+']?.[41]?.stop_lat, trips123['M14A+']?.[41]?.stop_lon],
                        [trips123['M14A+']?.[41]?.stop_lat, trips123['M14A+']?.[41]?.stop_lon]
                      ]
                    : [
                        [trips123['M14A+']?.[k]?.stop_lat, trips123['M14A+']?.[k]?.stop_lon],
                        [trips123['M14A+']?.[k + 1]?.stop_lat, trips123['M14A+']?.[k + 1]?.stop_lon]
                      ]
                }>
                {/* <Popover
                  key={editable}
                  content={
                    <span
                      onClick={() => {
                        editable &&
                          setStopDraggable({
                            stop_id: stop.stop_id,
                            stop_name: stop.stop_name,
                            stop_lat: stop.stop_lat,
                            stop_lon: stop.stop_lon,
                          });
                        editable ? setDraggable(true) : setDraggable(false);
                      }}
                    >
                      {draggable
                        ? "Marker is editable"
                        : "Click Edit button and then clicking HERE makes marker editable"}
                    </span>
                  }
                  title="Title"
                  //   trigger="click"
                > */}
                <Marker
                  key={editable}
                  position={[stop.stop_lat, stop.stop_lon]}
                  //Dont delete
                  // icon={
                  //   stop.trip_id === "MQ_E0-Saturday-006200_SBS14_2"
                  //     ? stop.stop_id === stopDraggable
                  //       ? customMarkerDraggble
                  //       : customMarker
                  //     : stop.stop_id === stopDraggable
                  //     ? customMarkerDraggble
                  //     : customMarkerGreen
                  // }
                  icon={
                    stop.stop_id === stopDraggable.stop_id ? customMarkerDraggble : customMarker
                  }
                  draggable={draggable}
                  ref={markerRef}>
                  <Popup minWidth={90} key={editable} closeButton={false}>
                    <span
                      onClick={() => {
                        editable &&
                          setStopDraggable({
                            stop_id: stop.stop_id,
                            stop_name: stop.stop_name,
                            stop_lat: stop.stop_lat,
                            stop_lon: stop.stop_lon
                          });
                        editable ? setDraggable(true) : setDraggable(false);
                      }}>
                      {draggable
                        ? 'Marker is editable'
                        : 'Click Edit button and then clicking HERE makes marker editable'}
                    </span>
                  </Popup>

                  {/* <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                  <span>
                    Trip ID : <b>{stop.trip_id}</b> <br />
                    Stop ID : <b>{stop.stop_id}</b> <br />
                    Stop Name: <b>{stop.stop_name}</b> <br />
                    Stop Sequence: <b>{stop.stop_sequence}</b> <br />
                  </span>
                </Tooltip> */}
                </Marker>
                {/* </Popover> */}
              </Polyline>
            </>
          );
        })}
      </MapContainer>

      {/* <PortalModal
        open={open}
        children={
          <>
            <h2>Este es el contenido del modal</h2>
          </>
        }
        closeModal={closeModal}
        saveBtn={handleSave}
        // cancelBtn={handleCancel}
        oldStops={stopDraggable}
        newStops={newPos}
      /> */}
      <div ref={plugin} className="editBtn">
        <button
          style={editable ? { color: '#fff' } : { color: '#000' }}
          onClick={!editable ? handleEdit : null}>
          Edit
        </button>{' '}
        &nbsp;
        {newPos.length != 0 && Object.keys(stopDraggable).length != 0 && (
          <>
            <button onClick={handleSave}>Save</button> &nbsp;
          </>
        )}
        {newPos.length != 0 && Object.keys(stopDraggable).length != 0 && (
          <>
            <button onClick={handleCancel}>Cancel</button> &nbsp;{' '}
          </>
        )}
      </div>
    </>
  );
}
