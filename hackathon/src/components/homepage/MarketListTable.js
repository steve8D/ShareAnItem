import React from "react";
import ItemRow from "./ItemRow";

const MarketListingsTable = ({ list }) => {
    return (
        <table className="marketListingsTable">
          <thead className="marketListingsHeader">
            <tr>
              <th>User ID</th>
              <th>User</th>
              <th>Item Description</th>
              <th>Quantity</th>
              <th>Location and Time</th>
            </tr>
          </thead>
          <tbody className="marketListingsRows">
              {list.map(item => <ItemRow key={item.id} item={item} />)}
          </tbody>
      </table>
    )
}

export default MarketListingsTable;