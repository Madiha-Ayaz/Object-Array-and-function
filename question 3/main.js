"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Initialize the inventory array
let inventory = [];
// Define first product
let firstProduct = {
    name: "Toyota Corolla",
    model: "ALTIS MT",
    cost: "PKR 5,969,000",
    quantity: 1,
};
// Define second product
let secondProduct = {
    name: "Smartphone",
    model: "XYZ456",
    cost: 499.99,
    quantity: 20,
};
// Define third product
let thirdProduct = {
    name: "Laptop",
    model: "ModelC",
    cost: 1199.99,
    quantity: 5,
};
// Add products to the inventory
inventory.push(firstProduct, secondProduct, thirdProduct);
// Log the inventory
console.log(inventory);
