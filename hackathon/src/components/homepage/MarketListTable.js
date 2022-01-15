import React from "react";
import ItemRow from "./ItemRow";

const MarketListTable = ({ list }) => {
    return (
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Item Description</th>
              <th>Quantity</th>
              <th>Location and Time</th>
            </tr>
          </thead>
          <tbody>
              {list.map(item => <ItemRow item={item} />)}
          </tbody>
      </table>
    )
}

export default MarketListTable;