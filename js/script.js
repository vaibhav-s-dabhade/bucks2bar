
window.onload = function() {
    
    document.getElementById('download').addEventListener('click', function() {
    var canvas = document.getElementById('myChart');
    var image = canvas.toDataURL('image/png');

    // Create a link
    var link = document.createElement('a');
    link.href = image;
    link.download = 'chart.png';

    // This will download the image on click
    link.click();
    });
    let ctx = document.getElementById('myChart').getContext('2d');
  
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: [], // Add your income data here
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Expenses',
                data: [], // Add your expenses data here
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    document.getElementById('chart-tab').addEventListener('click', function() {

        let incomeData = [
        document.getElementById('january-income').value,
        document.getElementById('february-income').value,
        document.getElementById('march-income').value,
        document.getElementById('april-income').value,
        document.getElementById('may-income').value,
        document.getElementById('june-income').value,
        document.getElementById('july-income').value,
        document.getElementById('august-income').value,
        document.getElementById('september-income').value,
        document.getElementById('october-income').value,
        document.getElementById('november-income').value,
        document.getElementById('december-income').value
        ];
    
        let expensesData = [
        document.getElementById('january-expenses').value,
        document.getElementById('february-expenses').value,
        document.getElementById('march-expenses').value,
        document.getElementById('april-expenses').value,
        document.getElementById('may-expenses').value,
        document.getElementById('june-expenses').value,
        document.getElementById('july-expenses').value,
        document.getElementById('august-expenses').value,
        document.getElementById('september-expenses').value,
        document.getElementById('october-expenses').value,
        document.getElementById('november-expenses').value,
        document.getElementById('december-expenses').value
        ];
   
        myChart.data.datasets[0].data = incomeData;
        myChart.data.datasets[1].data = expensesData;

        // Update the chart
        myChart.update();
    });
    
}
