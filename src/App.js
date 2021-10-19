import React, { useEffect, useState } from 'react';

//components
import Place from './components/Place/Place';
import List from './components/List/List';
import WrappedMap from './components/Map/Map';

//bootstrap
import { MDBCard, MDBCol, MDBContainer, MDBRow } from 'mdbreact';

//css
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Spinner from './components/Spinner/Spinner';

function App() {

  const [addrress, setAddress] = useState('')
  const [ATMs, setATMs] = useState(null)
  const [zoom, setZoom] = useState(7.5)
  const [atmItem, setAtmItem] = useState({ lat: null, lng: null })
  const [showSpinner, setShowSpinner] = useState(false)
  return (
    <div className='container-fluid'>
      <Header />

      <MDBContainer>
        <MDBRow>

          <MDBCol sm='12' lg='4' className='cities'>

            <Place
              setAddress={setAddress}
              addrress={addrress}
              ATMs={ATMs}
              setATMs={setATMs}
              setZoom={setZoom}
              setShowSpinner={setShowSpinner}
            />

            <List
              ATMs={ATMs}
              setAtmItem={setAtmItem}
            />
            <Spinner showSpinner={showSpinner} />
          </MDBCol>

          <MDBCol sm='12' lg='8'>

            <div style={{ width: '100%', height: '80vh' }}>
              <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}
                ATMs={ATMs}
                zoom={zoom}
                addrress={addrress}
                setZoom={setZoom}
                atmItem={atmItem}
              />
            </div>

          </MDBCol>

        </MDBRow>
      </MDBContainer >

      <Footer />

    </div >
  );
}

export default App;
