import axios from "axios";
import React, { useEffect, useState } from "react";

function Weather() {
  
    const [response, setresponse] = useState([])
    const [location, setLocation] = useState("Ibadan")
    const endpoint =
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=57193be4c31abacf8a52c0532bc1f6de`;
 
        useEffect(()=>{
          axios.get(endpoint)
          .then((result)=>{
              setresponse(result.data)
              console.log(result.data);
          })
        }, [])

        const getWeather =() => {
          axios.get(endpoint)
          .then((result)=>{
              setresponse(result.data)
          })
        }

        // const searchLocation = (event) => {
        //   if (event.key == "Enter"){
        //     axios.get(endpoint)
        //   .then((result)=>{
        //       setresponse(result.data)
        //   })
        //   }
        // }
  return (
    <>
        <div className="w-100 d-flex" style={{ height: "100%" }}>
            <div className="w-75 h-100">
              <div className="mb-5 pb-2">
                <div class="w-50 pb-2 mb-4 text-light border-bottom border-light">
                  <input
                    type="text"
                    className="bg-transparent border-0 w-100 text-light px-3 py-1"
                    onChange={(event)=>setLocation(event.target.value)}
                   
                  />
                
                </div> 
                <button
                    type="button"
                    class="btn btn-outline-primary mx-auto w-50"
                    onClick={getWeather}
                  >
                   <h3>Get Location Weather</h3>
                  </button>
              </div>
              <div className="mt-5 pt-5">
                <h1
                  className="text-white text-opacity-75 mt-5"
                  style={{ fontSize: "150px" }}
                >
                  {response.main ? response.main.temp : ""}  &deg;F
                </h1>
                <h1
                  className="text-white text-opacity-75"
                  style={{ fontSize: "70px" }}
                >
                  {response.name}
                </h1>
                <h3 className="text-white text-opacity-75">
                  Wind(deg) : {response.wind ? response.wind.deg :""}&deg;
                </h3>
              </div>
            </div>
        
       

            <div className="w-25 h-100 bg-dark bg-opacity-75 text-white">
              <table className="table table-striped table-bordered  container w-100 text-light ">
                <th>
                  <h3>Weather Details</h3>
                </th>
                <tr>
                  <td className="">Location</td>
                  <td className="">{response.name}</td>
                </tr>
                <tr>
                  <td className="">Description</td>
                  <td className="">{response.name} {response.sys ? response.sys.country : ""}</td>
                </tr>
                <tr>
                  <td className="">Humidity</td>
                  <td className="">{response.main ? response.main.humidity : ""}</td>
                </tr>
                <tr>
                  <td className="">Wind</td>
                  <td className="">{response.wind ? response.wind.speed : ""}</td>
                </tr>
                <tr>
                  <td className="">Longitude</td>
                  <td className="">{response.coord ? response.coord.lon : ""}</td>
                </tr>
                <tr>
                  <td className="">latitude</td>
                  <td className="">{response.coord ? response.coord.lat : ""}</td>
                </tr>
                <tr>
                  <td className="">Feels</td>
                  <td className="">{response.main ? response.main.feels_like : ""}</td>
                </tr>
                <tr>
                  <td className="">Pressure</td>
                  <td className="">{response.main ? response.main.pressure : ""}</td>
                </tr>
              </table>
            </div>
          
     </div>
    </>
  );
}

export default Weather;
