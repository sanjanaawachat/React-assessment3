import React, { useState } from "react";

const Form = () => {

  const [data, setData] = useState([{
    username: '',
    dept: '',
    rate: '',
  }])

  const [records, setRecords] = useState([]);
  const [display, setDisplay] = useState(true);
  const [heading, setHeading] = useState("EMPLOYEE FEEDBACK FORM")


  const handle_input = (e) => {
    // const name = e.target.name
    // const value = e.target.value 
    setData({ ...data, [e.target.name]: e.target.value })
    // console.log(data);
  }

  const Submited = (e) => {
    e.preventDefault()
    const newData = { ...data, id: new Date().getTime().toString() }
    // console.log(newData);
    setRecords([...records, newData])
    console.log(records);
    setHeading("EMPLOYEE FEEDBACK LIST")
    setDisplay(false)
    setData("")
  }

  const Goback = () => {
    setDisplay(true)
    setHeading("EMPLOYEE FEEDBACK FORM")
  }

  return (
    <>
      <div className="box_container"><h1>{heading}</h1><hr /></div>
      {display ?
        <form onSubmit={Submited}>
          <div className="input_container">
            <label>Name: </label>
            <input
              type="text"
              onChange={handle_input}
              value={data.username}
              name='name'
              required
            />
            <br /><br />
            <label className="dept">Department: </label>
            <input
              type="text"
              onChange={handle_input}
              value={data.dept}
              name='dept'
              required
            /><br /><br />
            <label>Rating: </label>
            <input
              type="number"
              onChange={handle_input}
              value={data.rate}
              name='rate'
              required
              min={0}
              max={10}
            /><br />
          </div>
          <div className="button"><input type="Submit"/></div>
        </form> :

        <div>
          <div className="result">
            {
              records.map((e) => {
                return (
                  <>
                    <div className="section_container">
                      <p>Name: {e.name}</p>
                      <p>Department: {e.dept}</p>
                      <p>Rating: {e.rate}</p>
                    </div>
                  </>
                )
              })
            }
          </div>
          <span>
            <button onClick={Goback} className="back__button">Go Back</button>
          </span>
        </div>
      }
    </>
  )
}

export default Form;
