import React from 'react';

export const Table = ({ headers = [], data = [] }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <TableHeader key={index}>{header}</TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex} row={row} />
        ))}
      </tbody>
    </table>
  );
};

export const TableHeader = ({ children }) => {
  return <th>{children}</th>;
};

export const TableHead = ({ children }) => {
  return <thead>{children}</thead>;
};

export const TableBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const TableRow = ({ row }) => {
  return (
    <tr>
      {row.map((cell, cellIndex) => (
        <TableCell key={cellIndex} cell={cell} />
      ))}
    </tr>
  );
};

export const TableCell = ({ cell }) => {
  return <td>{cell}</td>;
};

export default Table;
