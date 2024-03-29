import React, { useState } from "react";
import { data, rate, total } from "./data";

function Table() {
  const [expandedRows, setExpandedRows] = useState([]);

  const handleExpand = (id) => {
    setExpandedRows((prevExpandedRows) => {
      if (prevExpandedRows.includes(id)) {
        return prevExpandedRows.filter((rowId) => rowId !== id);
      } else {
        return [...prevExpandedRows, id];
      }
    });
  };

  const renderNestedTable = () => {
    return (
      <table className="table table-borderless m-0 ">
        <tbody>
          {[1, 2, 3, 4].map((index) => (
            <React.Fragment key={index}>
              <tr>
                <td className="col text-end" style={{width: '100px'}}>
                  <input type="checkbox" />
                </td>
                <td>Activity {index}</td>
                <td style={{width: '300px'}}>{rate}</td>
                <td style={{width: '300px'}}>{total}</td>
                <td style={{width: '80px'}}>
                  <button onClick={() => handleExpand(`${index}-nested`)}>
                    Open
                  </button>
                </td>
              </tr>
              {expandedRows.includes(`${index}-nested`) && (
                <tr>
                  <td colSpan="6" className="p-0">{renderNestedNestedTable()}</td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    );
  };

  const renderNestedNestedTable = () => {
    return (
      <table className="table table-borderless m-0">
        <tbody>
          {[1, 2, 3].map((index) => (
            <tr key={index}>
              <td className="col text-end" style={{width: '150px'}}>
                <input type="checkbox" />
              </td>
              <td>Work Item {index}</td>
              <td style={{width: '380px'}}>{total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="container mx-0 px-0">
      <table className="table table-borderless">
        <thead>
          <tr className="flex table-active">
            <th scope="col" className="text-center">
              <input type="checkbox" />
            </th>
            <th scope="col-sm-9">Packages</th>
            <th scope="col" >Rate <span style={{ fontWeight: 400, fontSize: '0.75rem', fontStyle: 'italic'}}>(in sqft)</span></th>
            <th scope="col" >Total</th>
            <th scope="col" >{""}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <React.Fragment key={row.id}>
              <tr>
                <td className="col text-center" style={{width: '80px'}}>
                  <input type="checkbox" />
                </td>
                <td >Civil {row.id}</td>
                <td style={{width: '300px'}}>{rate}</td>
                <td style={{width: '300px'}}>{total}</td>
                <td className="p-0" style={{width: '80px'}} >
                {/*  */}
                <button onClick={() => handleExpand(row.id)} className="btn btn-bor border-0 bg-transparent0">
                  <span style={{ fontSize: "2rem", color: "Aqua" }}>
                    {expandedRows.includes(row.id) ? "-" : "+"}
                  </span>
                </button>
                </td>
              </tr>
              {expandedRows.includes(row.id) && (
                <tr>
                  <td colSpan="6" className="p-0">{renderNestedTable()}</td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;