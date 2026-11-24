import { Icon } from 'leaflet'
import redTrain from './assets/alfredo-mbta-icons/red-line-train-icon.png'
import orangeTrain from './assets/alfredo-mbta-icons/orange-line-train-icon.png'
import blueTrain from './assets/alfredo-mbta-icons/blue-line-train-icon.png'
import greenTrain from './assets/alfredo-mbta-icons/green-line-train-icon.png'

// We build one Leaflet icon from an image
function makeIcon(url) {
  return new Icon({
    iconUrl: url,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
  })
}

// We create each icon once and reuse it
const ICONS = {
  Red: makeIcon(redTrain),
  Mattapan: makeIcon(redTrain),
  Orange: makeIcon(orangeTrain),
  Blue: makeIcon(blueTrain),
  Green: makeIcon(greenTrain),
}

// We pick the icon from the route id (Green-B, Green-C, etc. all use Green)
export function getTrainIcon(routeId = '') {
  if (routeId.startsWith('Green')) return ICONS.Green
  return ICONS[routeId] || ICONS.Red
}