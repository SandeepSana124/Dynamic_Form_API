import React, { useContext, useState } from 'react'
import { context } from '../App'

function Description(props) {
    const{ele,setEle}  = useContext(context)
    const{name,label,value,type,validate} = props.each
    const{required, maxLength} = validate
    
    const handleChange=(e)=>{
        setEle({...ele,[e.target.name]: e.target.value})
        console.log(ele)

    }

  return (
      <>
    <div className='mb-3 form-check'>

        <label className="form-label label" name={name}>{label}</label><br/>
        <textarea className='form-control' onChange = {handleChange} name={name} type={type} value={ele[name]}
required = {required? {required:true}: {required:false}}
maxLength = {maxLength ? maxLength : null}


        >

        </textarea>
    </div>
    </>
  )
}

export default Description