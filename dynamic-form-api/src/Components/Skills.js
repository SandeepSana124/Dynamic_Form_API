import React, { useContext, useState } from 'react'
import { context } from '../App'
import { useEffect } from 'react'

function Skills(props) {
    const{ele,setEle} = useContext(context)
    const{name,label,type,enum:enu} = props.each
    // const{required} = validate

    // const [skills,setSkills] = useState([])

    // useEffect(()=>{
    //     setEle({...ele,skills})
       
    // },[skills])
    const [val,setval] = useState({
        languages:[],
        response:[]
    });

    const handleChange = (e) =>{
        const{value,checked} = e.target
        console.log(value)   
        const{languages} = val

        if(checked){
            setval({
                languages:[...languages,value],
                response:[...languages,value]
            })

        }else{
            setval({
                languages: languages.filter((e)=> e!== value),
                response: languages.filter((e)=> e!== value)


            })
        }

       

    }
    useEffect((e)=>{
        setEle({...ele,[name]:val})
        // console.log(ele)
        
     },[val])

//     const handlechange = e =>{
//     setSkills([...ele, e.target.value])
// }

    
        
    
  return (
      <>
    <h6 className='label'>{label}</h6>

    <div className='skills'>    

        {
            enu.map((c,i)=>{
                return(

                    <div className="mb-3 form-check" key ={i}>
                        <label className="form-label skill-name" name={label}>{c}</label>
                        <input  type={type} value={c} name={name} onChange={handleChange}
                        // required = {required? {required:true}: {required:false}}
                        />
                        </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Skills