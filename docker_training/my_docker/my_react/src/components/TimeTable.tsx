import React from "react";


function TimeTable() {
    let todayDate = new Date();
    

    return (
        <>
            <span>
                Now Date 1 : {new Date().toISOString()}
                <br />
                Now Date 2 : {new Date().toUTCString()}
            </span>
        </>
    );
}

export default TimeTable;