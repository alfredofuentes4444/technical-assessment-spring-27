// We keep all MBTA API calls in this file
const BASE_URL = 'https://api-v3.mbta.com'

const OPTIONS = {
  headers: { 'x-api-key': import.meta.env.VITE_MBTA_KEY },
}

// We fetch the live subway vehicles and return the list
export async function getVehicles() {
  const res = await fetch(`${BASE_URL}/vehicles?filter[route_type]=0,1`, OPTIONS)

  if (!res.ok) {
    throw new Error(`MBTA request failed: ${res.status}`)
  }

  const json = await res.json()
  return json.data
}

// We turn an ISO time into something like 11:09 PM
function formatTime(iso) {
  if (!iso) return ''
  return new Date(iso).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
}

// We fetch the stops and times for one trip
export async function getTripStops(tripId) {
  const [schedRes, predRes] = await Promise.all([
    fetch(`${BASE_URL}/schedules?filter[trip]=${tripId}&include=stop,trip&sort=stop_sequence`, OPTIONS),
    fetch(`${BASE_URL}/predictions?filter[trip]=${tripId}&include=stop,trip&sort=stop_sequence`, OPTIONS),
  ])

  if (!schedRes.ok || !predRes.ok) {
    throw new Error(`MBTA trip request failed: ${schedRes.status}/${predRes.status}`)
  }

  const sched = await schedRes.json()
  const pred = await predRes.json()
  const included = [...(sched.included || []), ...(pred.included || [])]

  // We map stop ids to stop names
  const names = {}
  for (const item of included) {
    if (item.type === 'stop') names[item.id] = item.attributes.name
  }

  // We map stop ids to live predicted times
  const times = {}
  for (const p of pred.data) {
    const stopId = p.relationships.stop.data?.id
    if (stopId) times[stopId] = p.attributes.arrival_time || p.attributes.departure_time
  }

  const trip = included.find((i) => i.type === 'trip')

  const stops = sched.data.map((s) => {
    const id = s.relationships.stop.data?.id
    const iso = times[id] || s.attributes.arrival_time || s.attributes.departure_time
    return {
      sequence: s.attributes.stop_sequence,
      name: names[id] || id,
      time: formatTime(iso),
    }
  })

  return { headsign: trip?.attributes.headsign, stops }
}