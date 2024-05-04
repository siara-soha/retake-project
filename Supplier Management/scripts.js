document.addEventListener('DOMContentLoaded', () => {
    const supplierList = document.getElementById('supplierList');
    const supplierModal = document.getElementById('supplierModal');
    const modalTitle = document.getElementById('modalTitle');
    const supplierForm = document.getElementById('supplierForm');
    const supplierNameInput = document.getElementById('supplierName');
    const supplierContactInput = document.getElementById('supplierContact');

    // Simulated data for suppliers (replace with actual data fetched from backend)
    let suppliers = [
        { id: 1, name: 'Supplier A', contact: 'Email: supplierA@example.com, Phone: 123-456-7890' },
        { id: 2, name: 'Supplier B', contact: 'Email: supplierB@example.com, Phone: 987-654-3210' }
    ];

    // Function to display suppliers
    const displaySuppliers = () => {
        supplierList.innerHTML = ''; // Clear previous entries

        suppliers.forEach(supplier => {
            const supplierItem = document.createElement('div');
            supplierItem.classList.add('supplier-item');
            supplierItem.innerHTML = `
                <p><strong>Name:</strong> ${supplier.name}</p>
                <p><strong>Contact:</strong> ${supplier.contact}</p>
            `;
            supplierList.appendChild(supplierItem);
        });
    };

    // Function to show add/edit supplier modal
    const showSupplierModal = (title, supplier = null) => {
        modalTitle.textContent = title;
        if (supplier) {
            supplierNameInput.value = supplier.name;
            supplierContactInput.value = supplier.contact;
        } else {
            supplierNameInput.value = '';
            supplierContactInput.value = '';
        }
        supplierModal.style.display = 'block';
    };

    // Function to close supplier modal
    const closeModal = () => {
        supplierModal.style.display = 'none';
        supplierForm.reset();
    };

    // Event listener for adding a new supplier
    const showAddSupplierForm = () => {
        showSupplierModal('Add New Supplier');
        supplierForm.onsubmit = (event) => {
            event.preventDefault();
            const name = supplierNameInput.value;
            const contact = supplierContactInput.value;
            const newSupplier = { id: suppliers.length + 1, name, contact };
            suppliers.push(newSupplier);
            displaySuppliers();
            closeModal();
        };
    };

    // Initial display of suppliers
    displaySuppliers();
});
