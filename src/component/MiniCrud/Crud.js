import React, { useState } from "react";
import "../MiniCrud/Crud.css";

const Crud = () => {
  const [data, setData] = useState("");
  const [display, setDisplay] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const onChangeHandler = (e) => {
    setData(e.target.value);
  };
  const listOfItem = () => {
      setDisplay((items) => {
        return [...items, data];
      });
      setData("");
  };
 
  const deleteItem=(index)=>{
    const copyDisplay=[...display];
    if(index > -1){
      copyDisplay.splice(index,1) 
      setDisplay(copyDisplay);
    }
  }

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
                  onChange={onChangeHandler}
                ></input>
                <button className="btn btn-info" onClick={listOfItem}>
                  Create task
                </button>
              </div>

              <div className="row justify-content-center mt-4">
                <div className="col-2">
                  <button className="btn btn-primary">All</button>
                </div>
                <div className="col-2">
                  <button className="btn btn-warning">Complete</button>
                </div>
                <div className="col-2">
                  <button className="btn btn-danger">Pending</button>
                </div>
              </div>
              <ol>
                {display.map((list, index) => {
                  return (
                    <div className="row mt-4" key={index}>
                      <div className="col">
                        <h4>{list} </h4>
                      </div>
                      <div className="col">
                        <button className="btn btn-warning" onClick={()=>deleteItem(index)}>Remove</button>
                      </div>
                    </div>
                  );
                })}
              </ol>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crud;
