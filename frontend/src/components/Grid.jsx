import React, { useState, useRef } from 'react';

function Grid() {
  const [gridData, setGridData] = useState([]);
  const [columnHeaders, setColumnHeaders] = useState([]);
  const [newColumnHeader, setNewColumnHeader] = useState('');
  const columnInputRef = useRef(null);

  const addRow = () => {
    const newRow = gridData.length > 0 ? Array.from({ length: gridData[0].length }, () => "newGrid") : ["newGrid"];
    setGridData([...gridData, newRow]);
  }

  const addColumn = () => {
    const newColumnName = columnInputRef.current.value || "New Column";
    const newColumnData = gridData.length > 0 ? gridData.map(row => [...row, "newGrid"]) : [["newGrid"]];
    const newColumnHeaders = [...columnHeaders, newColumnName];
    setColumnHeaders(newColumnHeaders);
    setGridData(newColumnData);
  };  

  const removeRow = () => {
    if (gridData.length > 1) {
      setGridData(prevGridData => prevGridData.slice(0, -1));
    }
  }

  const removeColumn = () => {
    if (gridData.length > 0 && gridData[0].length > 1) {
      setColumnHeaders(prevHeaders => prevHeaders.slice(0, -1));
      setGridData(prevGridData => prevGridData.map(row => row.slice(0, -1)));
    }
  }

  const handleNewColumnHeaderChange = (event) => {
    setNewColumnHeader(event.target.value);
  }

  return (
    <div>
      <div className='grid-container'>
        <table className='grid'>
          <thead>
            <tr>
              {gridData.length > 0 && gridData[0].map((_, columnIndex) => (
                <th key={columnIndex}>
                  {columnIndex === gridData[0].length - 1 ?
                    <>
                      <input ref={columnInputRef} value={newColumnHeader} onChange={handleNewColumnHeaderChange} />
                      <button onClick={addColumn}>Add Column</button>
                    </>
                    :
                    columnHeaders[columnIndex]
                  }
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
