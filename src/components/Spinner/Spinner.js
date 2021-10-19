import React from "react";

//css
import './spinner.css'

const Spinner = ({ showSpinner }) => {
    return (
        <>
            {
                showSpinner &&
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            }

        </>
    );
}

export default Spinner;