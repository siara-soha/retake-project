document.addEventListener('DOMContentLoaded', function() {
    // Simulate fetching metrics data from the server
    const metricsData = {
        stockLevels: 150,
        salesTrends: '$25,000',
        pendingOrders: 10,
        lowStockAlerts: ['Item A', 'Item B']
    };

    // Display metrics in the dashboard
    const metricsContainer = document.getElementById('metricsContainer');

    const metricsHTML = `
        <p>Current Stock Levels: ${metricsData.stockLevels}</p>
        <p>Sales Trends: ${metricsData.salesTrends}</p>
        <p>Pending Orders: ${metricsData.pendingOrders}</p>
        <p>Low Stock Alerts: ${metricsData.lowStockAlerts.join(', ')}</p>
    `;

    metricsContainer.innerHTML = metricsHTML;
});
