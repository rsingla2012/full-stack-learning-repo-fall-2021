import "./style.css";
import { useEffect, useState, Fragment } from "react";
import ToDoBullet from "../../components/ToDoBullet/ToDoBullet.js"

/*Modify the Home.js file with the following:
Implement two lists, a to do list and a done list. When the check button for each task is clicked, move the task to the done list. Conversely, when the undo button for each task is clicked, move the task back to the to do list.
Render out each task on the two lists by creating a new a ListItem component that accepts props related to its relevant task.
Implement an input field and "add" button that when clicked, should add a task to the to do list. If a task already exists in the to do list, display an alert.
At the very top of the page, display a count of the number of tasks left to do.
Modify the header component to display your name instead of BLANK NAME.
*/

export default function Home(props) {
  //done, todo states
  const [input, setInput] = useState('');
  const [toDoTasks, setToDo] = useState([]);
  const [finishedTasks, setDone] = useState([]);

  function addNewTask(){
    const newToDo = input.concat(toDoTasks)
    console.log("to do task" + newToDo);
    setToDo(newToDo);
    setInput("");
  }

  function doTask(cur_index) {
    setToDo(toDoTasks.filter((task) => task != toDoTasks[cur_index]));
    setDone(finishedTasks, ... toDoTasks[cur_index]);
  }

  function removeTask(cur_index){
    setDone(finishedTasks.filter((task) => task != finishedTasks[i]));
    setToDos(toDoTasks, ... toDoTasks[cur_index]);
  }
  
  return (
    <Fragment>
      <h2 id = "numTasks"> I have {toDoTasks.length} tasks to complete</h2>
      <div id="search_bar">
        <input className='given task' placeholder='Type your task here'></input>
        <input
            placeholder="Type task here"
            id= "task_input_bar"
            value={input}
            onChange={(event) => setTaskName(event.target.value)}
          ></input>
          <button id='task_button' onClick={() => addNewTask()}>Add a task</button>
      </div>
      <div id = "lists">
        <h2 id= "to_do_list"> To Do: </h2>
        <ul>
          {toDoTasks.map((cur_task, cur_index) => (
            <ListItem
              type="toDo"
              index={cur_index}
              input={cur_task}
              finishTask={doTask}
              removeTask={removeTask}
            ></ListItem>
          ))}
        </ul>
        <h2 id = "done_list"> Done: </h2>
        <ul>
          {finishedTasks.map((cur_task, cur_index) => (
            <ListItem
              type="finished"
              index={cur_index}
              input={cur_task}
              finishTask={doTask}
              removeTask={removeTask}
            ></ListItem>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}
