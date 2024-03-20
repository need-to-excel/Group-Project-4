import React, { useState } from "react";
function Events({getLatLon}) {
    const [address, setaddress]=useState("")
    const city = JSON.parse(localStorage.getItem("cityKey"));
 return (
    <div>
        <input type="text" value={city} onChange={e=>setaddress(e.target.value)}/>
        <button onClick={() => getLatLon(city)}> Click </button>
    </div>
 )
}
export default Events