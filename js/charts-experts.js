    // EXPERT SENTIMENT BY FIELD
    new ApexCharts(document.querySelector("#expertChart"), {
      ...B, chart: {...B.chart, type: 'bar', height: 300},
      series: [{name: 'Alarmed', data: [2, 1, 4, 3, 0]}, {name: 'Cautious', data: [5, 3, 1, 2, 1]}, {name: 'Pragmatic', data: [2, 4, 1, 1, 2]}, {name: 'Positive', data: [0, 1, 0, 0, 1]}],
      xaxis: {categories: ['Water/Climate', 'Energy/Grid', 'AI Researchers', 'Art/Creative', 'Law/Policy'], labels: {style: {fontFamily: 'JetBrains Mono', fontSize: '10px'}}},
      yaxis: {labels: {style: {fontFamily: 'JetBrains Mono'}}},
      colors: ['#ff4d6a', '#f0a030', '#5e7ce2', '#2dd4a8'], plotOptions: {bar: {borderRadius: 4, columnWidth: '55%', stacked: false}},
      dataLabels: {enabled: false}, legend: {position: 'top', fontSize: '10px', fontFamily: 'JetBrains Mono', labels: {colors: '#6a6d88'}, markers: {width: 8, height: 8, radius: 2}}, grid: B.grid
    }).render();
