// utils/api.js

export const addProduct = async (product) => {
    try {
      const response = await fetch("https://fake-coffee-brand-api.vercel.app/api", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });
  
      if (!response.ok) {
        throw new Error("Error adding product.");
      }
  
      const data = await response.json();
      console.log('Product added:', data);
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };
  