import React from "react";
import ListingRow from "./ListingRow";

const MarketListingsTable = ({ list, removeItem }) => {
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
              {list.map(item => <ListingRow key={item.id} item={item} onRemove={removeItem}/>)}
          </tbody>
      </table>
    )
}

export default MarketListingsTable;