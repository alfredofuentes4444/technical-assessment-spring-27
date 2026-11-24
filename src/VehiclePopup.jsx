import { useState, useEffect } from 'react'
import { getTripStops } from './mbta-api.js'
import TrainPopup from './TrainPopup.jsx'

// We map each route id to a display name and color
const ROUTES = {
  Red: { name: 'Red Line', color: '#da291c' },
  Mattapan: { name: 'Mattapan Line', color: '#da291c' },
  Orange: { name: 'Orange Line', color: '#ed8b00' },
  Blue: { name: 'Blue Line', color: '#003da5' },
  'Green-B': { name: 'Green Line B', color: '#00843d' },
  'Green-C': { name: 'Green Line C', color: '#00843d' },
  'Green-D': { name: 'Green Line D', color: '#00843d' },
  'Green-E': { name: 'Green Line E', color: '#00843d' },
}

function VehiclePopup({ vehicle, routeId }) {
  const [trip, setTrip] = useState(null)
  const [error, setError] = useState(null)
  const tripId = vehicle.relationships.trip.data?.id
  const route = ROUTES[routeId] || { name: routeId, color: '#888888' }

  // We fetch the stops when the popup opens
  useEffect(() => {
    if (!tripId) return
    getTripStops(tripId)
      .then(setTrip)
      .catch((err) => {
        console.error(err)
        setError(err.message)
      })
  }, [tripId])

  if (!tripId) return <p style={{ padding: 10 }}>No trip info for this train right now.</p>
  if (error) return <p style={{ padding: 10 }}>Couldn't load stops: {error}</p>
  if (!trip) return <p style={{ padding: 10 }}>Loading...</p>

  // We find the stop the train is at or heading to
  const current = vehicle.attributes.current_stop_sequence
  let i = trip.stops.findIndex((s) => s.sequence >= current)
  if (i === -1) i = trip.stops.length - 1

  const stops = [
    { label: 'Previous Stop', stop: trip.stops[i - 1], past: true },
    { label: 'Next Stop', stop: trip.stops[i] },
    { label: 'Upcoming Stop', stop: trip.stops[i + 1] },
  ]
    .filter((s) => s.stop)
    .map((s) => ({
      label: s.label,
      name: s.stop.name,
      time: s.stop.time,
      past: s.past,
    }))

  return (
    <TrainPopup
      routeName={route.name}
      color={route.color}
      destination={trip.headsign}
      stops={stops}
    />
  )
}

export default VehiclePopup