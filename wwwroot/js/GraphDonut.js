function toggleChartAndChangeColor(chartId) {
    const charts = {
        'ChartIncome': { button: 'btnIncome', bgColor: '#81C8E4', borderColor: '#81C8E4' },
        'ChartExpen': { button: 'btnExpen', bgColor: '#FF8686', borderColor: '#FF8686' },
        'list-income': { button: 'btnIncome', bgColor: '#81C8E4', borderColor: '#81C8E4' },
        'list-expen': { button: 'btnExpen', bgColor: '#FF8686', borderColor: '#FF8686' }
    };

    for (const [chart, { button, bgColor, borderColor }] of Object.entries(charts)) {
        const chartElement = document.getElementById(chart);
        const buttonElement = document.getElementById(button);

        const isActive = chart === chartId;

        chartElement.style.display = isActive ? 'block' : 'none';
        buttonElement.classList.toggle('active', isActive);
        buttonElement.nextElementSibling.style.backgroundColor = isActive ? bgColor : 'transparent';
        buttonElement.nextElementSibling.style.borderColor = isActive ? borderColor : '#ced4da';
    }
}

// Common data and configuration
const commonData = {
    labels: ['รายรับแน่นอน', 'รายรับไม่แน่นอน'],
    hoverOffset: 4
};

// Chart 1: Income
const incomeData = {
    ...commonData,
    datasets: [{
        label: 'รายรับ',
        data: [15000, 2500],
        backgroundColor: ['rgba(180, 226, 244, 1)', 'rgba(5, 101, 139, 1)'] // Blue, Cyan
    }]
};
const incomeConfig = { type: 'pie', data: incomeData };
new Chart(document.getElementById('ChartIncome'), incomeConfig);

// Chart 2: Expenditure
const expenditureData = {
    ...commonData,
    labels: ['รายจ่ายจำเป็น', 'รายจ่ายไม่จำเป็น'],
    datasets: [{
        label: 'รายจ่าย',
        data: [15000, 2500],
        backgroundColor: ['rgba(248, 237, 117, 1)', 'rgba(245, 108, 108, 1)'] // Red, Yellow
    }]
};
const expenditureConfig = { type: 'pie', data: expenditureData };
new Chart(document.getElementById('ChartExpen'), expenditureConfig);