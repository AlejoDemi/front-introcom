import {Humidity, Temperature} from 'react-environment-chart';


export  const Chart =()=> {
    return(
        <>
            <Humidity value={10} />
            <Temperature value={30}/>

        </>
    )
}
