document.addEventListener('DOMContentLoaded', async () => {
    const productsContainer = document.getElementById('productsContainer');

    // Simulated products data (replace with real API call to fetch products)
    const products = [
        {
            id: 1,
            name: 'Product A',
            description: 'Lorem ipsum dolor sit amet',
            quantity: 10,
            minStockLevel: 5
        },
        {
            id: 2,
            name: 'Product B',
            description: 'Consectetur adipiscing elit',
            quantity: 3,
            minStockLevel: 10
        },
        {
            id: 3,
            name: 'Product C',
            description: 'Sed do eiusmod tempor incididunt',
            quantity: 8,
            minStockLevel: 7
        }
    ];

    // Function to render products
    function renderProducts() {
        productsContainer.innerHTML = '';

        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');

            productElement.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>Current Quantity: ${product.quantity}</p>
                <form id="minStockForm${product.id}">
                    <label for="minStockInput${product.id}">Set Minimum Stock Level:</label>
                    <input type="number" id="minStockInput${product.id}" value="${product.minStockLevel}" min="0" required>
                    <button type="submit">Set</button>
                </form>
            `;

            // Event listener for setting minimum stock level
            const minStockForm = productElement.querySelector(`#minStockForm${product.id}`);
            minStockForm.addEventListener('submit', async (event) => {
                event.preventDefault();

                const minStockInput = document.getElementById(`minStockInput${product.id}`).value;
                product.minStockLevel = parseInt(minStockInput);

                // Simulated API call to update minimum stock level (replace with actual API call)
                console.log(`Set minimum stock level for ${product.name} to ${product.minStockLevel}`);
            });

            // Check for low stock
            if (product.quantity < product.minStockLevel) {
                const alertElement = document.createElement('div');
                alertElement.classList.add('alert');
                alertElement.textContent = `Low Stock Alert: ${product.name} needs restocking!`;
                productElement.appendChild(alertElement);
            }

            productsContainer.appendChild(productElement);
        });
    }

    // Initial render of products
    renderProducts();
});
