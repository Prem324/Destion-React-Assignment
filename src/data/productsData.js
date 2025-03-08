const products = [
  {
    productId: "PROD001",
    storeName: "Apple Store",
    productName: "Apple AirPods Pro",
    description:
      "Premium wireless earbuds with active noise cancellation, transparency mode, and customizable fit for immersive sound and all-day comfort",
    price: 249.99,
    category: "Electronics",
    imageUrl: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1500_.jpg",
  },
  {
    productId: "PROD002",
    storeName: "Amazon",
    productName: "Kindle Paperwhite",
    description:
      "A high-resolution, glare-free e-reader with waterproof design, adjustable backlight, and weeks-long battery life for seamless reading anywhere",
    price: 139.99,
    category: "Electronics",
    imageUrl: "https://m.media-amazon.com/images/I/61hPhRZx84L._AC_UY218_.jpg",
  },
  {
    productId: "PROD003",
    storeName: "Amazon",
    productName: "Epson EB-E01 Projector",
    description:
      "The Epson EB-E01 Projector delivers vibrant, high-quality visuals with 3,300 lumens of color brightness, compact design, and easy setup for seamless presentations and entertainment",
    price: 99.95,
    category: "Home",
    imageUrl: "https://m.media-amazon.com/images/I/51dWhEYo-hL._AC_UY218_.jpg",
  },
  {
    productId: "PROD004",
    storeName: "Best Buy",
    productName: "Sony 55-inch 4K Ultra HD TV",
    description:
      "Sony 55-inch 4K Ultra HD TV: Stunning picture quality with vibrant colors, HDR support, and smart features for an immersive home entertainment experience",
    price: 599.99,
    category: "Electronics",
    imageUrl: "https://m.media-amazon.com/images/I/81h-r-3hioL._AC_UY218_.jpg",
  },
  {
    productId: "PROD005",
    storeName: "Best Buy",
    productName: "Sony PlayStation 5",
    description:
      "Next-gen gaming console with lightning-fast loading, breathtaking graphics, immersive 3D audio, and adaptive haptic feedback for a revolutionary gaming experience",
    price: 499.99,
    category: "Electronics",
    imageUrl: "https://m.media-amazon.com/images/I/61998CBydXL._AC_UY218_.jpg",
  },
  {
    productId: "PROD006",
    storeName: "Nike",
    productName: "Nike Air Max 270",
    description:
      "Iconic lifestyle sneakers featuring the tallest Max Air unit for unmatched comfort, bold style, and all-day wearability",
    price: 150.0,
    category: "Clothing",
    imageUrl: "https://m.media-amazon.com/images/I/61hhB82FgGL._AC_UL320_.jpg",
  },
  {
    productId: "PROD007",
    storeName: "Target",
    productName: "Adidas Backpack",
    description:
      "Durable, stylish, and functional backpack with ample storage, comfortable straps, and iconic Adidas design for everyday use or sports",
    price: 40.0,
    category: "Accessories",
    imageUrl: "https://m.media-amazon.com/images/I/81hpFNU+UWL._AC_UL320_.jpg",
  },
  {
    productId: "PROD008",
    storeName: "Starbucks",
    productName: "Starbucks Signature Chocolate",
    description:
      "Indulge in the rich, velvety taste of Starbucks Signature Hot Chocolate, crafted with premium cocoa and steamed milk for a decadent, comforting treat",
    price: 549.99,
    category: "Home",
    imageUrl: "https://m.media-amazon.com/images/I/81r-Gd3b4JL._AC_UL320_.jpg",
  },
  {
    productId: "PROD009",
    storeName: "Apple Store",
    productName: "Apple MacBook Air Laptop",
    description:
      "Ultra-thin and lightweight, the Apple MacBook Air delivers powerful performance, stunning Retina display, and all-day battery life in a sleek, portable design",
    price: 63990.0,
    category: "Tools",
    imageUrl: "https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY218_.jpg",
  },
  {
    productId: "PROD010",
    storeName: "Walmart",
    productName: "Instant Pot Duo 7-in-1",
    description:
      "A versatile multi-cooker combining seven kitchen appliances in one, offering pressure cooking, slow cooking, steaming, and more for quick, easy meals",
    price: 99.95,
    category: "Home",
    imageUrl: "https://m.media-amazon.com/images/I/61WZ8UkkReL._AC_UL320_.jpg",
  },
  {
    productId: "PROD011",
    storeName: "Costco",
    productName: "Kirkland Signature Coffee",
    description:
      " Premium, rich, and smooth coffee blends offering exceptional quality and value for a satisfying brew every time",
    price: 15.0,
    category: "Groceries",
    imageUrl: "https://m.media-amazon.com/images/I/81Flo4xyQWL._AC_UL320_.jpg",
  },
  {
    productId: "PROD012",
    storeName: "Costco",
    productName: "Dyson V11 Cordless Vacuum",
    description:
      "Powerful, intelligent cordless vacuum with advanced suction, LCD screen, and up to 60 minutes of fade-free cleaning for ultimate convenience",
    price: 549.99,
    category: "Home",
    imageUrl: "https://m.media-amazon.com/images/I/61xIxBIiTML._AC_UY218_.jpg",
  },
  {
    productId: "PROD013",
    storeName: "Home Depot",
    productName: "DeWalt 20V Max Cordless Drill",
    description:
      "High-performance, versatile cordless drill with powerful motor, compact design, and long-lasting battery for professional-grade results",
    price: 129.0,
    category: "Tools",
    imageUrl: "https://m.media-amazon.com/images/I/51WPS11IuSL._AC_UL320_.jpg",
  },
  {
    productId: "PROD014",
    storeName: "Home Depot",
    productName: "Ryobi 18V Cordless Drill",
    description:
      "Reliable, lightweight, and versatile cordless drill with adjustable clutch, keyless chuck, and long-lasting battery for DIY projects and home repairs",
    price: 79.99,
    category: "Tools",
    imageUrl: "https://m.media-amazon.com/images/I/516H0VcEX1L._AC_UL320_.jpg",
  },
  {
    productId: "PROD015",
    storeName: "IKEA",
    productName: "Billy Bookcase",
    description: "A timeless design that fits perfectly in any room",
    price: 79.99,
    category: "Furniture",
    imageUrl: "https://m.media-amazon.com/images/I/51DbXNjLjdL._AC_UL320_.jpg",
  },
  {
    productId: "PROD016",
    storeName: "IKEA",
    productName: "POÄNG Armchair",
    description:
      "Iconic, ergonomic armchair with a timeless design, flexible frame, and cushioned comfort for a perfect blend of style and relaxation",
    price: 99.99,
    category: "Furniture",
    imageUrl: "https://m.media-amazon.com/images/I/41aLt0fvXrL._AC_UL320_.jpg",
  },
  {
    productId: "PROD017",
    storeName: "Starbucks",
    productName: "Starbucks Coffee Mug",
    description:
      "Durable, stylish, and iconic mugs designed to enhance your coffee experience with a touch of Starbucks charm",
    price: 12.99,
    category: "Kitchen",
    imageUrl: "https://m.media-amazon.com/images/I/410epLkArAL._AC_UL320_.jpg",
  },
  {
    productId: "PROD018",
    storeName: "Apple Store",
    productName: "iPhone 15 Pro",
    description:
      "A premium smartphone featuring a sleek titanium design, advanced A17 Pro chip, enhanced camera system, and seamless iOS experience for peak performance",
    price: 999.0,
    category: "Electronics",
    imageUrl: "https://m.media-amazon.com/images/I/81SigpJN1KL._AC_UY218_.jpg",
  },
  {
    productId: "PROD019",
    storeName: "Nike",
    productName: "Nike Tech Fleece Joggers",
    description:
      "Lightweight, stylish joggers with premium Tech Fleece fabric for exceptional comfort, warmth, and a modern athletic look",
    price: 100.0,
    category: "Clothing",
    imageUrl: "https://m.media-amazon.com/images/I/61sXk8gd5ML._AC_UL320_.jpg",
  },
  {
    productId: "PROD020",
    storeName: "Nike",
    productName: "Nike Air Force 1 Shoes",
    description:
      "Timeless, iconic sneakers with a sleek design, durable leather construction, and cushioned sole for unmatched style and comfort",
    price: 110.0,
    category: "Clothing",
    imageUrl: "https://m.media-amazon.com/images/I/61xCZR-TBmL._AC_UL320_.jpg",
  },
];
export default products;
