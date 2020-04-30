import React, { useContext } from 'react'
import truckContext from '../contexts/TruckContext'
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const UpdateTruck = () => {
    const { push } = useHistory()

    const {truckToUpdate, setTruckToUpdate} = useContext(truckContext);

    const handleChanges = (input) => {
        setTruckToUpdate({...truckToUpdate, [input.target.name] : input.target.value})
        console.log('trucks:',truckToUpdate)
      }

    const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .put(`https://food-truck-trackr-bw.herokuapp.com/api/operator/${truckToUpdate.id}`, truckToUpdate)
    .then(res => {
        console.log('put', res)
        push('/OperatorProfile')
    })
    .catch(error => console.log(error));
    }

    return (
        <div>

        <h1>Edit Truck</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChanges} name="truck_name" placeholder="truck_name" defaultValue={truckToUpdate.truck_name} required />
          <input type="text" onChange={handleChanges} name="truck_img_url" placeholder="truck_img_url" defaultValue={truckToUpdate.truck_img_url}/>
          <input type="text" onChange={handleChanges} name="cuisine_type" placeholder="cuisine_type"  defaultValue={truckToUpdate.cuisine_type} required />
          <input type="text" onChange={handleChanges} name="departure_time" placeholder="departure_time" defaultValue={truckToUpdate.departure_time} required />
          <input type="submit" />
        </form>

        </div>
    )
}

export default UpdateTruck