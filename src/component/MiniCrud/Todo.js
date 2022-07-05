import React, { useState } from "react";

const Todo = () => {
  const [statusFlag, setStatusFlag] = useState("new",
  "pending",
  "completed");
  const display= [
    { name: "tea", status: "new" },
    { name: "Sweets", status: "pending" },
    { name: "plants", status: "completed" },
    { name: "computer", status: "pending" },
    { name: "leaf", status: "completed" },
  ];

  // const listOfItem = (index) => {
  //   if (tasks === "") {
  //     alert("Fill The Field");
  //   } else {
  //     setDisplay((items) => {
  //       return [...items, tasks];
  //     });
  //     setTasks("");
  //   }
  // };

  const mapFilteringStatus = (statusFlag) => {
   
  display.map((list) => {
      if ( list.status === statusFlag) {
        return <div>{list.name}</div>;
      } else if ( list.status ===statusFlag) {
        return <div>{list.name}</div>;
      } else if ( list.status === statusFlag) {
        return <div>{list.name}</div>;
      }
    });
    
  };
  
  return (
    <>
      <div className="text-center">
        <input
          type="text"
          // value={tasks}
          // onChange={(e) => setTasks(e.target.value)}
        ></input>
        {/* <button onClick={listOfItem}>Create task</button> */}
        <div>
          <button onClick={mapFilteringStatus}>All</button>
          <button onClick={mapFilteringStatus}>Pending</button>
          <button onClick={mapFilteringStatus}>Complete</button>
          {mapFilteringStatus(statusFlag)}
        </div>

        <ol>
          {display.map((list,index) => {
            return (
              <div key={index}>
                <li>{list.name}</li>
              </div>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default Todo;
