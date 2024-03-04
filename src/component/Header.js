import React from "react";
import moment from "moment";

function Header ({latitude,longitude,handleChangeInput,handleSearch,city}) {

    return(
        <>
        <div className='headrercontainer'>
        <div className='headercontain'>
        <div className='location'><i class="bi bi-geo-alt-fill"></i><h4 >{city}</h4></div>
    
        <sup>{latitude } & {longitude}</sup>
        <div class="date">{moment().format("MMMM Do , h:mm a")}</div>
        </div>
        <div>
          <input type='text' placeholder='search your city name' onChange={handleChangeInput}></input><button type='button' onClick={handleSearch}><i class="bi bi-search"></i></button>
        </div> 
        </div>
        </>
    )
} 
export default Header;




