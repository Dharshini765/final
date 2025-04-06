const productsData = {
  phones: [
    { name: "Apple iPhone 14", price: 999, description: "Latest model with A15 Bionic chip", image: "images/iphone.jpg" },
    { name: "Samsung Galaxy S22", price: 899, description: "High-performance smartphone with AMOLED display", image: "images/samsung.jpg" },
    { name: "OnePlus 11", price: 799, description: "Premium flagship with Snapdragon 8 Gen 2", image: "images/oneplus.jpg" },
    { name: "Xiaomi 13 Pro", price: 749, description: "Affordable flagship with Leica camera", image: "images/xiaomi.jpg" },
    { name: "Google Pixel 7", price: 699, description: "Pure Android experience with Tensor chip", image: "images/pixel.jpg" },
    { name: "Oppo Reno8", price: 649, description: "Sleek design with great camera performance", image: "images/oppo.jpg" },
    { name: "Realme GT Neo 3", price: 599, description: "Gaming powerhouse with ultra-fast charging", image: "images/realme.jpg" },
    { name: "Motorola Edge 30", price: 549, description: "Stylish and versatile smartphone", image: "images/motorola.jpg" },
    { name: "Nokia X30", price: 499, description: "Sustainable and durable smartphone", image: "images/nokia.jpg" },
    { name: "Vivo V27 Pro", price: 449, description: "Affordable phone with flagship specs", image: "images/vivo.jpg" }
  ]
};

function loadProducts(category) {
  const product1Select = document.getElementById('product1');
  const product2Select = document.getElementById('product2');
  product1Select.innerHTML = '';
  product2Select.innerHTML = '';

  productsData[category].forEach(product => {
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    option1.textContent = product.name;
    option2.textContent = product.name;
    product1Select.appendChild(option1);
    product2Select.appendChild(option2);
  });
}

function compareProducts() {
  const product1 = document.getElementById('product1').value;
  const product2 = document.getElementById('product2').value;

  const resultsDiv = document.getElementById('results');
  const prod1Data = productsData.phones.find(prod => prod.name === product1);
  const prod2Data = productsData.phones.find(prod => prod.name === product2);

  resultsDiv.innerHTML = `
    <div>
      <h3>${prod1Data.name}</h3>
      <img src="${prod1Data.image}" alt="${prod1Data.name}">
      <p>Price: $${prod1Data.price}</p>
      <p>Description: ${prod1Data.description}</p>
    </div>
    <div>
      <h3>${prod2Data.name}</h3>
      <img src="${prod2Data.image}" alt="${prod2Data.name}">
      <p>Price: $${prod2Data.price}</p>
      <p>Description: ${prod2Data.description}</p>
    </div>
  `;
}