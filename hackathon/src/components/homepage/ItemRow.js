import React from "react";

const ItemRow = ({ item }) => {
    return (
      <tr>
        <td>{item.user}</td>
        <td>{item.itemDescription}</td>
        <td>{item.quantity}</td>
        <td>{`${item.location} ${item.time}`}</td>
      </tr>
    );
}

export default ItemRow;