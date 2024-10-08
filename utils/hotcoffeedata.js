// scripts/hotcoffeedata.js

const hotCoffeeProducts = [
  {
      "id": 1,
      "name": "Signature Blend",
      "description": "A rich, full-bodied blend of carefully selected beans, offering a smooth and balanced flavor with a hint of chocolate and spice.",
      "price": 2.70,
      "region": "Global",
      "image": "https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg"
  },
  {
      "id": 2,
      "name": "House Blend",
      "description": "A medium roast that combines beans from different regions for a well-rounded and approachable flavor, perfect for everyday enjoyment.",
      "price": 2.52,
      "region": "Ethiopia & Brazil",
      "image": "https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg"
  },
  {
      "id": 3,
      "name": "French Roast",
      "description": "A dark roast with a smoky aroma and bold flavor, this roast brings out the deep, rich essence of the coffee beans.",
      "price": 2.88,
      "region": "Colombia",
      "image": "https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg"
  },
  {
      "id": 4,
      "name": "Breakfast Blend",
      "description": "A light and refreshing blend, perfect for starting your day. It offers bright, citrusy notes with a smooth finish.",
      "price": 2.34,
      "region": "Costa Rica",
      "image": "https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg"
  },
  {
      "id": 5,
      "name": "Espresso Roast",
      "description": "A specially crafted blend for espresso lovers, with deep, rich flavors and a robust crema that pairs perfectly with milk or as a standalone shot.",
      "price": 3.06,
      "region": "Italy",
      "image": "https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg"
  },
  {
      "id": 6,
      "name": "Italian Roast",
      "description": "A dark, bold, and full-bodied roast with a smoky flavor and strong aroma, perfect for those who enjoy a robust and intense coffee experience.",
      "price": 2.88,
      "region": "Italy",
      "image": "https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg"
  },
  {
      "id": 7,
      "name": "Colombian Roast",
      "description": "A single-origin coffee from Colombia, known for its bright acidity and smooth, rich flavor with hints of caramel and nuts.",
      "price": 2.70,
      "region": "Colombia",
      "image": "https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg"
  },
  {
      "id": 8,
      "name": "Sumatra Blend",
      "description": "A unique and earthy blend from Sumatra, offering deep, rich flavors with a smooth finish and hints of cocoa and spice.",
      "price": 2.97,
      "region": "Sumatra",
      "image": "https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg"
  },
  {
      "id": 9,
      "name": "Mocha Java",
      "description": "A traditional blend of Mocha beans from Yemen and Java beans from Indonesia, known for its full-bodied flavor with notes of chocolate and spice.",
      "price": 2.79,
      "region": "Yemen & Indonesia",
      "image": "https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg"
  },
  {
      "id": 10,
      "name": "Vienna Roast",
      "description": "A lighter dark roast with a rich, complex flavor profile, offering subtle sweetness and a smooth, balanced finish.",
      "price": 2.70,
      "region": "Vienna",
      "image": "https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg"
  },
  {
      "id": 11,
      "name": "Turkish Coffee",
      "description": "A finely ground coffee brewed in a special pot, offering a strong and aromatic flavor with a thick, rich texture.",
      "price": 3.15,
      "region": "Turkey",
      "image": "https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg"
  },
  {
      "id": 12,
      "name": "Kenyan AA",
      "description": "A premium grade coffee from Kenya, known for its bright acidity, fruity flavors, and full body.",
      "price": 3.24,
      "region": "Kenya",
      "image": "https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg"
  },
  {
      "id": 13,
      "name": "Brazilian Santos",
      "description": "A smooth and mild coffee from Brazil, offering nutty and sweet flavors with a balanced acidity.",
      "price": 2.61,
      "region": "Brazil",
      "image": "https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg"
  },
  {
      "id": 14,
      "name": "Guatemalan Antigua",
      "description": "A coffee from the Antigua region of Guatemala, known for its full body, rich flavor, and spicy aroma.",
      "price": 2.88,
      "region": "Guatemala",
      "image": "https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg"
  },
  {
      "id": 15,
      "name": "Hawaiian Kona",
      "description": "A highly prized coffee from Hawaii, celebrated for its smooth texture, sweet aroma, and nutty undertones.",
      "price": 3.60,
      "region": "Hawaii",
      "image": "https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg"
  },
  {
      "id": 16,
      "name": "Ethiopian Yirgacheffe",
      "description": "A single-origin coffee from Ethiopia, offering floral and citrus notes with a bright and lively acidity.",
      "price": 3.15,
      "region": "Ethiopia",
      "image": "https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg"
  },
  {
      "id": 17,
      "name": "Costa Rican Tarrazu",
      "description": "A high-altitude coffee from Costa Rica, known for its crisp acidity, full body, and vibrant flavors of fruit and honey.",
      "price": 2.97,
      "region": "Costa Rica",
      "image": "https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg"
  },
  {
      "id": 18,
      "name": "Nicaraguan Segovia",
      "description": "A balanced coffee from Nicaragua, featuring a medium body with sweet, nutty flavors and a hint of citrus.",
      "price": 2.70,
      "region": "Nicaragua",
      "image": "https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg"
  },
  {
      "id": 19,
      "name": "Panama Geisha",
      "description": "An exotic and highly sought-after coffee known for its unique floral and jasmine-like aroma, with a complex flavor profile.",
      "price": 3.96,
      "region": "Panama",
      "image": "https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg"
  }
];

module.exports = hotCoffeeProducts;