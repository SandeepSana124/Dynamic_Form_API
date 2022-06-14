import React, { useContext} from 'react'
import { context } from '../App'

function Country(props) {
    const{ele,setEle} = useContext(context)
    const{name,label,type,validate,enum:enu} = props.each
    const{required} = validate
    

    const handleChange=(e)=>{
        setEle({...ele,["country"]: e.target.value})
        console.log(ele)

    }

  return (
    <>
    <div className='mb-3 form-check'>
    <h6 className='label'>{label}</h6>
       <select aria-label="Default select example"  className="form-select" type={type} onChange={handleChange} name={name}   required = {required? {required:true}:{required:false}}
>
          <option >Select Your Country</option>
          {
              enu.map((country,i)=>{
                  return(
                      <option  value={country} key={i}>{country}</option>
                  )
              })
          }
       </select>
       </div>
    </>
  )
}

export default Country