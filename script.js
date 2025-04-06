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
  ],
  laptops: [
    { name: "Dell Inspiron 15", price: 1200, description: "Reliable and efficient laptop", image: "images/dell.jpg" },
    { name: "HP Pavilion 14", price: 1100, description: "Stylish and powerful laptop", image: "images/hp.jpg" },
    { name: "Lenovo ThinkPad X1", price: 1300, description: "Premium business laptop with superior performance", image: "images/lenovo.jpg" },
    { name: "Asus ROG Zephyrus G15", price: 1400, description: "High-performance gaming laptop for enthusiasts", image: "images/asus.jpg" },
    { name: "Acer Aspire 7", price: 1000, description: "Affordable and versatile laptop for everyday use", image: "images/acer.jpg" },
    { name: "Apple MacBook Air", price: 1500, description: "Lightweight laptop with M2 chip for professionals", image: "images/macbook.jpg" },
    { name: "Microsoft Surface Laptop 4", price: 1400, description: "Premium productivity laptop with touch capabilities", image: "images/surface.jpg" },
    { name: "MSI Prestige 15", price: 1200, description: "Stylish and powerful laptop for creatives", image: "images/msi.jpg" },
    { name: "Razer Blade 14", price: 2000, description: "Ultimate gaming laptop with cutting-edge specs", image: "images/razer.jpg" },
    { name: "Samsung Galaxy Book Pro", price: 1300, description: "Powerful and lightweight laptop for portability", image: "images/samsunglaptop.jpg" }
  ],
  speakers: [
    { name: "Bose SoundLink Revolve", price: 200, description: "Compact portable Bluetooth speaker", image: "images/bose.jpg" },
    { name: "JBL Charge 5", price: 180, description: "Powerful sound with long battery life", image: "images/jbl.jpg" },
    { name: "Sony SRS-XB43", price: 250, description: "Extra bass and waterproof design", image: "images/sony.jpg" },
    { name: "Harman Kardon Onyx Studio 6", price: 300, description: "Elegant design with deep bass", image: "images/harman.jpg" },
    { name: "Marshall Kilburn II", price: 280, description: "Classic design with powerful sound", image: "images/marshall.jpg" },
    { name: "Beats Pill+", price: 220, description: "Compact sound with bold bass", image: "images/beats.jpg" },
    { name: "Logitech Z407", price: 150, description: "Affordable desktop speakers with Bluetooth", image: "images/logitech.jpg" },
    { name: "Philips BT6620B", price: 170, description: "Stylish and compact for everyday listening", image: "images/philips.jpg" },
    { name: "Ultimate Ears Wonderboom 3", price: 120, description: "Waterproof Bluetooth speaker", image: "images/ue.jpg" },
    { name: "Sennheiser HD 350BT", price: 230, description: "Premium sound quality and sleek design", image: "images/sennheiser.jpg" }
  ],
  smartwatches: [
    { name: "Apple Watch Series 8", price: 399, description: "Health tracking and seamless integration", image: "images/applewatch.jpg" },
    { name: "Samsung Galaxy Watch 5", price: 350, description: "Advanced fitness features and durability", image: "images/samsungwatch.jpg" },
    { name: "Fitbit Sense 2", price: 300, description: "Stress and fitness tracking made easy", image: "images/fitbit.jpg" },
    { name: "Garmin Fenix 7", price: 600, description: "Premium multisport GPS watch", image: "images/garmin.jpg" },
    { name: "Fossil Gen 6", price: 250, description: "Stylish smartwatch with fitness tracking", image: "images/fossil.jpg" },
    { name: "Amazfit GTR 4", price: 200, description: "Affordable smartwatch with advanced sensors", image: "images/amazfit.jpg" },
    { name: "Huawei Watch GT 3", price: 350, description: "Elegant design with powerful tracking", image: "images/huawei.jpg" },
    { name: "Xiaomi Mi Band 7", price: 50, description: "Budget-friendly fitness tracker", image: "images/xiaomiwatch.jpg" },
    { name: "Realme Watch 3 Pro", price: 80, description: "Affordable and feature-packed smartwatch", image: "images/realme.jpg" },
    { name: "Oppo Watch", price: 300, description: "Stylish smartwatch with Wear OS", image: "images/oppowatch.jpg" }
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
