"use client";

import React, { useState } from 'react';

const NewItem = () => {

const [formData, setFormData] = useState({
  Quantity: '',
  Category: '',
  Item: '',
});

const [errors, setErrors] = useState({
  Quantity: '',
  Category: '',
  Item: '',
});

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = (event) => {
  event.preventDefault();

  let fillErrors = {
    Quantity: '',
    Category: '',
    Item: '',
  }

  if (!formData.Quantity) fillErrors.Quantity = 'Please add a valid quantity';

  if (!formData.lastName) fillErrors.Category = 'Please select a Category';

  if (!formData.age) fillErrors.Item = 'Please enter a valid quantity ';

  if (!formData.foodCategory) fillErrors.foodCategory = 'Please enter a valid item';

  setErrors(fillErrors);

  if (Object.values(fillErrors).some((error) => error !== '')) return;
  
  setFormData({
    Quantity: '',
    lastName: '',
    age: '',
    satisfaction: '',
    favoriteCategory: '',
  });
};

return (
  <div className="relative p-6 max-w-md mx-auto bg-yellow-400 rounded-md mt-8">
   { <h1 className="text-2xl mb-4">Add to the grocery list</h1>}

    <form onSubmit={handleSubmit} className="overflow-y-auto max-h-[300px]">
      <label className="block mb-2">
        {errors.lastName && <p className="text-red-400 bg-gray-700 m-2 border rounded justify-center flex ">{errors.lastName}</p>}
      </label>
      <label className="block mb-2">
        Quantity:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1 text-black"
          placeholder='100'
          min="1"
          max="120"
        />
        {errors.age && <p className="text-red-400 bg-gray-700 m-2 border rounded justify-center flex ">{errors.age}</p>}
      </label>
      <label>
        {errors.satisfaction && <p className="text-red-400 bg-gray-700 m-2 border rounded justify-center flex ">{errors.satisfaction}</p>}
      </label>
      <label className="block mb-2">
        How many will be added to the list?
        <select
          name="favoriteCategory"
          value={formData.favoriteCategory}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1 text-black">
          <option value="" disabled>Category</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Meat">Meat</option>
          <option value="Dairy">Dairy</option>
          <option value="Grains">Grains</option>
          <option value="Nuts">Snacks</option>
          <option value="Drinks">Bevies</option>
          <option value="Other">Other</option>
        </select>
        <label className="block mb-2">
        What will be added to the list?
        <input
          name="age"
          className="w-full p-2 border rounded mt-1 text-black"
          placeholder='Bread'
        />
        {errors.age && <p className="text-red-400 bg-gray-700 m-2 border rounded justify-center flex ">{errors.age}</p>}
      </label>
        {errors.favoriteCategory && <p className="text-red-400 bg-gray-700 m-2 border rounded justify-center flex ">{errors.favoriteCategory}</p>}
      </label>
      <button type="submit" className=" p-2 mt-4 bg-white text-black rounded hover:text-white hover:bg-black transition duration-1000">
        Add
      </button>
    </form>
  </div>
);
};

export default NewItem;