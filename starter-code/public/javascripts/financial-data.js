// const financialInfo = axios.create({
//   baseURL: 'http://api.coindesk.com/v1/bpi/historical/close.json'
// });

const printTheChart = ((coinData) => {
  const coinLabels = Object.keys(coinData.bpi);
  const coinPrice = Object.values(coinData.bpi);
  const ctx = document.getElementById('myChart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: coinLabels,
      datasets: [{
        label: 'Bitcoin Chart',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: coinPrice
      }]
    }
  });
});

// const coinInfo = axios.create({
//   baseURL: 'http://api.coindesk.com/v1/bpi/'
// });

// coinInfo.get('historical/close.json')

axios.get('http://api.coindesk.com/v1/bpi/historical/close.json').then((response) => {
    console.log(response.data);
    printTheChart(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
