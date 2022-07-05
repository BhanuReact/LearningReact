import React, { useState } from "react";
import "../MiniCrud/Crud.css";

const Crud = () => {
  const [data, setData] = useState("");
  const [display, setDisplay] = useState([]);
  const [editId, setEditId] = useState(0);
  const [inputFlag,setinpuFlag]=useState("All")


  const completedData = () => {
const copyDisplayData=[...display];
console.log(copyDisplayData)
if(inputFlag!==null && inputFlag === undefined && inputFlag === ""){
  return(
    setData(copyDisplayData)
  )
}

  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (editId) {
      const editIdItem = display.find((i) => i.id === editId);
      const updateIdItem = display.map((t) =>
        t.id === editIdItem.id
          ? (t = { id: t.id, data })
          : { id: t.id, data: t.data }
      );
      setDisplay(updateIdItem);
      setEditId(0);
      setData("");
      return;
    }
    if (data !== "") {
      setDisplay([{ id: `${data}-${Date.now()}`, data }, ...display]);
      setData("");
    }
  };
  const deleteItem = (id) => {
    const copyDisplay = display.filter((t) => t.id !== id);
    setDisplay(copyDisplay);
  };
  const editItem = (id) => {
    const item = display.find((i) => i.id === id);
    setData(item.data);
    setEditId(id);
  };

  return (
    <>
      <div className="container-fluid to-do vh-100">
        <div className="container ">
             <div className="row text-center">
            <div className="col-12">
              <h2>Mini-Crud</h2>
            </div>
            <form onSubmit={submitHandler}>
              <div className="col-12 text-center">
                <input
                  type="text"
                  className=""
                  placeholder="Name"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                ></input>
                <button className="btn btn-info" type="submit">
                  {editId ? "Edit" : "Create Task"}
                </button>
              </div>
            </form>
            <div className="row">
              <div className="col">
                 <button className="btn btn-primary" onClick={()=>completedData("All")}>All</button>
                 </div>
              <div className="col">
                 <button className="btn btn-primary" onClick={()=>completedData("Pending")}>Pending</button>
                 </div>
              <div className="col"> 
              <button className="btn btn-primary" onClick={()=>completedData("Completed")}>Complete</button>
              </div>
              </div>
            <ol>
              {display.map((list) => {
                return (
                  <div className="row mt-4" key={list.id}>
                    <div className="col">
                      <h4>{list.data} </h4>
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-warning"
                        onClick={() => deleteItem(list.id)}
                      >
                        Remove
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => editItem(list.id)}
                        style={{ marginLeft: "10%" }}
                      >
                        edit
                      </button>
                    </div>
                  </div>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crud;
