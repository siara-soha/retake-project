document.addEventListener('DOMContentLoaded', function() {
    const addProductForm = document.getElementById('addProductForm');
    const productsContainer = document.getElementById('productsContainer');

    // Array to store products (for demonstration purposes)
    let products = [];

    // Function to render products
    function renderProducts() {
        productsContainer.innerHTML = ''; // Clear products container
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <h3>${product.name}</h3>
                <p><strong>Description:</strong> ${product.description}</p>
                <p><strong>Category:</strong> ${product.category}</p>
                <p><strong>Quantity:</strong> ${product.quantity}</p>
                <p><strong>Cost:</strong> $${product.cost}</p>
                <p><strong>Selling Price:</strong> $${product.sellingPrice}</p>
                <p><strong>Supplier:</strong> ${product.supplier}</p>
                <button onclick="editProduct('${product.name}')">Edit</button>
                <button onclick="deleteProduct('${product.name}')">Delete</button>
            `;
            productsContainer.appendChild(productCard);
        });
    }

    // Function to add a new product
    addProductForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const productName = document.getElementById('productName').value;
        const productDescription = document.getElementById('productDescription').value;
        const productCategory = document.getElementById('productCategory').value;
        const productQuantity = parseInt(document.getElementById('productQuantity').value);
        const productCost = parseFloat(document.getElementById('productCost').value);
        const productSellingPrice = parseFloat(document.getElementById('productSellingPrice').value);
        const productSupplier = document.getElementById('productSupplier').value;

        const newProduct = {
            name: productName,
            description: productDescription,
            category: productCategory,
            quantity: productQuantity,
            cost: productCost,
            sellingPrice: productSellingPrice,
            supplier: productSupplier
        };

        products.push(newProduct); // Add new product to array
        renderProducts(); // Re-render products
        addProductForm.reset(); // Clear form inputs
    });

    // Function to delete a product
    window.deleteProduct = function(productName) {
        products = products.filter(product => product.name !== productName);
        renderProducts(); // Re-render products
    };

    // Function to edit a product
    window.editProduct = function(productName) {
        const product = products.find(product => product.name === productName);
        if (product) {
            // Fill form with product details for editing
            document.getElementById('productName').value = product.name;
            document.getElementById('productDescription').value = product.description;
            document.getElementById('productCategory').value = product.category;
            document.getElementById('productQuantity').value = product.quantity;
            document.getElementById('productCost').value = product.cost;
            document.getElementById('productSellingPrice').value = product.sellingPrice;
            document.getElementById('productSupplier').value = product.supplier;

            // Remove the product from the array
            products = products.filter(p => p.name !== productName);
            renderProducts(); // Re-render products after removing from view
        }
    };

    // Initial render of products (empty at start)
    renderProducts();
});
