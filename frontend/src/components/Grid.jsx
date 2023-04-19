import React, { useState, useRef } from 'react';

function Grid() {
  const [headers, setHeaders] = useState(['Course', 'Grade']);
  const [data, setData] = useState([['AP Calculus', 'A+']]);
  const columnInputRef = useRef(null);

  const addRow = () => {
    const newRow = headers.length > 0 ? Array.from({ length: headers.length }, () => "") : [""];
    setData([...data, newRow]);
  };

  const addColumn = () => {
    const newColumnName = columnInputRef.current.value || "New Column";
    const newColumnData = data.length > 0 ? data.map(row => [...row, ""]) : [[]];
    const newHeaders = [...headers, newColumnName];
    setHeaders(newHeaders);
    setData(newColumnData);
  };  

  const removeRow = () => {
    //make sure there's at least 1 row
    if (data.length > 1) {
      setData(prevData => prevData.slice(0, -1));
    }
  };

  const removeColumn = () => {
    //make sure there's at least 1 column
    if (headers.length > 1) {
      setHeaders(prevHeaders => prevHeaders.slice(0, -1));
      setData(prevData => prevData.map(row => row.slice(0, -1)));
    }
  };

  const handleCellChange = (event, rowIndex, columnIndex) => {
    const updatedRow = [...data[rowIndex]];
    updatedRow[columnIndex] = event.target.value;
    const updatedData = [...data];
    updatedData[rowIndex] = updatedRow;
    setData(updatedData);
  };

  function displayRow(row, rowIndex) {
    return (
      <tr key={rowIndex}>
        {row.map((cell, columnIndex) => (
          <td key={`${rowIndex}-${columnIndex}`} className="cell">
            <input type="text" className='cell-content' value={cell} onChange={(event) => handleCellChange(event, rowIndex, columnIndex)} />
          </td>
        ))}
      </tr>
    );
  };

  function displayHeaders(header, columnIndex) {
    return (
      <th key={columnIndex}>
        {header}
      </th>
    );
  };

  return (
    <div>
      <div className='grid-container'>
        <table className='grid'>
          <thead>
            <tr>
              {headers.map((header, columnIndex) => displayHeaders(header, columnIndex))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => displayRow(row, rowIndex))}
          </tbody>
        </table>
        <input ref={columnInputRef} />
        <button onClick={addColumn}>Add Column</button>
        <button onClick={removeColumn}>Remove Column</button>
      </div>
      <div className="grid-container">
        <button onClick={removeRow}>Remove Row</button>
        <button onClick={addRow}>Add Row</button>
      </div>
    </div>
  );
}

export default Grid;
