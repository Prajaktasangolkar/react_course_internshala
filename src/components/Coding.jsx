import React,{Fragment,useState} from 'react'

function Coding() {
    const [input,setInput]=useState("")
    const [taskList, setTaskList] = useState([]);
    const addTask = () => {
        if (input.trim() !== '') {
          setTaskList([...taskList, input]);
          setInput('');
        }
      };
      const keyDownHandler=(event)=>{
        if (event.code==='Enter'){
            addTask(event)  //after clicking enetr key it will enter the text
        }
    }
  return (
    <>
    <label htmlFor="">Enter the task:
    <input type="text" 
    placeholder='input'
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    onKeyDown={keyDownHandler}
    required
    />
    </label>
    <button type="submit" onClick={addTask}>Submit</button>
    <Fragment>
          <ul>
          {taskList.map((input, index) => (
          <li key={index}>{input}</li>
        ))}
          </ul>
    </Fragment>


    </>
  )
}

export default Coding