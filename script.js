const products = [
  {
    id: 1,
    name: "iPhone 15",
    category: "electronics",
    price: 999,
    rating: 4.8,
    image: "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/wm/2023/09/apple-iphone-15-pro-4.jpg"
  },
  {
    id: 2,
    name: "Leather Jacket",
    category: "fashion",
    price: 150,
    rating: 4.3,
    image: "https://i.pinimg.com/736x/ae/9f/df/ae9fdf8eeea915a973d1b85e13d69a71.jpg"
  },
  {
    id: 3,
    name: "MacBook Pro",
    category: "electronics",
    price: 1999,
    rating: 4.9,
    image: "https://th.bing.com/th/id/OIP.OZrEEl8gXKWA1CL0z2cz9gHaE8?w=1200&h=800&rs=1&pid=ImgDetMain"
  },
  {
    id: 4,
    name: "T-Shirt Pack",
    category: "fashion",
    price: 35,
    rating: 4.0,
    image: "https://media.atlasformen.com/webmedia/1080by1242/e5/ff/2f/e5ff2f4ac223f5f99935164cc507f514.jpeg"
  },
  {
    id: 5,
    name: "JavaScript Mastery Book",
    category: "books",
    price: 45,
    rating: 4.7,
    image: "https://th.bing.com/th/id/OIP.7r7KNolUk4BcoHfy2eK23QHaLM?rs=1&pid=ImgDetMain"
  },
  {
    id: 6,
    name: "Smartwatch",
    category: "electronics",
    price: 199,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=400&q=80"
  }
];

const container = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const sortPrice = document.getElementById("sortPrice");
const sortRating = document.getElementById("sortRating");

function renderProducts(items) {
  container.innerHTML = "";
  items.forEach(product => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <p>Rating: ⭐${product.rating}</p>
      </div>
    `;
  });
}

function updateProductList() {
  let filtered = [...products];

  const category = categoryFilter.value;
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  const priceSort = sortPrice.value;
  if (priceSort === "low") filtered.sort((a, b) => a.price - b.price);
  else if (priceSort === "high") filtered.sort((a, b) => b.price - a.price);

  const ratingSort = sortRating.value;
  if (ratingSort === "low") filtered.sort((a, b) => a.rating - b.rating);
  else if (ratingSort === "high") filtered.sort((a, b) => b.rating - a.rating);

  renderProducts(filtered);
}

// Initial render
renderProducts(products);

// Event Listeners
categoryFilter.addEventListener("change", updateProductList);
sortPrice.addEventListener("change", updateProductList);
sortRating.addEventListener("change", updateProductList);