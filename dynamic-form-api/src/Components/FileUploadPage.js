
import React, { useContext } from 'react'
import { context } from '../App'

function FileUploadPage(props) {
    const{ele,setEle} = useContext(context)
    const{name,label,type,value} = props.each

    const handleChange=(e)=>{
        setEle({...ele,["file"]: e.target.value});;
        console.log(ele)
    }
  return (
    <div className='mb-3 form-check'>
        <label className='form-label label'>{label}</label>
        <input className="form-control" type={type}  name={name} 
        onChange={handleChange} value={value}	
        
        ></input>
    </div>
  )
}

export default FileUploadPage
