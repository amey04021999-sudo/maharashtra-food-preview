import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import L from 'leaflet'

// fix default icon URLs for Vite
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
})

export default function MapView({ spots = [], onMarkerClick }) {
  // Center roughly in Maharashtra
  const center = [19.751476, 75.713888]
  const zoom = 6

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }} scrollWheelZoom={true}>
      <TileLayer
        attribution='© OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {spots.filter(s => s.lat && s.lng).map(spot => (
        <Marker key={spot.id} position={[spot.lat, spot.lng]} eventHandlers={{
          click: () => onMarkerClick(spot)
        }}>
          <Popup>
            <div style={{ width: 240 }}>
              <img src={spot.thumbnail} alt={spot.name} style={{ width: '100%', marginBottom: 6 }} />
              <strong>{spot.name}</strong>
              <div className="text-muted small">{spot.city} • {spot.channel}</div>
              <div style={{ marginTop: 6 }}>
                <a href={`https://www.youtube.com/watch?v=${spot.videoId}`} target="_blank" rel="noreferrer">Open on YouTube</a>
              </div>
            </div>
          </Popup>
          <Tooltip direction="top" offset={[0, -10]} opacity={0.9} permanent={false}>
            {spot.name}
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  )
}
