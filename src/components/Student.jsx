import React, { Fragment,useState } from 'react'

function Student() {
    const [student_id,setstudent_id]=useState("");
    const [student_name,setstudent_name]=useState("")

    const onSubmitForm=async e=>{
        e.preventDefault();
        try {
            const body={student_id,student_name};
            await fetch ("http://localhost:3000/student",{
                method:"Post",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
           window.location="/"
        } catch (err) {
           console.log(err.message); 
        }
    }
  return (
    
    <Fragment>
                <form onChange={onSubmitForm}>
                      <label>Student Id:</label>
                      <input type="text"  value={student_id} onChange={e=>setstudent_id(student_id)}/>
                      <label>Student Name:</label>
                      <input type="text"  value={student_name} onChange={e=>setstudent_name(student_name)}/>
                </form>
    </Fragment>
  )
}

export default Student