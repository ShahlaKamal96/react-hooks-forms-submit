import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [dataFormList, setDataFormList] = useState([]);
  const [error, setError] = useState([])

  console.log(dataFormList)
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (firstName.length > 0) {
      const dataForm = {
        firstName: firstName,
        lastName: lastName
      }
      const newDataForm = [...dataFormList, dataForm];
      setDataFormList(newDataForm);
      setFirstName("")
      setLastName("")
      setError([])
    }
    else {
      setError(["first name is required"]);
    }
  }
  const listOfSubmissions = dataFormList.map((data, index) => (
    <div key={index}>{data.firstName}{data.lastName}</div>
  ))

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        {error.length > 0 ? (error.map((err, index) => <p key={index} style={{ color: "red" }}>{err}</p>)) : null}
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>submittions</h2>
        {listOfSubmissions}
      </div>
    </div>
  );

}

export default Form;
