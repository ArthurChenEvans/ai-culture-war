    // SENTIMENT
    const cn = ['U.S.', 'Italy', 'Australia', 'Brazil', 'Greece', 'Canada', 'UK', 'Argentina', 'Spain', 'Poland', 'Mexico', 'France', 'Netherlands', 'Hungary', 'Indonesia', 'Kenya', 'Sweden', 'S. Africa', 'Germany', 'Japan', 'Turkey', 'Nigeria', 'Israel', 'India', 'S. Korea'];
    new ApexCharts(document.querySelector("#sentimentChart"), {
      ...B, chart: {...B.chart, type: 'bar', height: 440, stacked: true, stackType: '100%'},
      series: [{name: 'More Concerned', data: [50, 50, 49, 48, 47, 45, 39, 39, 39, 37, 35, 35, 34, 33, 32, 31, 31, 30, 29, 28, 26, 24, 21, 19, 16]}, {name: 'Balanced', data: [38, 37, 38, 37, 39, 45, 46, 41, 38, 42, 47, 49, 48, 47, 49, 43, 45, 42, 53, 55, 35, 36, 34, 39, 61]}, {name: 'More Excited', data: [10, 12, 13, 10, 10, 9, 13, 13, 19, 15, 13, 15, 16, 18, 14, 17, 22, 18, 17, 16, 19, 20, 29, 16, 22]}],
      xaxis: {categories: cn, labels: {style: {fontFamily: 'JetBrains Mono', fontSize: '8px'}, rotate: -55, trim: false}},
      yaxis: {labels: {formatter: v => v + '%', style: {fontFamily: 'JetBrains Mono'}}}, colors: ['#ff4d6a', '#5e7ce2', '#2dd4a8'],
      plotOptions: {bar: {borderRadius: 2, columnWidth: '72%'}}, dataLabels: {enabled: false},
      legend: {position: 'top', fontSize: '10px', fontFamily: 'JetBrains Mono', labels: {colors: '#6a6d88'}, markers: {width: 8, height: 8, radius: 2}}, grid: B.grid
    }).render();

    // SCATTER
    const sd = [{x: 53, y: 28, n: 'Japan'}, {x: 52, y: 35, n: 'France'}, {x: 51, y: 29, n: 'Germany'}, {x: 47, y: 50, n: 'U.S.'}, {x: 46, y: 31, n: 'Sweden'}, {x: 46, y: 34, n: 'Netherlands'}, {x: 45, y: 50, n: 'Italy'}, {x: 44, y: 49, n: 'Australia'}, {x: 41, y: 45, n: 'Canada'}, {x: 41, y: 39, n: 'UK'}, {x: 38, y: 37, n: 'Hungary'}, {x: 36, y: 21, n: 'Israel'}, {x: 34, y: 35, n: 'Poland'}, {x: 34, y: 47, n: 'Greece'}, {x: 30, y: 39, n: 'Spain'}, {x: 24, y: 16, n: 'S.Korea'}, {x: 21, y: 48, n: 'Brazil'}, {x: 19, y: 24, n: 'Nigeria'}, {x: 18, y: 32, n: 'Indonesia'}, {x: 14, y: 19, n: 'India'}, {x: 12, y: 31, n: 'Kenya'}];
    new ApexCharts(document.querySelector("#scatterChart"), {
      ...B, chart: {...B.chart, type: 'scatter', height: 320},
      series: [{name: 'Country', data: sd.map(d => ({x: d.x, y: d.y}))}],
      xaxis: {title: {text: 'Awareness %', style: {color: '#6a6d88', fontFamily: 'JetBrains Mono', fontSize: '9px'}}, min: 8, max: 58, labels: {style: {fontFamily: 'JetBrains Mono'}}},
      yaxis: {title: {text: 'Concerned %', style: {color: '#6a6d88', fontFamily: 'JetBrains Mono', fontSize: '9px'}}, min: 10, max: 55, labels: {formatter: v => v + '%', style: {fontFamily: 'JetBrains Mono'}}},
      colors: ['#8b5cf6'], markers: {size: 6, strokeWidth: 0, hover: {size: 9}},
      tooltip: {custom: function ({dataPointIndex}) {const d = sd[dataPointIndex]; return `<div style="padding:6px 10px;font-family:JetBrains Mono;font-size:10px"><b>${d.n}</b><br>Aware:${d.x}% Concerned:${d.y}%</div>`}},
      annotations: {
        yaxis: [{y: 34, borderColor: '#ff4d6a33', strokeDashArray: 4, label: {text: 'Median Concern', style: {color: '#ff4d6a', background: 'transparent', fontSize: '8px', fontFamily: 'JetBrains Mono'}}}],
        points: [{x: 53, y: 28, marker: {size: 0}, label: {text: 'Japan', style: {color: '#2dd4a8', background: 'transparent', fontSize: '9px', fontFamily: 'JetBrains Mono'}, offsetX: 8, offsetY: -6}}, {x: 47, y: 50, marker: {size: 0}, label: {text: 'U.S.', style: {color: '#ff4d6a', background: 'transparent', fontSize: '9px', fontFamily: 'JetBrains Mono'}, offsetX: 8, offsetY: -6}}]
      },
      grid: B.grid
    }).render();

    // US TIME
    new ApexCharts(document.querySelector("#usTimeChart"), {
      ...B, chart: {...B.chart, type: 'area', height: 260},
      series: [{name: 'Concerned %', data: [37, 38, 45, 50, 50]}],
      xaxis: {categories: ['2021', '2022', '2023', '2024', 'Jun 2025'], labels: {style: {fontFamily: 'JetBrains Mono'}}},
      yaxis: {min: 30, max: 55, labels: {formatter: v => v + '%', style: {fontFamily: 'JetBrains Mono'}}},
      colors: ['#ff4d6a'], fill: {type: 'gradient', gradient: {opacityFrom: .3, opacityTo: .05}}, stroke: {curve: 'smooth', width: 3},
      markers: {size: 5, strokeWidth: 0, colors: ['#ff4d6a'], hover: {size: 7}},
      dataLabels: {enabled: true, formatter: v => v + '%', offsetY: -8, style: {fontSize: '11px', fontFamily: 'JetBrains Mono', fontWeight: 700, colors: ['#d8dae8']}, background: {enabled: false}},
      annotations: {xaxis: [{x: '2023', borderColor: '#f0a03055', strokeDashArray: 4, label: {text: 'ChatGPT Era', style: {color: '#f0a030', background: 'transparent', fontSize: '8px', fontFamily: 'JetBrains Mono'}}}]},
      grid: B.grid
    }).render();
