import React, { useState } from 'react'
import information from "../data/information.json"

const ApartmentForm = () => {
  const infor=information.results[0];
  const initialKeys=Object.keys(infor);

  const initialState = initialKeys.reduce((objectAll,key)=>{
    const value = infor[key];
    objectAll[key] = Array.isArray(value)?[]
    :typeof value === 'string'?""
    :typeof value === 'number'?0
    :typeof value === 'boolean'?false
    :typeof value ===  null?null
    :""
    return objectAll;
  },{});

  const handleAddApartment=(newApratment)=>{   
    setApartment((prev)=>{
        return [...prev,newApratment]
    })
  }

  const [formData,setFormData]=useState({initialState})
  const [apartment,setApartment]=useState(information.results)

  const handleInputChange=(e)=>{
  const { name,type,checked,value }=e.target;
  setFormData({...formData,[name]:type==='checkbox'?checked
    :type==='number'?Number(value)
    :value})
  }

  const {handleSubmit}=(e)=>{
    e.preventDefault();
    handleAddApartment(formData);
  }

  return (
    <>
       <form onSubmit={handleSubmit}>
             <span>Add an Apartment</span>
               <label>
                    {formData.name}
                    <input name="name" type="text" placeholder="apartmentName" 
                    value={formData.name}
                    onChange={handleInputChange}/>
                </label>
                 <label>
                    Apartment Picture:
                    <input name="picture_url" type="text" placeholder="apartmentPicture" 
                    value={formData.picture_url}
                    onChange={handleInputChange}/>
                </label>
                 <label>
                    Description:
                    <input name="description" type="text" placeholder="description" 
                    value={formData.description}
                    onChange={handleInputChange}/>
                </label>
                 <label>
                    Neighborhood:
                    <input name="neighbourhood_overview" type="text" placeholder="neighbourhood_overview" 
                    value={formData.neighbourhood_overview}
                    onChange={handleInputChange}/>
                </label>
                 <label>
                    Host:
                    <input name="host_name" type="text" placeholder="host" 
                    value={formData.host_name}
                    onChange={handleInputChange}/>
                </label>
                 <label>
                    Superhost:
                    <input name="host_is_superhost" type="checkbox" placeholder="superhost" 
                    value={formData.host_is_superhost}
                    onChange={handleInputChange}/>
                </label>
                 <label>
                    Host Location:
                    <input name="host_location" type="text" placeholder="hostlocation" 
                    value={formData.host_location}
                    onChange={handleInputChange}/>
                </label>
                <label>
                    Price per Night:
                    <input name="price" type="number" placeholder="pricePerNight" 
                    value={formData.price}
                    onChange={handleInputChange}/>
                </label>
                <label>
                    Room Type:
                    <input name="room_type" type="text" placeholder="roomType" 
                    value={formData.room_type}
                    onChange={handleInputChange}/>
                </label>
                <label>
                    Accommodates:
                    <input name="accommodates" type="number" placeholder="accommodates" 
                    value={formData.accommodates}
                    onChange={handleInputChange}/>
                </label>
            <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default ApartmentForm