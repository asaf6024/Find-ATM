import React, { useEffect, useState, useRef } from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import axios from "axios";

//css
import './map.css'

const Map = (props) => {

    const [selectedATM, setSelectedATM] = useState(null)
    const [lat, setLat] = useState(31.046051)
    const [lng, setLag] = useState(34.851612)

    //Set Selected ATM by click
    useEffect(() => {

        setLat(props.atmItem.Y_Coordinate)
        setLag(props.atmItem.X_Coordinate)
        props.setZoom(18)

    }, [props.atmItem])


    //Update map after searched
    useEffect(() => {

        //check if any data returned from API
        if (props.ATMs !== null) {

            //check if data included ATMs
            if (props.ATMs.records.length > 0) {

                //Find LAT & LNG of location by city Name
                axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${props.ATMs.q}&key=${process.env.REACT_APP_GOOGLE_KEY}`)
                    .then(res => {
                        setLat(res.data.results[0].geometry.location.lat)
                        setLag(res.data.results[0].geometry.location.lng)
                    })
                    .catch((e) => console.log(e))
            }
        }
    }, [props.ATMs])

    const setMapFromSerched = () => {

        return <GoogleMap
            dire
            defaultZoom={20}
            zoom={props.zoom}
            defaultCenter={{ lat: lat, lng: lng }}
            center={{ lat: lat, lng: lng }}
        >

            {
                props.ATMs.records.map(result => {
                    return <Marker
                        animation={window.google.maps.Animation.DROP}
                        key={result._id}
                        position={{
                            lat: result.Y_Coordinate,
                            lng: result.X_Coordinate,
                        }}

                        onClick={() => {
                            setSelectedATM(result)
                            setLat(result.Y_Coordinate)
                            setLag(result.X_Coordinate)
                            props.setZoom(18)
                        }}

                        icon={{
                            url: `../images/atm.jpg`,
                            scaledSize: new window.google.maps.Size(15, 25)
                        }}
                    />
                })
            }
            {
                selectedATM &&
                <InfoWindow

                    position={{
                        lat: selectedATM.Y_Coordinate,
                        lng: selectedATM.X_Coordinate
                    }}
                    onCloseClick={() => {
                        setSelectedATM(null)
                    }}

                >
                    <div className='infoWindow'>

                        <h2>מידע:</h2>
                        <p><b>{selectedATM.Bank_Name}</b></p>
                        <p>{selectedATM.ATM_Address} | {selectedATM.ATM_Location}</p>
                        <p>{selectedATM.ATM_Type}</p>

                    </div>

                </InfoWindow>

            }
        </GoogleMap>
    }
    return (
        props.ATMs !== null ?
            props.ATMs.records.length > 0 ? setMapFromSerched() : 'לא קיימים נתונים'
            : <GoogleMap
                defaultZoom={props.zoom}
                defaultCenter={{ lat: lat, lng: lng }
                }
            >
            </GoogleMap >
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))
export default WrappedMap