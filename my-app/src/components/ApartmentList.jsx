import React from 'react'
import information from '../data/information.json'
const ApartmentList = () => {
  return (
    <>
    {apartmentState.map((eachApartment)=>{
         <div className='MainContainer'>
        <h1>ApartmentList</h1>
        <div className='apartmentCard'>
            <section>
            {information.host_identity_verified===true?'✔️':'❌'}
            </section>
        </div>

    </div>

    })
        
   
    }
    </>
  )
}

export default ApartmentList