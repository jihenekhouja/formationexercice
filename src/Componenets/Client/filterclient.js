import { useEffect, useState } from "react";
import { InputGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
function Filter({handelfilter}) {

    const [filterfil, setfilterfil] = useState([
        {minDuration:""


        }
    ])
    const [minDuration, setMinDuration] = useState('');
const handelechangeminDuration=(e)=>{
    console.log(e)
    setMinDuration(e)
    const newfilter={minDuration:e}
  
  setfilterfil([...filterfil,newfilter])
     handelfilter(filterfil)
}
console.log("gggg",minDuration)
console.log("gggg2",filterfil)
const handelechangemaxDuration=(e)=>{
    setMaxDuration(e.target.value)
    handelfilter(maxDuration)
}
const handelechangetitle=(e)=>{
    setTitle(e.target.value)
    handelfilter(title)
}
const handelechangetype=(e)=>{
    setType(e.target.value)
    handelfilter(type)
}
const handeledate=(e)=>{
    setStartDate(e.target.value)
    handelfilter(startDate)
}

    const [startDate, setStartDate] = useState("");
    const [type, setType] = useState("");
   
    const [maxDuration, setMaxDuration] = useState();
    const [title, setTitle] = useState("");



    return ( 
         <InputGroup className="mb-3" style={{ width: "100%" }}>
 
    <input
      type="number"
      placeholder="Min Duration"
      style={{ marginRight: "5px" }}
      value={minDuration}
      onChange={(e) => handelechangeminDuration(Number(e.target.value))}
    />
  
    
    <Form.Control
      type="number"
      placeholder="Max Duration"
      style={{ marginRight: "5px" }}
      value={maxDuration}
      onChange={(e) => handelechangemaxDuration(e)}
    /> 
  
    <Form.Control
      type="text"
      placeholder="Title"
      className="mr-2"
      value={title}
      onChange={(e) =>handelechangetitle(e) }
      style={{ marginRight: "5px" }}
    />
  
    <Form.Control
      type="text"
      placeholder="Start Date" 
      style={{ marginRight: "5px" }}
      value={startDate}
      onChange={(e) => handeledate(e)}
    />

    <Form.Control
      as="select"
      value={type}
      onChange={(e) => handelechangetype(e)}
    >
      <option value="">All</option>
      <option value="Type 1">Type 1</option>
      <option value="Type 2">Type 2</option>
    
    </Form.Control>
  </InputGroup> );
}

export default Filter;