import {Humidity} from 'react-environment-chart';
import {useEffect, useState} from "react";
import axios from 'axios';


export  const HumidityChart =()=> {
    const [value,setValue] = useState(10)


    useEffect(()=>{
        const interval = setInterval(() => {
            axios.get("http://localhost:3000/latest")
            .then((res)=>{
                setValue(res.data[0].humidity)
            }).catch((error)=>{
                console.log(error)
        })
          }, 2000);
          return () => clearInterval(interval);
         },[])

    return(
        <div style={{backgroundColor:"white",border:"1px solid black",borderRadius:"20px",padding:"10px",marginBottom:"20px"}}>
            <Humidity value={value} />
        </div>
    )
}
