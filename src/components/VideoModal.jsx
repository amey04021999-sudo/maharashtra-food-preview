import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function VideoModal({ show, onHide, spot }) {
  if (!spot) return null
  const embed = `https://www.youtube.com/embed/${spot.videoId}`

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{spot.name} — {spot.city}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="ratio ratio-16x9">
          <iframe src={embed} title={spot.name} allowFullScreen frameBorder="0" />
        </div>
        <p className="mt-3">{spot.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary" href={`https://www.google.com/maps/search/?api=1&query=${spot.lat},${spot.lng}`} target="_blank">Open in Maps</Button>
      </Modal.Footer>
    </Modal>
  )
}
