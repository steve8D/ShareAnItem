import React from "react";

const ListingRow = ({ item, onRemove }) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.itemDescription}</td>
        <td>{item.quantity}</td>
        <td>{`${item.location} ${item.time}`}</td>
        <td>
          <button 
          onClick={() => onRemove(item.id)}>
            Reserve!
          </button>
        </td>
      </tr>
    );
}

export default ListingRow;