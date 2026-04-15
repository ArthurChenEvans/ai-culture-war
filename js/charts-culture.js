    // SEVERITY
    new ApexCharts(document.querySelector("#severityChart"), {
      ...B, chart: {...B.chart, type: 'bar', height: 340},
      series: [{name: 'Anti-AI Severity', data: [9.5, 8.5, 9, 7, 8, 7.5]}, {name: 'Pro-AI Severity', data: [5, 5.5, 6.5, 7, 6, 5.5]}],
      xaxis: {categories: ['Dehumanization', 'Moral\nCondemnation', 'Character\nAssassination', 'Intelligence\nAttack', 'Competence\nDismissal', 'Rationality\nAttack'], labels: {style: {fontFamily: 'JetBrains Mono', fontSize: '9px'}}},
      yaxis: {max: 10, title: {text: 'Severity (1-10)', style: {color: '#6a6d88', fontFamily: 'JetBrains Mono', fontSize: '9px'}}, labels: {style: {fontFamily: 'JetBrains Mono'}}},
      colors: ['#ff3355', '#3388ff'], plotOptions: {bar: {borderRadius: 4, columnWidth: '55%'}}, dataLabels: {enabled: false},
      legend: {position: 'top', fontSize: '10px', fontFamily: 'JetBrains Mono', labels: {colors: '#6a6d88'}, markers: {width: 8, height: 8, radius: 2}}, grid: B.grid
    }).render();

    // ANTI DONUT
    new ApexCharts(document.querySelector("#antiChart"), {
      ...B, chart: {...B.chart, type: 'donut', height: 280},
      series: [30, 25, 20, 15, 10], labels: ['Humanity/Soul', 'Moral Character', 'Creativity', 'Intelligence', 'Economic Worth'],
      colors: ['#ff3355', '#ff5577', '#ff7799', '#ff99aa', '#ffbbcc'], stroke: {width: 2, colors: ['#0e1018']},
      plotOptions: {pie: {donut: {size: '55%', labels: {show: true, name: {fontSize: '11px', color: '#6a6d88'}, value: {fontSize: '16px', fontFamily: 'JetBrains Mono', fontWeight: 700, color: '#d8dae8', formatter: v => v + '%'}, total: {show: true, label: 'Top Target', color: '#6a6d88', fontSize: '9px', formatter: () => 'Soul'}}}}},
      dataLabels: {enabled: false}, legend: {position: 'bottom', fontSize: '9px', fontFamily: 'JetBrains Mono', labels: {colors: '#6a6d88'}}
    }).render();

    // PRO DONUT
    new ApexCharts(document.querySelector("#proChart"), {
      ...B, chart: {...B.chart, type: 'donut', height: 280},
      series: [30, 25, 20, 15, 10], labels: ['Skill/Talent', 'Intelligence/IQ', 'Adaptability', 'Rationality', 'Economic Future'],
      colors: ['#3388ff', '#5599ff', '#77aaff', '#99bbff', '#bbccff'], stroke: {width: 2, colors: ['#0e1018']},
      plotOptions: {pie: {donut: {size: '55%', labels: {show: true, name: {fontSize: '11px', color: '#6a6d88'}, value: {fontSize: '16px', fontFamily: 'JetBrains Mono', fontWeight: 700, color: '#d8dae8', formatter: v => v + '%'}, total: {show: true, label: 'Top Target', color: '#6a6d88', fontSize: '9px', formatter: () => 'Skill'}}}}},
      dataLabels: {enabled: false}, legend: {position: 'bottom', fontSize: '9px', fontFamily: 'JetBrains Mono', labels: {colors: '#6a6d88'}}
    }).render();

    // GAP CHART
    new ApexCharts(document.querySelector("#gapChart"), {
      ...B, chart: {...B.chart, type: 'bar', height: 300},
      series: [{name: 'Silent Balanced Majority', data: [38, 55, 53, 49, 46, 37, 39]}, {name: 'Vocal Concerned Minority', data: [50, 28, 29, 35, 39, 49, 47]}, {name: 'Excited Minority', data: [10, 16, 17, 15, 13, 13, 10]}],
      xaxis: {categories: ['U.S.', 'Japan', 'Germany', 'France', 'UK', 'Australia', 'Greece'], labels: {style: {fontFamily: 'JetBrains Mono', fontSize: '10px'}}},
      yaxis: {max: 60, labels: {formatter: v => v + '%', style: {fontFamily: 'JetBrains Mono'}}},
      colors: ['#5e7ce2', '#ff4d6a', '#2dd4a8'], plotOptions: {bar: {borderRadius: 4, columnWidth: '60%'}},
      dataLabels: {enabled: true, formatter: v => v + '%', style: {fontSize: '9px', fontFamily: 'JetBrains Mono', colors: ['#d8dae8']}, background: {enabled: false}},
      legend: {position: 'top', fontSize: '10px', fontFamily: 'JetBrains Mono', labels: {colors: '#6a6d88'}, markers: {width: 8, height: 8, radius: 2}}, grid: B.grid
    }).render();

    // ============================================================
    // ENVIRONMENTAL IMPACT CHARTS
    // Paste INSIDE your existing <script> tag, AFTER the last
    // .render(); call (after the gapChart block)
    // ============================================================
