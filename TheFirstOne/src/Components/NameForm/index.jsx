import React, { useState } from "react";
import "./index.css";

const NameForm = () => {
  const [value, setValue] = useState(""); 
  const [lastName, setLastName] = useState("")

  const handleChange=(event)=> {
    setValue(event.target.value)
  }

  const handleChangeForLastName=(event)=>{
    setLastName(event.target.value)
  }

  function handleSubmit(event) {
    alert("A name was submitted: " + value +" "+ lastName);
    event.preventDefault();
  }

  return (
    <form onSubmit={()=>handleSubmit()}>
      <label>
        Name:
        <input type="text" value={value} onChange={(event) => handleChange(event)} />
      </label>
      <label>
        LastName:
        <input type="text" value={lastName} onChange={(event) => handleChangeForLastName(event)} />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
};
export default NameForm;
