import './App.css';
import React,{useState} from "react";
import axios from "axios";

function App() {

  const [data,setData] = useState([])
  const [startDate,setStartDate] = useState("")
  const [endDate,setendDate] = useState("")

  // Our endPoint from spring boot project 
  // if getting error change your local port at spring side or include Cors policy at HomeController
  const url = "http://localhost:8080/"+startDate+"/"+endDate;


  const searctEarthquake = async(event)=>{
    if(event.key ==="Enter"){
      await axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
    }
  }

 

  return (
    <div className="App">
      <div>
        <h2>Earthquakes</h2>
        <div className='search'>
          
          
          <input value={startDate}
          onChange={event =>setStartDate(event.target.value)}
          placeholder="Enter Start Date"
          type="text" required/>
            <input placeholder='End Date'
            value={endDate}
            onChange={event =>setendDate(event.target.value)}
            type="text" required/>
            <br/>
            <button onKeyPress={searctEarthquake}>Press Enter For Records</button>
        
        </div>
        <div className='container'>
          <li>{data.features ? <p>{data.features[0].properties.place}</p>:<h3>No Earthquakes Were Recorded Past These Days!</h3>}</li>
          <li>{data.features ? <p>{data.features[1].properties.place}</p>:<h3>No Earthquakes Were Recorded Past These Days!</h3>}</li>
          <li>{data.features ? <p>{data.features[2].properties.place}</p>:<h3>No Earthquakes Were Recorded Past These Days!</h3>}</li>
          <li>{data.features ? <p>{data.features[3].properties.place}</p>:<h3>No Earthquakes Were Recorded Past These Days!</h3>}</li>
          <li>{data.features ? <p>{data.features[4].properties.place}</p>:<h3>No Earthquakes Were Recorded Past These Days!</h3>}</li>
          <li>{data.features ? <p>{data.features[5].properties.place}</p>:<h3>No Earthquakes Were Recorded Past These Days!</h3>}</li>
          <li>{data.features ? <p>{data.features[6].properties.place}</p>:<h3>No Earthquakes Were Recorded Past These Days!</h3>}</li>
          <li>{data.features ? <p>{data.features[7].properties.place}</p>:<h3>No Earthquakes Were Recorded Past These Days!</h3>}</li>
          <li>{data.features ? <p>{data.features[8].properties.place}</p>:<h3>No Earthquakes Were Recorded Past These Days!</h3>}</li>
          <li>{data.features ? <p>{data.features[9].properties.place}</p>:<h3>No Earthquakes Were Recorded Past These Days!</h3>}</li>
          <li>{data.features ? <p>{data.features[10].properties.place}</p>:<h3>No Earthquakes Were Recorded Past These Days!</h3>}</li>

          
        </div>
        <div>
         
        </div>
      </div>
      
    </div>
  );
}

export default App;
