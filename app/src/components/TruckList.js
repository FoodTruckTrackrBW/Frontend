import React, { useContext } from 'react'
import truckdinerdata from '../contexts/TruckContext';
import TruckCard from '../components/TruckCard';
import TruckContext from '../contexts/TruckContext';

const TruckList = () => {

    const {trucks} = useContext(TruckContext);
    return (
        <div>
            {trucks.map(item => {
                return <TruckCard truck={item}/>
            })}
        </div>
    )
}

export default TruckList