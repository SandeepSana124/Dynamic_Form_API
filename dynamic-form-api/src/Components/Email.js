import React ,{useContext}from 'react'
import { context } from '../App'

function Email(props) {
    const {ele,setEle}=useContext(context)

    const{name,label,placeholder,type,validate,value} = props.each
    const{required,maxLength,minLength} = validate

    const handleChange=(e)=>{
        setEle({...ele,[e.target.name]: e.target.value});;
        console.log(ele)

    }
  return (
    <div className='mb-3 form-check'>
        <label className='form-label label'>{label}</label>
        <input className='form-control' type={type} placeholder={placeholder} name={name} 
         onChange={handleChange} value={ele[name]}

        required= {required ? {required:true} : {required:false}} 
        minLength = {minLength? minLength:null}
        maxLength = {maxLength ? maxLength : null}
        ></input>
    </div>
  )
}

export default Email