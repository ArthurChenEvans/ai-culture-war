    // EDUCATION vs SENTIMENT
    new ApexCharts(document.querySelector("#eduChart"), {
      ...B, chart: {...B.chart, type: 'bar', height: 300},
      series: [{name: 'Less Education: Concerned %', data: [56, 42, 52, 38, 35]}, {name: 'More Education: Concerned %', data: [46, 30, 40, 25, 24]}],
      xaxis: {categories: ['U.S.', 'Japan', 'Australia', 'Germany', 'S. Korea'], labels: {style: {fontFamily: 'JetBrains Mono', fontSize: '10px'}}},
      yaxis: {max: 60, labels: {formatter: v => v + '%', style: {fontFamily: 'JetBrains Mono'}}},
      colors: ['#ff4d6a', '#2dd4a8'], plotOptions: {bar: {borderRadius: 4, columnWidth: '55%'}},
      dataLabels: {enabled: true, formatter: v => v + '%', style: {fontSize: '9px', fontFamily: 'JetBrains Mono', colors: ['#d8dae8']}, background: {enabled: false}},
      legend: {position: 'top', fontSize: '10px', fontFamily: 'JetBrains Mono', labels: {colors: '#6a6d88'}}, grid: B.grid
    }).render();
