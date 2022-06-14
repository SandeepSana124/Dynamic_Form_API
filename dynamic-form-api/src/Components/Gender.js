import React, { useContext, useState } from 'react'
import { context } from '../App'

function Gender(props) {
    const{ele,setEle} = useContext(context)
    const{name,label,type,enum:enu,validate} = props.each
    const {required} = validate

    const handleChange=(e)=>{
        setEle({...ele,[e.target.name]: e.target.value})
        console.log(ele)

    }

  return (
    <>
    <h6 className='label'>{label}</h6>
    <div className='d-flex flex-row justify-content-center'>
       {
          enu.map((radio,i)=>{
              return(
                  <div className="mb-3 form-check"key = {i}>
                      <input  type={type} name={name} value={radio} onChange={handleChange}
                              required= {required ? {required:true} : {required:false}} 
                             />
                      <label className='form-label' name={label}>{radio}</label>
                      </div>
              )

           })
       }
       
    </div>
    </>
  )
}

export default Gender