import React, { useState } from 'react'
import {FormControl,Form, FormGroup,FormLabel,FormSelect,Button } from "react-bootstrap"
function FormAPI() {
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [gender,setGender] =useState(false)
  // const [male,setMale] = useState(false)
  // const [female,setFemale] = useState(false)
  const [dob,setDob] = useState("")
  const [skills,setSkills] = useState("")
  const [country,setCountry] = useState("")
  const [description,setDescription] = useState("")

  const submit=(e)=>{
    e.preventDefault()
    console.log(firstName)
    console.log(lastName)
    console.log(email)
    console.log(gender)
    console.log(dob)
    console.log(skills)
    console.log(country)
    console.log(description)

  }

  return (
    <>
        <Form className=' form p-1 mt-1' onSubmit={submit}>
          <FormGroup className='mb-3'>

            <FormLabel>FirstName:</FormLabel>
             <FormControl value={firstName} type="text" placeholder="please enter your first name" required onChange={(e)=>{setFirstName(e.target.value)}} ></FormControl> 
            <FormLabel>LastName:</FormLabel>
            <FormControl value={lastName} type="text" placeholder="please enter your last name" required onChange={(e)=>{setLastName(e.target.value)}}></FormControl>
            <FormLabel>Email:</FormLabel>
            <FormControl value={email} type="email" placeholder="please enter your email" required onChange={(e)=>{setEmail(e.target.value)}}></FormControl>
          
          <FormLabel>Gender:</FormLabel>
            <br></br>
<div onChange={(e)=>setGender(e.target.value)}>
<input type="radio" name="gender" value="male" required ></input>
            <FormLabel className='p-2'>Male</FormLabel>
            <input type="radio" name="gender" value= "female" required ></input>
            <FormLabel>Female</FormLabel>


</div>
         


          
           
<br></br>
            <FormLabel>Age:</FormLabel>
            <FormControl type="date" required min={18}  max={30} value={dob} onChange={(e)=>setDob(e.target.value)}></FormControl>

            <FormLabel>Skills:</FormLabel>
            <br></br>
            <div value={skills} onChange={(e)=>setSkills(e.target.value)} required>
            <input type="checkbox" ></input>
            <FormLabel className='p-2'>HTML</FormLabel>
            <input type="checkbox" ></input>
            <FormLabel className='p-2'>CSS</FormLabel> 
            <input type="checkbox" ></input>
            <FormLabel className='p-2'>JAVASCRIPT</FormLabel> 
            <input type="checkbox" ></input>
            <FormLabel className='p-2'>PHP</FormLabel>
            <input type="checkbox" ></input>
            <FormLabel className='p-2'>ANGULAR</FormLabel>
            <input type="checkbox" ></input>
            <FormLabel className='p-2'>REACT</FormLabel>
            <input type="checkbox" ></input>
            <FormLabel className='p-2'>SQL</FormLabel>

            </div>
           
            <br></br>

            <FormLabel>Country:</FormLabel>
            <FormSelect aria-label="Default select example " value={country} onChange={(e)=>setCountry(e.target.value)}>
              <option>Select Country</option>
              <option value="India">India</option>
              <option value="Srilanka">Srilanka</option>
              <option value="Pakisthan">Pakisthan</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="China">China</option>
              <option value="Nepal">Nepal</option>
              <option value="Bhutan">Bhutan</option>
          </FormSelect>  
          <FormLabel>File:</FormLabel>
          
          <FormControl type="file" name="file"></FormControl>

<FormLabel>Description:</FormLabel>
            <FormControl type="text" required value = {description} onChange={(e)=>setDescription(e.target.value)}></FormControl>
            </FormGroup>
            <Button type="submit">Button</Button>


        </Form>
    </>
  )
}

export default FormAPI