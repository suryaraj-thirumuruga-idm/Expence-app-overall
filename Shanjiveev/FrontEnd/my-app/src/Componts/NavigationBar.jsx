import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavigationBar({ setSearchQuery }) { //  Receive prop
  const navigate = useNavigate();

  function addData() {
    navigate("/newdata");
  }

  function report() {
    navigate("/reportdata");
  }

  return (
    <div className="m-5">
      <div className="butTag d-flex justify-content-evenly m-5">
        <button className="btn btn-primary" onClick={addData}>
          ADD Expense
        </button>
        <button className="btn btn-success" onClick={report}>
          Expense Report
        </button>
        
        {/* Ensure input updates searchQuery */}
        <input
          type="text"
          placeholder="Search"
          className="form-control w-25"
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())} // No error now
        />
      </div>
    </div>
  );
}
