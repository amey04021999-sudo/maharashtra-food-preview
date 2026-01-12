import React, { useState } from 'react'
import { Container, Row, Col, Navbar, Nav, ListGroup, Image, Button } from 'react-bootstrap'
import MapView from './components/MapView'
import VideoModal from './components/VideoModal'
import spots from './mock/spots'

export default function App() {
  const [selected, setSelected] = useState(null)
  const [showModal, setShowModal] = useState(false)

  function openSpot(spot) {
    setSelected(spot)
    setShowModal(true)
  }

  return (
    <div className="app-container">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Maharashtra Food Spots (Preview)</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Item className="text-muted">Responsive demo • Bootstrap + React + Leaflet</Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      <Container fluid className="main-content">
        <Row>
          <Col lg={8} className="mb-3">
            <div className="map-panel border rounded">
              <MapView spots={spots} onMarkerClick={openSpot} />
            </div>
          </Col>

          <Col lg={4}>
            <h5>Local food spots (mock data)</h5>
            <ListGroup className="spot-list">
              {spots.map(s => (
                <ListGroup.Item key={s.id} action onClick={() => openSpot(s)}>
                  <div className="d-flex align-items-center">
                    <Image src={s.thumbnail} rounded style={{ width: 92, height: 60, objectFit: 'cover' }} />
                    <div className="ms-3">
                      <div style={{ fontWeight: 600 }}>{s.name}</div>
                      <div className="text-muted small">{s.city} • {s.channel}</div>
                    </div>
                    <div className="ms-auto">
                      <Button size="sm" variant="outline-primary" onClick={(e)=>{ e.stopPropagation(); openSpot(s); }}>View</Button>
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>

      <VideoModal show={showModal} onHide={() => setShowModal(false)} spot={selected} />
      <footer className="text-center text-muted py-2">Preview — mock data, no API keys. Built with ❤️</footer>
    </div>
  )
}
