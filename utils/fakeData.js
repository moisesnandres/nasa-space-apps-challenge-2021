export const plasticWaste = [
  {
    country: 'China',
    percentage: 88,
    label: '8.80'
  },
  {
    country: 'Indonesia',
    percentage: 32,
    label: '3.20'
  },
  {
    country: 'Philippines',
    percentage: 19,
    label: '1.90'
  },
  {
    country: 'Vietnam',
    percentage: 18,
    label: '1.80'
  },
  {
    country: 'Sri Lanka',
    percentage: 16,
    label: '1.60'
  }
]

export const plasticGrowth = {
  labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'],
  datasets: [
    {
      label: "Growth",
      fill: false,
      lineTension: 0.1,
      borderColor: '#027EC6',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#C32753',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [40, 46, 55, 59, 75, 78, 81]
    }
  ]
};

export const plasticByOcean = {
  labels: [
    'High',
    'Medium',
    'Low'
  ],
  datasets: [{
    data: [300, 120, 120],
    backgroundColor: [
    '#FF6384',
    '#FFCE56',
    '#36A2EB'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#FFCE56',
    '#36A2EB'
    ]
  }]
};
