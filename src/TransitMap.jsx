import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { getVehicles } from './mbta-api.js'
import { getTrainIcon } from './icons.js'
import VehiclePopup from './VehiclePopup.jsx'

function TransitMap() {
  // We store the vehicles from the API here
  const [vehicles, setVehicles] = useState([])

  // We load the vehicles once when the map appears
  useEffect(() => {
    getVehicles()
      .then((data) => setVehicles(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <p>Vehicles found: {vehicles.length}</p>

      <MapContainer
        center={[42.3601, -71.0589]}
        zoom={12}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png?key=cb1_5e2u_1_5cbb1812a566e67e80b47cb7"
        />

        {/* We draw one marker per vehicle that has a GPS position */}
        {vehicles
          .filter((v) => v.attributes.latitude && v.attributes.longitude)
          .map((v) => {
            const routeId = v.relationships.route.data?.id
            return (
              <Marker
                key={v.id}
                position={[v.attributes.latitude, v.attributes.longitude]}
                icon={getTrainIcon(routeId)}
              >
                <Popup className="train-popup" minWidth={380} maxWidth={450}>
                  <VehiclePopup vehicle={v} routeId={routeId} />
                </Popup>
              </Marker>
            )
          })}
      </MapContainer>
    </>
  )
}

export default TransitMap