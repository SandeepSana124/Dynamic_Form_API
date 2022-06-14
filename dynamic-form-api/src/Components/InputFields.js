import React from 'react'
import Email from './Email'
import InputText from './InputText'
import Gender from "./Gender"
import Age from "./Age"
import Skills from './Skills'
import Country from "./Country"
import Description from './Description'
import FileUploadPage from './FileUploadPage'


 const InputFields = props =>{

    switch(props.each.type){
        case "text":
            return <InputText each={props.each}/>
            case "email":
              return <Email each = {props.each}/>
              case "radio":
              return <Gender each = {props.each}/>
              case "date":
                return <Age each = {props.each}/>
                case "checkbox":
                return <Skills each = {props.each}/>
                case "select":
                  return <Country each = {props.each}/>
                  case "textarea":
                    return <Description each = {props.each}/>
                    case "file":
                      return <FileUploadPage each={props.each}/>
                  
default:

  
             


    }
    
  return (
    <div>Input</div>
  )
  }

export default InputFields