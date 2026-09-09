const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
  { id: 4, title: "Smartwatch", price: 250, category: "wearables", stock: 10 },
  { id: 5, title: "Tablet", price: 450, category: "laptops", stock: 8 },
  { id: 6, title: "Wireless Mouse", price: 30, category: "accessories", stock: 25 },
  { id: 7, title: "Mechanical Keyboard", price: 90, category: "accessories", stock: 12 },
  { id: 8, title: "Gaming Monitor", price: 350, category: "accessories", stock: 6 },
  { id: 9, title: "Bluetooth Speaker", price: 75, category: "audio", stock: 20 },
  { id: 10, title: "External Hard Drive 1TB", price: 60, category: "accessories", stock: 18 },
  { id: 11, title: "E-Reader", price: 130, category: "wearables", stock: 7 },
  { id: 12, title: "Noise Cancelling Earbuds", price: 180, category: "audio", stock: 4 },
  { id: 13, title: "Webcam HD", price: 50, category: "accessories", stock: 14 },
  { id: 14, title: "USB-C Hub", price: 40, category: "accessories", stock: 30 },
  { id: 15, title: "Power Bank 20000mAh", price: 45, category: "accessories", stock: 22 },
  { id: 16, title: "VR Headset", price: 400, category: "wearables", stock: 2 },
  { id: 17, title: "Drone Mini", price: 500, category: "wearables", stock: 3 },
  { id: 18, title: "Action Camera", price: 280, category: "audio", stock: 9 },
  { id: 19, title: "Gaming Laptop", price: 2100, category: "laptops", stock: 4 },
  { id: 20, title: "Budget Smartphone", price: 200, category: "phones", stock: 40 },
  { id: 21, title: "Flagship Smartphone", price: 1100, category: "phones", stock: 11 },
  { id: 22, title: "Fitness Tracker", price: 60, category: "wearables", stock: 19 },
  { id: 23, title: "Studio Microphone", price: 150, category: "audio", stock: 8 },
  { id: 24, title: "Graphic Tablet", price: 220, category: "accessories", stock: 5 },
  { id: 25, title: "Wi-Fi Router", price: 85, category: "accessories", stock: 16 },
  { id: 26, title: "Portable Projector", price: 310, category: "audio", stock: 3 },
  { id: 27, title: "Smart Tag Tracker", price: 29, category: "accessories", stock: 50 },
  { id: 28, title: "Ultrabook", price: 1350, category: "laptops", stock: 6 },
  { id: 29, title: "Gaming Earphones", price: 45, category: "audio", stock: 13 },
  { id: 30, title: "Stylus Pen", price: 99, category: "accessories", stock: 27 }
];

function findProductById(products, id){
    return products.find(product => product.id == id);
}

function findProductByStock(products, stock){
    return products.filter(product => product.stock < 10);
}

function updatestock(products,id,newstok){
  return products.map(p => p.id === id? {...p,stock: newstok} :p
 );
}

console.log(findProductById(products, 22 ));
console.log(findProductByStock(products ));

const updateProducts = updatestock(products, 22, 20);
console.log(updateProducts);
