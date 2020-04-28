import React, { useContext } from 'react'
import truckdinerdata from '../contexts/TruckDinerData';
import TruckCard from '../components/TruckCard';

const TruckList = () => {

    const {trucks} = useContext(truckdinerdata);
    return (
        <div>
            {trucks.map(item => {
                return <TruckCard truck={item}/>
            })}
        </div>
    )
}

export default TruckList