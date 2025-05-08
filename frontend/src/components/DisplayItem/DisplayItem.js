import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DisplayItem.css';

function DisplayItem() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    loadInventory();
  }, []);

  const loadInventory = async () => {
    try {
      const result = await axios.get("http://localhost:8080/inventry");
      setInventory(result.data);
    } catch (error) {
      console.error("Error loading inventory:", error);
    }
  };

  const UpdateNavigate = (id) => {
    window.location.href = `/updateitem/${id}`;
  };

  const deleteItem = async (id) => {
    const confirmationMessage = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmationMessage) {
      try {
        await axios.delete(`http://localhost:8080/inventry/${id}`);
        alert("Item deleted successfully");
        loadInventory();
      } catch (error) {
        console.error("Error deleting item:", error);
        alert("Error deleting item. Please try again.");
      }
    }
  };

  return (
    <div className="inventory-container">
      <h2 className="inventory-title">Inventory Items</h2>
      <table className="inventory-table">
        <thead>
          <tr className="table-header">
            <th>Item ID</th>
            <th>Item Image</th>
            <th>Item Name</th>
            <th>Item Category</th>
            <th>Item Quantity</th>
            <th>Item Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={index} className="table-row">
              <td>{item.itemId}</td>
              <td>
                <img
                  src={`http://localhost:8080/uploads${item.itemImage}`}
                  alt={item.itemImage}
                  className="item-image"
                />
              </td>
              <td>{item.itemName}</td>
              <td>{item.itemCategory}</td>
              <td>{item.itemQty}</td>
              <td>{item.itemDetails}</td>
              <td>
                <button
                  onClick={() => UpdateNavigate(item.id)}
                  className="action-button update-button"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="action-button delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayItem;