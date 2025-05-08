import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Additem.css';

function AddItem() {
    const navigate = useNavigate();
    const [inventory, setInventory] = useState({
        itemId: "",
        itemImage: "",
        itemName: "",
        itemCategory: "",
        itemQty: "",
        itemDetails: ""
    });

    const { itemId, itemImage, itemName, itemCategory, itemQty, itemDetails } = inventory;

    const onInputChange = (e) => {
        if (e.target.name === "itemImage") {
            setInventory({ ...inventory, itemImage: e.target.files[0] });
        } else {
            setInventory({ ...inventory, [e.target.name]: e.target.value });
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", inventory.itemImage);
        let imageName = "";

        try {
            const response = await axios.post("http://localhost:8080/inventry/itemImg", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            imageName = response.data.imageName;
        } catch (error) {
            alert("Error uploading image:");
            return;
        }

        const updatedInventory = { ...inventory, itemImage: imageName };
        await axios.post("http://localhost:8080/inventry", updatedInventory);
        alert("Item added successfully");
        window.location.reload();
    };

    return (
        <div className="inventory-add-container">
            <h2 className="inventory-add-title">Add New Inventory Item</h2>
            <p className="inventory-add-description">Please fill in the details below to add a new item to the inventory.</p>
            <form className="inventory-form" onSubmit={onSubmit}>
                <label htmlFor="itemId" className="form-label">Item ID:</label>
                <input
                    type="text"
                    id="itemId"
                    name="itemId"
                    className="form-input"
                    onChange={onInputChange}
                    value={itemId}
                    required
                />

                <label htmlFor="itemImage" className="form-label">Item Image:</label>
                <input
                    type="file"
                    id="itemImage"
                    name="itemImage"
                    accept="image/*"
                    className="form-input"
                    onChange={onInputChange}
                />

                <label htmlFor="itemName" className="form-label">Item Name:</label>
                <input
                    type="text"
                    id="itemName"
                    name="itemName"
                    className="form-input"
                    onChange={onInputChange}
                    value={itemName}
                    required
                />

                <label htmlFor="itemCategory" className="form-label">Item Category:</label>
                <select
                    id="itemCategory"
                    name="itemCategory"
                    className="form-select"
                    onChange={onInputChange}
                    value={itemCategory}
                    required
                >
                    <option value="">--Select Category--</option>
                    <option value="Spare Parts">Spare Parts</option>
                    <option value="Tools">Tools</option>
                    <option value="Consumables">Consumables</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Safety Equipment">Safety Equipment</option>
                </select>

                <label htmlFor="itemQty" className="form-label">Quantity:</label>
                <input
                    type="number"
                    id="itemQty"
                    name="itemQty"
                    min="1"
                    className="form-input"
                    onChange={onInputChange}
                    value={itemQty}
                    required
                />

                <label htmlFor="itemDetails" className="form-label">Item Details:</label>
                <textarea
                    id="itemDetails"
                    name="itemDetails"
                    className="form-textarea"
                    rows="4"
                    onChange={onInputChange}
                    value={itemDetails}
                ></textarea>

                <button type="submit" className="submit-button">Add Item</button>
            </form>
        </div>
    );
}

export default AddItem;