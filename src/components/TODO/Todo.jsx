import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [val, setVal] = useState([]);

  const addTodo = () => {
    setVal((oldval) => {
      return [...oldval, todo];
    });
    setTodo("")
  };
  const deleteOne = (i) => {
    setVal((oldval) => {
      return oldval.filter((_, id) => {
        return id !== i;
      });
    });
  };
  const delAll = () => {
    setVal([]);
  }

  return (
    <>
    <div className='heading'>
      <h2>TODO APP</h2>
    </div>
      <div className="box">
        <div className="inner_div">
          <input
            className="input"
            type="text"
            placeholder="ENTER YOUR TODO"
            name="todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <div style={{display:"flex" , gap:"10px"}}>
 
          <input
            onClick={addTodo}
            className="button"
            type="button"
            value="ADD"
            />
          <input
            onClick={delAll}
            className="Delete"
            type="button"
            value="Delete"
            />
            </div>
        </div>
        <ol>
          {val.map((data, i) => {
            return (
              <>
                <div className="todo-item" >
                  <div className="todo-text">
                    <span>
                      {i + 1}.  {data}
                    </span>
                  </div>
                  <button className="delBtn" onClick={() => deleteOne(i)}>
                    Delete
                  </button>
                </div>
              </>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default Todo;
