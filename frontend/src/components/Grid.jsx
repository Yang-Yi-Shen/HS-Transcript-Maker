import React, { useState, useRef } from 'react';

function Grid() {
  const [headers, setHeaders] = useState(['Course', 'Grade']);
  const [newHeader, setNewHeader] = useState('');
  const [gridData, setGridData] = useState([['AP Calculus', 'A+']]);
  const columnInputRef = useRef(null);

  const addRow = () => {
    if (headers.length > 0) {
      const newRow = headers.length > 0 ? Array.from({ length: headers.length }, () => "") : [""];
      setGridData([...gridData, newRow]);
    }
  };

  const addColumn = () => {
    const newColumnName = columnInputRef.current.value || "New Column";
    const newColumnData = gridData.length > 0 ? gridData.map(row => [...row, ""]) : [[]];
    const newHeaders = [...headers, newColumnName];
    setHeaders(newHeaders);
    setGridData(newColumnData);
  };  

  const removeRow = () => {
    if (gridData.length > 1) {
      setGridData(prevGridData => prevGridData.slice(0, -1));
    }
  };

  const removeColumn = () => {
    setHeaders(prevHeaders => prevHeaders.slice(0, -1));
    setGridData(prevGridData => prevGridData.map(row => row.slice(0, -1)));
  };

  const handleNewHeaderChange = (event) => {
    setNewHeader(event.target.value);
  };

  const handleCellChange = (event, rowIndex, columnIndex) => {
    const updatedRow = [...gridData[rowIndex]];
    updatedRow[columnIndex] = event.target.value;
    const updatedGridData = [...gridData];
    updatedGridData[rowIndex] = updatedRow;
    setGridData(updatedGridData);
  };

  return (
    <div>
      <div className='grid-container'>
        <table className='grid'>
          <thead>
            <tr>
              {headers.map((header, columnIndex) => (
                <th key={columnIndex}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {gridData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, columnIndex) => (
                  <td key={`${rowIndex}-${columnIndex}`} className="cell">
                    <input type="text" className='cell-content' value={cell} onChange={(event) => handleCellChange(event, rowIndex, columnIndex)} />
                  </td>
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