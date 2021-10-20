import React, { useState } from 'react'
import { MDBCol, MDBInput, MDBRow } from 'mdbreact'
import PlacesAutocomplete from 'react-places-autocomplete'
import _ from "lodash";
import axios from "axios";

//css
import './place.css'

const Place = (props) => {

    const [display, setDisplay] = useState('')

    //Serach ATMs by city name after clicking
    const findCityATMs = (city) => {
        props.setShowSpinner(true)

        //**ATMs api**
        axios.post('https://data.gov.il/api/3/action/datastore_search', {
            resource_id: 'b9d690de-0a9c-45ef-9ced-3e5957776b26',
            q: city.split(',')[0]
        })
            .then((response) => {

                props.setATMs(response.data.result)
                props.setAddress(city)
                props.setZoom(12)
                props.setShowSpinner(false)

            })
            .catch((error) => {
                console.log(error);
                props.setATMs(null)
                props.setShowSpinner(false)
            });

    }

    const handleChange = value => {
        props.setAddress(value)

        //display suggestions
        setDisplay('block')
    }

    const handleSelect = value => {
        props.setAddress(value)
        findCityATMs(value)

        //hide suggestions
        setDisplay('none')
    }

    return (
        <MDBRow>
            <MDBCol sm='12'>

                <PlacesAutocomplete
                    value={props.addrress}
                    onChange={handleChange}
                    onSelect={handleSelect}

                >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
                        return <div style={{ marginRight: '50px' }}>

                            <MDBInput label="* עיר"
                                style={{ direction: 'rtl' }}
                                {...getInputProps({
                                    placeholder: 'עיר',
                                })}
                                required icon="home" group type="text"
                                error="wrong" name="user_name"
                                success="right"
                            />

                            <div className='placesDiv' style={{ display }}>

                                {loading && <div>טוען...</div>}

                                {suggestions.map(suggestion => {

                                    const style = suggestion.active ?
                                        {
                                            background: 'black',
                                            color: 'white',
                                            cursor: 'pointer'

                                        }
                                        : { background: 'white', zIndex: '2' }

                                    return (
                                        <div
                                            {...getSuggestionItemProps(suggestion, { style })}

                                        // onClick={() => {
                                        //     findCityATMs(suggestion.description)
                                        //     setDisplay('none')
                                        // }}
                                        >

                                            {suggestion.description}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    }}
                </PlacesAutocomplete>

            </MDBCol>
        </MDBRow>
    )
}
export default Place