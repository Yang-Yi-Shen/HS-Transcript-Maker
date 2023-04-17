import React, { useState } from 'react';

function Grid() {
  const [gridData, setGridData] = useState([]);

  const addRow = () => {
    const newRow = gridData.length > 0 ? Array.from({ length: gridData[0].length }, () => "newGrid") : ["newGrid"];
    setGridData([...gridData, newRow]);
  }

  const addColumn = () => {
    const newColumn = gridData.length > 0 ? gridData.map(row => [...row, "newGrid"]) : [["newGrid"]];
    setGridData(newColumn);
  }

  const removeRow = () => {
    setGridData(gridData.slice(0, -1));
  }

  const removeColumn = () => {
    setGridData(gridData.map(row => row.slice(0, -1)));
  }

  return (
    <div>
      <div className='grid-container'>
        <table className='grid'>
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
        <button onClick={addColumn}>Add Column</button>
        <button onClick={removeColumn}>Remove Column</button>
      </div>
      <button onClick={addRow}>Add Row</button>
      <button onClick={removeRow}>Remove Row</button>
    </div>
  );
}

export default Grid;
