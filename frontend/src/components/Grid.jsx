import React, { useState, useRef } from 'react';

function Grid() {
  const [gridData, setGridData] = useState([['Calculus BC', 'A+']]);
  const [headers, setHeaders] = useState(['Course', 'Grade']);
  const [newHeader, setNewHeader] = useState('');
  const columnInputRef = useRef(null);

  const addRow = () => {
    const newRow = gridData.length > 0 ? Array.from({ length: gridData[0].length }, () => "newGrid") : ["newGrid"];
    setGridData([...gridData, newRow]);
  }

  const addColumn = () => {
    const newColumnName = columnInputRef.current.value || "New Column";
    const newColumnData = gridData.length > 0 ? gridData.map(row => [...row, "newGrid"]) : [["newGrid"]];
    const newHeaders = [...headers, newColumnName];
    setHeaders(newHeaders);
    setGridData(newColumnData);
  };  

  const removeRow = () => {
    if (gridData.length > 1) {
      setGridData(prevGridData => prevGridData.slice(0, -1));
    }
  }

  const removeColumn = () => {
    if (gridData.length > 0 && gridData[0].length > 1) {
      setHeaders(prevHeaders => prevHeaders.slice(0, -1));
      setGridData(prevGridData => prevGridData.map(row => row.slice(0, -1)));
    }
  }

  const handleNewHeaderChange = (event) => {
    setNewHeader(event.target.value);
  }

  return (
    <div>
      <div className='grid-container'>
        <table className='grid'>
          <thead>
            <tr>
              {gridData.length > 0 && gridData[0].map((_, columnIndex) => (
                <th key={columnIndex}>
                  {headers[columnIndex]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {gridData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, columnIndex) => (
                  <td key={`${rowIndex}-${columnIndex}`} className="cell">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <input ref={columnInputRef} value={newHeader} onChange={handleNewHeaderChange} />
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