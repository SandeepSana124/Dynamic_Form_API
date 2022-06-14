import React from 'react'
import { Table } from 'react-bootstrap'


function Display(props) {
    // const array1 = []
    // var array = JSON.parse(localStorage.getItem('ele'));
// array1.push(array);
//  localStorage.setItem('ele', JSON.stringify(array));
  console.log(props.array1   )

  return (
    <form>
        <Table>
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Age</th>
                     <th>Skills</th>
                    <th>Country</th>
                    <th>Description</th>
                    <th>File</th>
                </tr>
            </thead>
            <tbody>
                
               
                
                     {props.array1.map((each,i)=>{
                       return(
                           <tr key={i}>
                               <td>{each.firstName}</td>
                               <td>{each.lastName}</td>
                               <td>{each.email}</td>
                               <td>{each.gender}</td>
                               <td>{each.age}</td>
                               
                               
                                   <td>{
                                   each.skills?.languages.map((e)=>{
                                        // {console.log(e)}
                                       return(
                                           e
                                       )
                                   })
                                   }
                                   </td>     
                                   <td>{each.country}</td>
                                   <td>{each.description}</td>
                                   <td>{each.file}</td>


                           </tr>
                       )
                   })
                
            }   
            </tbody>
        </Table>
    </form>
  )
}

export default Display