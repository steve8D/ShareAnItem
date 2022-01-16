import React from "react";

const ItemRow = ({ item }) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.itemDescription}</td>
        <td>{item.quantity}</td>
        <td>{`${item.location} ${item.time}`}</td>
      </tr>
    );
}

export default ItemRow;