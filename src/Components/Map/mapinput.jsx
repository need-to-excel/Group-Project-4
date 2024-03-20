import React, { useState } from "react";
function Events({getLatLon}) {
    const [address, setaddress]=useState("")
 return (
    <div>
        <input type="text" value={address} onChange={e=>setaddress(e.target.value)}/>
        <button onClick={() => getLatLon(address)}> Click </button>
    </div>
 )
}
export default Events