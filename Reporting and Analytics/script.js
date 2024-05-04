document.addEventListener('DOMContentLoaded', async () => {
    const reportsContainer = document.getElementById('reportsContainer');

    // Simulated data for reports (replace with actual data fetched from backend)
    const reportsData = [
        { title: 'Sales Report', description: 'View sales data for the past month', link: '#' },
        { title: 'Inventory Turnover Report', description: 'Track inventory turnover rates', link: '#' },
        { title: 'Profit Margins Report', description: 'Monitor profit margins over time', link: '#' }
    ];

    // Function to display reports
    const displayReports = () => {
        reportsContainer.innerHTML = ''; // Clear previous entries

        reportsData.forEach(report => {
            const reportElement = document.createElement('div');
            reportElement.classList.add('report');

            reportElement.innerHTML = `
                <h2>${report.title}</h2>
                <p>${report.description}</p>
                <a href="${report.link}" target="_blank">View Report</a>
            `;

            reportsContainer.appendChild(reportElement);
        });
    };

    // Initial display of reports
    displayReports();
});
