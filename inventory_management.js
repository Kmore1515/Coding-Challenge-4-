// Task 1: Create an Inventory Array of Product Objects
let inventory = [
    {name: "tv", quantity: 15, price: 300, lowStockLevel: 5},
    {name: "toaster", quantity: 25, price: 45, lowStockLevel: 8},
    {name: "playstation", quantity: 12, price: 500, lowStockLevel: 4},
    {name: "phone", quantity: 20, price: 899, lowStockLevel: 6},
    {name: "laptop", quantity: 14, price: 700, lowStockLevel: 3}
]
// Task 2: Create a Function to Display Product Details
function display(product) {
    const status = product.quantity <= product.lowStockLevel ? "Low Stock" : "In Stock";
    return `${product.name} is ${status}`;
}
console.log(display(inventory[1]));
// Task 3: Create a Function to Update Product Stock After Sales
function updatestock(product, unitsSold) {
     product.quantity -= unitsSold;
     const newstatus = product.quantity <= 0 ? "out of stock" : "in stock"
    return `${product.name} is ${newstatus}`;
}
console.log(updatestock(inventory[2], 12));
// Task 4: Create a Function to Check Low Stock Products
function checkLowStock(inventory) {
    let lowStockItems = [];
    inventory.forEach(product => {if (product.quantity <= product.lowStockLevel)
    lowStockItems.push(`${product.name} has low stock.`);

})};
 return lowStockItems;
// Task 5: Create a Function to Calculate Total Inventory Value
function calculateInventoryValue(inventory) {
    return inventory.reduce((totalValue, product) => {
        return totalValue + (product.price * product.quantity)
    },[0])
    };
    const inventoryTotalValue = calculateInventoryValue(inventory);
    console.log(inventoryTotalValue);
// Task 6 Create a Function to Process a Sale
function processSalebyName(productName) {
    let productName = inventory.find((product => 
    {product.name === product}))
    if (productName) {
        return `${product.name} is is stock`
        else `product is not in stock`
    }
}