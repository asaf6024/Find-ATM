import React from "react";

//bootstrap
import { MDBCol, MDBRow } from "mdbreact";

//css
import './list.css'

const List = (props) => {


    return (
        <MDBRow className='listRow'>
            <MDBCol sm='12'>

                {
                    props.ATMs !== null ?
                        <ul>

                            {
                                props.ATMs.records.length == 0 &&
                                <p className='text-right font-weight-bold'>לא נמצאו נתונים</p>
                            }

                            {props.ATMs.records.map(atm => {
                                return <li className='listItem' key={atm._id}
                                    onClick={() => props.setAtmItem(atm)

                                    }
                                >
                                    <p>{atm.Atm_Num} - {atm.Bank_Name}
                                        <br />
                                        <span>{atm.ATM_Address} | {atm.ATM_Type}</span>
                                    </p>

                                </li>
                            })
                            }
                        </ul>
                        : <p className='text-center font-weight-bold'>אנא הקלד/י עיר</p>
                }

            </MDBCol>
        </MDBRow>
    )
}
export default List