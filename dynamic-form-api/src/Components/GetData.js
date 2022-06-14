import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import InputFields from "./InputFields"
// import Display from "./Display"

function GetData() {

    const data= [
         {
         "name": "firstName",
         "label": "First Name",
         "value": "",
         "type": "text",
         "placeholder": "please enter first name",
         "validate": {
         "required": true,
         "minLength": 10,
         "maxLength": 15
         }
         },
         {
         "name": "lastName",
         "label": "Last Name",
         "value": "",
         "type": "text",
         "placeholder": "please enter last name",
         "validate": {
         "required": false,
         "minLength": 10,
         "maxLength": 15
         }
         },
         {
         "name": "email",
         "label": "Email",
         "value": "",
         "type": "email",
         "placeholder": "please enter email",
         "validate": {
         "required": true,
         "minLength": 10,
         "maxLength": 20
         }
         },
         {
         "name": "gender",
         "label": "Gender",
         "value": "",
         "enum": [
         "male",
         "female"
         ],
         "type": "radio",
         "validate": {
         "required": true
         }
         },
         {
         "name": "age",
         "label": "Age",
         "value": "",
         "type": "date",
         "validate": {
         "required": true,
         "min": "1970-01-01",
         "max": "2002-12-31"
         }
         },
         {
         "name": "skills",
         "label": "Skills",
         "value": "",
         "enum": [
         "Html",
         "Css",
         "JavaScript",
         "PHP",
         "Angular",
         "React",
         "Sql"
         ],
         "type": "checkbox",
         "validate": {
         "required": true
         }
         },
         {
         "name": "country",
         "label": "Country",
         "value": "",
         "enum": [
         "India",
         "Sri Lanka",
         "Pakisthan",
         "Bangladesh",
         "China",
         "Nepal",
         "Bhutan"
         ],
         "type": "select",
         "validate": {
         "required": true
         }
         },
         {
             "name":"file",
             "label":"File",
             "type":"file",
             "value":""


         },
         {
         "name": "description",
         "label": "Descritpion",
         "value": "",
         "type": "textarea",
         "validate": {
         "required": false,
         "maxLength": 50
         }
         }
       ]
     
        
    

    const[element,setElement] = useState([])
    
    // const [ele,setEle] = useState([])


    useEffect(()=>{
        axios.get("http://192.168.4.109:8080/api/getForm")
        .then((response)=>{
            setElement(response.data.success.formControlls)
            //  console.log(response.data.success.formControlls)

        })
        .catch(err =>{
            console.log(err);
        })
         setElement(data)
          console.log(data)
    },[])
   
    

    return(
        <>
        <div className='inputs'>
            {
           element.map((each,index)=>{
               return(
                   <InputFields key={index} each={each}/> 
                  


               )
           })


       }</div>
      


       

        

        
       </>
    )

   



}



export default GetData