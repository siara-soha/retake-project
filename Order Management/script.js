document.addEventListener('DOMContentLoaded', () => {
    const purchaseOrdersList = document.getElementById('purchaseOrdersList');
    const salesOrdersList = document.getElementById('salesOrdersList');
    const orderModal = document.getElementById('orderModal');
    const modalTitle = document.getElementById('modalTitle');
    const orderForm = document.getElementById('orderForm');
    const orderProductInput = document.getElementById('orderProduct');
    const orderQuantityInput = document.getElementById('orderQuantity');

    // Function to display purchase orders
    const displayPurchaseOrders = () => {
        purchaseOrdersList.innerHTML = ''; // Clear previous entries

        // Simulated data (replace with actual data fetched from backend)
        const purchaseOrders = [
            { id: 1, product: 'Product A', quantity: 10 },
            { id: 2, product: 'Product B', quantity: 20 },
            { id: 3, product: 'Product C', quantity: 15 }
        ];

        purchaseOrders.forEach(order => {
            const orderItem = document.createElement('div');
            orderItem.classList.add('order-item');
            orderItem.innerHTML = `
                <p><strong>Product:</strong> ${order.product}</p>
                <p><strong>Quantity:</strong> ${order.quantity}</p>
            `;
            purchaseOrdersList.appendChild(orderItem);
        });
    };

    // Function to display sales orders
    const displaySalesOrders = () => {
        salesOrdersList.innerHTML = ''; // Clear previous entries

        // Simulated data (replace with actual data fetched from backend)
        const salesOrders = [
            { id: 1, product: 'Product X', quantity: 5 },
            { id: 2, product: 'Product Y', quantity: 8 },
            { id: 3, product: 'Product Z', quantity: 12 }
        ];

        salesOrders.forEach(order => {
            const orderItem = document.createElement('div');
            orderItem.classList.add('order-item');
            orderItem.innerHTML = `
                <p><strong>Product:</strong> ${order.product}</p>
                <p><strong>Quantity:</strong> ${order.quantity}</p>
            `;
            salesOrdersList.appendChild(orderItem);
        });
    };

    // Function to show order modal
    const showOrderModal = (title) => {
        modalTitle.textContent = title;
        orderModal.style.display = 'block';
    };

    // Function to close order modal
    const closeModal = () => {
        orderModal.style.display = 'none';
        orderForm.reset();
    };

    // Event listeners for order buttons
    const showPurchaseOrderForm = () => {
        showOrderModal('Create Purchase Order');
        orderForm.onsubmit = (event) => {
            event.preventDefault();
            const product = orderProductInput.value;
            const quantity = parseInt(orderQuantityInput.value);
            // Simulated API call to create purchase order (replace with actual API call)
            console.log(`Created Purchase Order - Product: ${product}, Quantity: ${quantity}`);
            closeModal();
            displayPurchaseOrders();
        };
    };

    const showSalesOrderForm = () => {
        showOrderModal('Create Sales Order');
        orderForm.onsubmit = (event) => {
            event.preventDefault();
            const product = orderProductInput.value;
            const quantity = parseInt(orderQuantityInput.value);
            // Simulated API call to create sales order (replace with actual API call)
            console.log(`Created Sales Order - Product: ${product}, Quantity: ${quantity}`);
            closeModal();
            displaySalesOrders();
        };
    };

    // Initial display of orders
    displayPurchaseOrders();
    displaySalesOrders();
});
