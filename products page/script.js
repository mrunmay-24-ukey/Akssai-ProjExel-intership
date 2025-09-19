
const container = document.getElementById('products');


async function fetchProducts() {
  try {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();

    renderProducts(data.products);
  } catch (err) {
    console.error("Error fetching products:", err);
    container.innerHTML = "<p>⚠️ Failed to load products.</p>";
  }
}

function renderProducts(products) {
  const cards = products.map(product => {
    return `
      <div class="product-card">
        <img src="${product.thumbnail}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>💲 ${product.price}</p>
      </div>
    `;
  });

  container.innerHTML = cards.join('');
}


fetchProducts();
