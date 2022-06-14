import './App.css';
// import FormAPI from './Components/FormAPI';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetData from './Components/GetData';
import { createContext, useState } from 'react';
import { Button } from 'react-bootstrap';
 import Display from './Components/Display';
import FileUploadPage from './Components/FileUploadPage';
// import Display from './Components/Display';

export const context = createContext()

// const getDatafromLS=()=>{
//   let obj=[]
//   const[dat,setData] = obj
//   let data = JSON.parse(localStorage.getItem('ele'));
//   if(data){
//     return setData(dat);
//   }
//   else{
//     return []
//   }
// }
function App() {
  // const intialobject ={}
  const [ele,setEle] = useState({})
  console.log(ele)
  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		// setIsSelected(true);
        setIsFilePicked(true)
	};

    const handleSubmission = () => {
		const formData = new FormData();

		formData.append('File', selectedFile);

		fetch(
			'http://192.168.4.109:8080/api/contacts',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.data)
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

const [submit,setSubmit] = useState(false)


 let dataarray=[]
if(JSON.parse(localStorage.getItem("ele"))){
dataarray=JSON.parse(localStorage.getItem("ele"))
console.log(dataarray)
}


  
  const handleSubmit=(e)=>{
     e.preventDefault()
    setSubmit(true)
    // dataarray=[]
    let a={...ele}
    dataarray.push(a)

    localStorage.setItem("ele",JSON.stringify(dataarray))

    //window.location.reload()

   
}



  return (
    <>

    <context.Provider value={{ele,setEle}}>
    <form onSubmit={handleSubmit}>
    
       <div className="App">
     <GetData/>
     <div>
			<input type="file" name="file" onChange={changeHandler} />
			{isFilePicked ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			
		</div>
     <Button type="submit" onClick={handleSubmission} value={submit}>Submit</Button>
     </div>
     

</form>
        {/* {
 submit ? <Display ele={ele} array={dataarray}/> : null  

}          */}
      <Display array1 = {dataarray}/>  
      {/* <FileUploadPage/>       */}
      

     </context.Provider>

    

       </>
   
  );
}

export default App;



