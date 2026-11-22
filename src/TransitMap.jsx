import { MapContainer, TileLayer } from 'react-leaflet'

function TransitMap() {
  return (
    // We center on Boston, and the map needs a set height to show up
    <MapContainer
      center={[42.3601, -71.0589]}
      zoom={12}
      style={{ height: '500px', width: '100%' }}
    >
        
      {/* We pull the map images from OpenStreetMap */}
      <TileLayer
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
  url="https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png?key=cb1_5e2u_1_5cbb1812a566e67e80b47cb7"
      />    
    </MapContainer>
  )
}

export default TransitMap