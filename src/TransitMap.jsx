import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'

// We define the icon once, outside the component
const myIcon = new Icon({
  iconUrl: '/location-pin.png',
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
})

function TransitMap() {
  return (
    // We center on Boston, and the map needs a set height to show up
    <MapContainer
      center={[42.3601, -71.0589]}
      zoom={12}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png?key=cb1_5e2u_1_5cbb1812a566e67e80b47cb7"
      />

      {/* We place the marker inside the map, it adds itself */}
      <Marker position={[42.350011, -71.106580]} icon={myIcon}>
        <Popup>Hello Boston!</Popup>
      </Marker>
    </MapContainer>
  )
}

export default TransitMap