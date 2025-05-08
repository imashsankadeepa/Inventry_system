import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'  


function UpdateItem() {

    const { id } = useParams();
    const [formData, setFormData] = useState({

        itemId: '',
        itemImage:null,
        itemName: '',
        itemCategory: '',
        itemQty: '',
        itemDetails: '',
    });
    useEffect(()=> {
        const fetchItemData = async ()=>{
            try {
                const response = await axios.get(`http://localhost:8080/inventry/${id}`);
                const itemData = response.data;
                setFormData({
                    itemId: itemData.itemId || '',
                    itemName: itemData.itemName || '',
                    itemCategory: itemData.itemCategory || '',
                    itemQty: itemData.itemQty || '',
                    itemDetails: itemData.itemDetails || '',
                    itemImage:null
                });
            } 
            catch (err) {
                console.error("Error fetching data:", err);
            }

            
        };
      
        fetchItemData();

    },[id]);

    const onInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        })
    };

    const onsubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('itemDetails',JSON.stringify({
            itemId: formData.itemId,
            itemName: formData.itemName,
            itemCategory: formData.itemCategory,
            itemQty: formData.itemQty,
            itemDetails: formData.itemDetails,

        }));
        if (formData.itemImage) {
            data.append('file', formData.itemImage);
        }
        try{
            const response = await axios.put(`http://localhost:8080/inventry/${id}`, data);
            alert('Item updated successfully');
            window.location.href = '/displayitem'; // Redirect to inventory page (adjust route as needed)
        }
        catch (err) {
            console.error("Error updating item:", err);
            alert('Error updating item:');
        }

    }


  return (
    <div>
    <h2>update Inventory Item</h2>
    <p>Please fill in the details below to add a new item to the inventory.</p>
    <form id='itemForm' onSubmit={onsubmit}>
      <label htmlFor="itemId">Item ID:</label><br />
      <input type="text" id="itemId" name="itemId"  onChange={onInputChange} value={formData.itemId} required  /><br /><br />

      <label htmlFor="itemImage">Item Image URL:</label><br />
      <input type="file" id="itemImage" name="itemImage" accept="image/*"  onChange={onInputChange}  /><br /><br />

      <label htmlFor="itemName">Item Name:</label><br />
      <input type="text" id="itemName" name="itemName" onChange={ onInputChange} value={formData.itemName} required /><br /><br />

      <label htmlFor="itemCategory">Item Category:</label><br />
      <select id="itemCategory" name="itemCategory"  onChange={onInputChange}  value={formData.itemCategory}required>
        <option value="">--Select Category--</option>
        <option value="Spare Parts">Spare Parts</option>
        <option value="Tools">Tools</option>
        <option value="Consumables">Consumables</option>
        <option value="Electronics">Electronics</option>
        <option value="Safety Equipment">Safety Equipment</option>
      </select><br /><br />

      <label htmlFor="itemQty">Quantity:</label><br />
      <input type="number" id="itemQty" name="itemQty" min="1" onChange={onInputChange}  value={formData.itemQty} required /><br /><br />

      <label htmlFor="itemDetails">Item Details:</label><br />
      <textarea id="itemDetails" onChange={onInputChange} value={formData.itemDetails} name="itemDetails" rows="4" cols="30"></textarea><br /><br />

      <button type="submit">update Item</button>
    </form>
  </div>
  )
}

export default UpdateItem
