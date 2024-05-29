// Assignment 3: Company Product Catalog
// Learning Objective: Implement data structures in TypeScript to represent and manage product
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
// 5. Explore adding and accessing
type Product = {
    name: string;
    model: string;
    cost: string | number; // Corrected type definition
    quantity: number;
};

// Initialize the inventory array
let inventory: Product[] = [];

// Define first product
let firstProduct: Product = {
    name: "Toyota Corolla",
    model: "ALTIS MT",
    cost: "PKR 5,969,000",
    quantity: 1,
};

// Define second product
let secondProduct: Product = {
    name: "Smartphone",
    model: "XYZ456",
    cost: 499.99,
    quantity: 20,
};

// Define third product
let thirdProduct: Product = {
    name: "Laptop",
    model: "ModelC",
    cost: 1199.99,
    quantity: 5,
};

// Add products to the inventory
inventory.push(firstProduct, secondProduct, thirdProduct);

// Log the inventory
console.log(inventory);