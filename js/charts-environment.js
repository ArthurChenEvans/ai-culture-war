    // ===== ENV CHART 1: GLOBAL WATER BY SECTOR (horizontal bar) =====
    new ApexCharts(document.querySelector("#envWaterSectorChart"), {
      ...B, chart: {...B.chart, type: 'bar', height: 260},
      series: [{name: 'Share of Global Freshwater', data: [70, 20, 12, 0.12]}],
      xaxis: {categories: ['Agriculture', 'Industry', 'Domestic /\nMunicipal', 'Global AI'], labels: {style: {fontFamily: 'JetBrains Mono', fontSize: '10px'}}},
      yaxis: {max: 80, labels: {formatter: v => v + '%', style: {fontFamily: 'JetBrains Mono'}}, title: {text: '% of Global Freshwater Withdrawals', style: {color: '#6a6d88', fontFamily: 'JetBrains Mono', fontSize: '9px'}}},
      plotOptions: {bar: {borderRadius: 6, columnWidth: '55%', distributed: true}},
      colors: ['#ff4d6a', '#f0a030', '#5e7ce2', '#2dd4a8'],
      dataLabels: {enabled: true, formatter: v => v + '%', style: {fontSize: '13px', fontFamily: 'JetBrains Mono', fontWeight: 800, colors: ['#d8dae8']}, background: {enabled: false}, offsetY: -8},
      legend: {show: false}, grid: B.grid
    }).render();

    // ===== ENV CHART 2: WATER MULTIPLIER =====
    new ApexCharts(document.querySelector("#envMultiplierChart"), {
      ...B, chart: {...B.chart, type: 'bar', height: 340},
      series: [{name: 'Times Larger Than Global AI', data: [500, 268, 237, 139, 71, 32, 23]}],
      xaxis: {
        categories: ['Global\nElectricity', 'Global\nCoffee', 'US Power\nGrid', 'Global\nChocolate', 'US Pipe\nLeaks', 'US Golf\nIndustry', 'US Grid\n90% Efficient'],
        labels: {style: {fontFamily: 'JetBrains Mono', fontSize: '8px'}}
      },
      yaxis: {labels: {formatter: v => v + '×', style: {fontFamily: 'JetBrains Mono'}}, title: {text: 'Multiplier vs Global AI Water (0.76T liters)', style: {color: '#6a6d88', fontFamily: 'JetBrains Mono', fontSize: '9px'}}},
      plotOptions: {bar: {borderRadius: 6, columnWidth: '60%', distributed: true}},
      colors: ['#ff3355', '#f0a030', '#ff5577', '#f0a030', '#ff7799', '#8b5cf6', '#ff99aa'],
      dataLabels: {enabled: true, formatter: v => v + '×', style: {fontSize: '13px', fontFamily: 'JetBrains Mono', fontWeight: 800, colors: ['#d8dae8']}, background: {enabled: false}, offsetY: -10},
      legend: {show: false}, grid: B.grid
    }).render();

    // ENV CHART 3 rendered via canvas inline (ApexCharts log scale broken for bars)

    // ===== ENV CHART 4: US FRESHWATER DONUT =====
    new ApexCharts(document.querySelector("#envUSWaterDonut"), {
      ...B, chart: {...B.chart, type: 'donut', height: 300},
      series: [72, 17, 8, 2.8, 0.16, 0.04],
      labels: ['Irrigation/Agriculture', 'Thermoelectric', 'Domestic/Municipal', 'Industrial/Mining', 'All Data Centers', 'AI in Data Centers'],
      colors: ['#ff3355', '#ff7799', '#5e7ce2', '#f0a030', '#8b5cf6', '#2dd4a8'],
      stroke: {width: 2, colors: ['#0e1018']},
      plotOptions: {pie: {donut: {size: '55%', labels: {show: true, name: {fontSize: '10px', color: '#6a6d88'}, value: {fontSize: '14px', fontFamily: 'JetBrains Mono', fontWeight: 700, color: '#d8dae8', formatter: v => parseFloat(v).toFixed(2) + '%'}, total: {show: true, label: 'AI Share', color: '#6a6d88', fontSize: '9px', formatter: () => '0.04%'}}}}},
      dataLabels: {enabled: false}, legend: {position: 'bottom', fontSize: '9px', fontFamily: 'JetBrains Mono', labels: {colors: '#6a6d88'}}
    }).render();

    // ===== ENV CHART 5: PERSONAL WATER IN PROMPTS =====
    // envPromptWaterChart rendered via canvas (linear scale — see inline script in HTML)

    // ===== ENV CHART 6: TIME vs ENERGY =====
    new ApexCharts(document.querySelector("#envTimeVsEnergyChart"), {
      ...B, chart: {...B.chart, type: 'bar', height: 280},
      series: [
        {name: '% of Waking Time', data: [44, 32, 12, 12]},
        {name: '% of Total Energy', data: [4, 66, 18, 12]}
      ],
      xaxis: {categories: ['Internet /\nComputing', 'Transport, Heat,\nIndustry (non-electric)', 'Residential\nElectricity', 'Commercial /\nOther Electric'], labels: {style: {fontFamily: 'JetBrains Mono', fontSize: '9px'}}},
      yaxis: {max: 70, labels: {formatter: v => v + '%', style: {fontFamily: 'JetBrains Mono'}}},
      colors: ['#5e7ce2', '#ff4d6a'],
      plotOptions: {bar: {borderRadius: 4, columnWidth: '55%'}},
      dataLabels: {enabled: true, formatter: v => v + '%', style: {fontSize: '10px', fontFamily: 'JetBrains Mono', fontWeight: 700, colors: ['#d8dae8']}, background: {enabled: false}},
      legend: {position: 'top', fontSize: '10px', fontFamily: 'JetBrains Mono', labels: {colors: '#6a6d88'}, markers: {width: 8, height: 8, radius: 2}},
      grid: B.grid
    }).render();

    // ===== ENV CHART 7: DATA CENTER ENERGY SHARE =====
    new ApexCharts(document.querySelector("#envDCEnergyChart"), {
      ...B, chart: {...B.chart, type: 'bar', height: 300},
      series: [
        {name: 'Non-AI Data Center', data: [85, 50]},
        {name: 'AI Share of DC', data: [15, 50]},
        {name: 'DC % of US Grid', data: [4.4, 12]}
      ],
      xaxis: {categories: ['2023-2024\n(Actual)', '~2030\n(Projected)'], labels: {style: {fontFamily: 'JetBrains Mono', fontSize: '11px'}}},
      yaxis: {max: 100, labels: {formatter: v => v + '%', style: {fontFamily: 'JetBrains Mono'}}},
      colors: ['#3e4060', '#8b5cf6', '#ff4d6a'],
      plotOptions: {bar: {borderRadius: 6, columnWidth: '50%'}},
      dataLabels: {enabled: true, formatter: v => v + '%', style: {fontSize: '11px', fontFamily: 'JetBrains Mono', fontWeight: 700, colors: ['#d8dae8']}, background: {enabled: false}},
      legend: {position: 'top', fontSize: '10px', fontFamily: 'JetBrains Mono', labels: {colors: '#6a6d88'}, markers: {width: 8, height: 8, radius: 2}},
      grid: B.grid
    }).render();

    // ===== ENV CHART 8: FOSSIL FUEL PERSISTENCE =====
    new ApexCharts(document.querySelector("#envFossilChart"), {
      ...B, chart: {...B.chart, type: 'bar', height: 340},
      series: [
        {name: 'US Grid Mix 2024', data: [43, 24, 18, 16]},
        {name: 'Data Center Power 2024', data: [40, 24, 20, 15]},
        {name: 'New DC Power to 2030 (Goldman Sachs)', data: [51, 27, 10, 12]}
      ],
      xaxis: {categories: ['Natural Gas', 'Renewables', 'Nuclear', 'Coal'], labels: {style: {fontFamily: 'JetBrains Mono', fontSize: '10px'}}},
      yaxis: {max: 55, labels: {formatter: v => v + '%', style: {fontFamily: 'JetBrains Mono'}}, title: {text: '% of Electricity Generation', style: {color: '#6a6d88', fontFamily: 'JetBrains Mono', fontSize: '9px'}}},
      colors: ['#5e7ce2', '#ff4d6a', '#f0a030'],
      plotOptions: {bar: {borderRadius: 4, columnWidth: '65%'}},
      dataLabels: {enabled: true, formatter: v => v + '%', style: {fontSize: '9px', fontFamily: 'JetBrains Mono', fontWeight: 700, colors: ['#d8dae8']}, background: {enabled: false}},
      legend: {position: 'top', fontSize: '10px', fontFamily: 'JetBrains Mono', labels: {colors: '#6a6d88'}, markers: {width: 8, height: 8, radius: 2}},
      grid: B.grid
    }).render();

    // ===== ENV CHART 9: NATIONAL OUTLIERS =====
    new ApexCharts(document.querySelector("#envNationalChart"), {
      ...B, chart: {...B.chart, type: 'bar', height: 320},
      series: [
        {name: 'Current (2024)', data: [24, 22, 4.4, 1.5]},
        {name: 'Projected (2026-2030)', data: [30, 32, 12, 3]}
      ],
      xaxis: {categories: ['Virginia\n(US State)', 'Ireland', 'United States\n(National)', 'Global\nAverage'], labels: {style: {fontFamily: 'JetBrains Mono', fontSize: '10px'}}},
      yaxis: {max: 36, labels: {formatter: v => v + '%', style: {fontFamily: 'JetBrains Mono'}}, title: {text: 'Data Centers as % of Electricity', style: {color: '#6a6d88', fontFamily: 'JetBrains Mono', fontSize: '9px'}}},
      colors: ['#f0a030', '#ff4d6a'],
      plotOptions: {bar: {borderRadius: 6, columnWidth: '55%'}},
      dataLabels: {enabled: true, formatter: v => v + '%', style: {fontSize: '10px', fontFamily: 'JetBrains Mono', fontWeight: 700, colors: ['#d8dae8']}, background: {enabled: false}},
      legend: {position: 'top', fontSize: '10px', fontFamily: 'JetBrains Mono', labels: {colors: '#6a6d88'}, markers: {width: 8, height: 8, radius: 2}},
      grid: B.grid,
      annotations: {yaxis: [{y: 1.5, borderColor: '#2dd4a833', strokeDashArray: 4, label: {text: 'Global Avg 2024', style: {color: '#2dd4a8', background: 'transparent', fontSize: '8px', fontFamily: 'JetBrains Mono'}, position: 'front'}}]}
    }).render();

    // ===== ENV CHART 10: WRENCH vs ROCKET =====
    new ApexCharts(document.querySelector("#envWrenchRocketChart"), {
      ...B, chart: {...B.chart, type: 'bar', height: 320},
      series: [
        {name: 'Traditional / Narrow AI ("The Wrench")', data: [1, 97, 100]},
        {name: 'Consumer Generative AI ("The Rocket")', data: [13, 3, 0]}
      ],
      xaxis: {categories: ['Relative Energy\nConsumption (×)', '% of Verified\nClimate Benefit Claims', 'Proven Emission\nReductions (%)'], labels: {style: {fontFamily: 'JetBrains Mono', fontSize: '9px'}}},
      yaxis: {labels: {style: {fontFamily: 'JetBrains Mono'}}, title: {text: 'Scale', style: {color: '#6a6d88', fontFamily: 'JetBrains Mono', fontSize: '9px'}}},
      colors: ['#2dd4a8', '#ff4d6a'],
      plotOptions: {bar: {borderRadius: 6, columnWidth: '50%'}},
      dataLabels: {
        enabled: true, formatter: function (v, {seriesIndex: s, dataPointIndex: d}) {
          if (d === 0 && s === 0) return '1×'; if (d === 0 && s === 1) return '13×';
          if (d === 2 && s === 1) return 'Zero'; return v + '%'
        },
        style: {fontSize: '12px', fontFamily: 'JetBrains Mono', fontWeight: 700, colors: ['#d8dae8']}, background: {enabled: false}
      },
      legend: {position: 'top', fontSize: '10px', fontFamily: 'JetBrains Mono', labels: {colors: '#6a6d88'}, markers: {width: 8, height: 8, radius: 2}},
      grid: B.grid
    }).render();

    // ===== ENV CHART 11: CO2 NET EQUATION =====
    new ApexCharts(document.querySelector("#envCO2Chart"), {
      ...B, chart: {...B.chart, type: 'bar', height: 320},
      series: [{name: 'Mt CO₂ by 2035', data: [1400, 488, 350, 215]}],
      xaxis: {
        categories: ['AI-Enabled\nEmission\nReductions\n(IEA)', 'Data Center\nEmissions\n(Lift-off Case)', 'Data Center\nEmissions\n(Base Case)', 'New DC\nEmissions\nto 2030\n(Goldman Sachs)'],
        labels: {style: {fontFamily: 'JetBrains Mono', fontSize: '8px'}}
      },
      yaxis: {labels: {formatter: v => v + ' Mt', style: {fontFamily: 'JetBrains Mono'}}, title: {text: 'Megatonnes CO₂', style: {color: '#6a6d88', fontFamily: 'JetBrains Mono', fontSize: '9px'}}},
      plotOptions: {bar: {borderRadius: 6, columnWidth: '55%', distributed: true}},
      colors: ['#2dd4a8', '#ff4d6a', '#ff7799', '#f0a030'],
      dataLabels: {
        enabled: true, formatter: function (v, {dataPointIndex: d}) {
          var l = ['−1,400 Mt\nSAVED', '488 Mt\nCOST', '350 Mt\nCOST', '215 Mt\nCOST']; return l[d]
        },
        style: {fontSize: '9px', fontFamily: 'JetBrains Mono', fontWeight: 700, colors: ['#d8dae8']}, background: {enabled: false}, offsetY: -12
      },
      legend: {show: false}, grid: B.grid
    }).render();

    // ===== ENV CHART 12: AI GLOBAL EMISSIONS IN CONTEXT =====
    // envGlobalCO2Chart rendered via canvas (linear scale — see inline script in HTML)

    // ===== ENV CHART 13: AI BREAKTHROUGHS =====
    new ApexCharts(document.querySelector("#envBreakthroughChart"), {
      ...B, chart: {...B.chart, type: 'bar', height: 300},
      series: [{name: 'Impact Scale', data: [800, 25, 70, 20, 34, 90]}],
      xaxis: {
        categories: ['Years of\nKnowledge\n(GNoME)', '× More Li-ion\nConductors\nDiscovered', '% Less\nLithium\n(N2116)', '% Irrigation\nEfficiency\nGain', '% Material\nReduction\n(Fero Labs)', '% CO₂\nReduction\n(Buildings AI)'],
        labels: {style: {fontFamily: 'JetBrains Mono', fontSize: '8px'}}
      },
      yaxis: {labels: {style: {fontFamily: 'JetBrains Mono'}}, title: {text: 'Impact Magnitude', style: {color: '#6a6d88', fontFamily: 'JetBrains Mono', fontSize: '9px'}}},
      plotOptions: {bar: {borderRadius: 6, columnWidth: '55%', distributed: true}},
      fill: {type: 'gradient', gradient: {shade: 'dark', type: 'vertical', shadeIntensity: 0.2, gradientToColors: ['#a8e84d', '#2dd4a8', '#5e7ce2', '#8b5cf6', '#f0a030', '#ff7799'], stops: [0, 100]}},
      colors: ['#2dd4a8', '#2dd4a8', '#5e7ce2', '#8b5cf6', '#f0a030', '#ff7799'],
      dataLabels: {
        enabled: true, formatter: function (v, {dataPointIndex: d}) {
          var l = ['~800 yrs', '25×', '70%', '20%', '34%', 'up to 90%']; return l[d]
        },
        style: {fontSize: '11px', fontFamily: 'JetBrains Mono', fontWeight: 800, colors: ['#d8dae8']}, background: {enabled: false}, offsetY: -10
      },
      legend: {show: false}, grid: B.grid
    }).render();

    // ===== ENV CHART 14: VERDICT — GLOBAL vs NATIONAL IMPACT =====
    new ApexCharts(document.querySelector("#envVerdictChart"), {
      ...B, chart: {...B.chart, type: 'bar', height: 280},
      series: [
        {name: 'Global Impact (% of total)', data: [70, 20, 8, 1.5, 0.12]},
        {name: 'National Grid Strain (% electricity)', data: [0, 0, 0, 12, 32]}
      ],
      xaxis: {categories: ['Agriculture', 'Industry', 'Domestic', 'All Data\nCenters\n(by 2030)', 'AI Water\n/ Ireland DC\n(by 2030)'], labels: {style: {fontFamily: 'JetBrains Mono', fontSize: '8px'}}},
      yaxis: {max: 75, labels: {formatter: v => v + '%', style: {fontFamily: 'JetBrains Mono'}}},
      colors: ['#5e7ce2', '#ff4d6a'],
      plotOptions: {bar: {borderRadius: 4, columnWidth: '55%'}},
      dataLabels: {enabled: true, formatter: function (v) {return v > 0 ? v + '%' : ''}, style: {fontSize: '9px', fontFamily: 'JetBrains Mono', fontWeight: 700, colors: ['#d8dae8']}, background: {enabled: false}},
      legend: {position: 'top', fontSize: '10px', fontFamily: 'JetBrains Mono', labels: {colors: '#6a6d88'}, markers: {width: 8, height: 8, radius: 2}},
      grid: B.grid
    }).render();

// ===== END ENVIRONMENTAL CHARTS =====

  // ===== SHARED LINEAR BAR CHART RENDERER =====
  function drawLinearBarChart(id, opts) {
    var canvas = document.getElementById(id);
    if (!canvas) return;
    canvas.width = canvas.parentElement.clientWidth || 900;
    var ctx = canvas.getContext('2d');
    var W = canvas.width, H = canvas.height;
    var data = opts.data;
    var fmt = opts.fmt || function(v) { return v; };
    var pct = opts.pct || null;

    var padL = 60, padR = 16, padT = 24, padB = 72;
    var chartW = W - padL - padR;
    var chartH = H - padT - padB;
    var n = data.length;
    var barW = Math.floor(chartW / n * 0.62);
    var gap = (chartW - barW * n) / (n + 1);

    var maxVal = Math.max.apply(null, data.map(function(d) { return d.value; }));
    var baseY = padT + chartH;

    function yForVal(v) {
      return padT + chartH - (v / maxVal) * chartH;
    }

    // Grid lines (just top and a couple intermediary)
    var gridVals = [maxVal * 0.25, maxVal * 0.5, maxVal * 0.75, maxVal];
    ctx.font = '9px JetBrains Mono, monospace';
    ctx.textAlign = 'right';
    gridVals.forEach(function(gv) {
      var gy = yForVal(gv);
      ctx.strokeStyle = '#1a1c30';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(padL, gy); ctx.lineTo(W - padR, gy); ctx.stroke();
      ctx.fillStyle = '#6a6d88';
      ctx.fillText(fmt(gv), padL - 5, gy + 3);
    });

    // Y axis label
    ctx.save();
    ctx.translate(12, padT + chartH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#6a6d88';
    ctx.font = '9px JetBrains Mono, monospace';
    ctx.fillText(opts.yLabel || '', 0, 0);
    ctx.restore();

    // Bars
    data.forEach(function(d, i) {
      var x = padL + gap + i * (barW + gap);
      var barH = (d.value / maxVal) * chartH;
      var topY = baseY - barH;

      if (barH >= 2) {
        ctx.fillStyle = d.color;
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(x, topY, barW, barH, [3, 3, 0, 0]);
        } else {
          ctx.rect(x, topY, barW, barH);
        }
        ctx.fill();
      }

      // Value label above bar (only if bar is tall enough to not overlap baseline)
      var lbl = pct ? pct[i] : fmt(d.value);
      ctx.font = 'bold 9px JetBrains Mono, monospace';
      ctx.fillStyle = barH < 6 ? '#6a6d88' : '#d8dae8';
      ctx.textAlign = 'center';
      var labelY = barH < 6 ? baseY - 10 : topY - 5;
      ctx.fillText(lbl, x + barW / 2, labelY);

      // X axis labels
      ctx.font = '8px JetBrains Mono, monospace';
      ctx.fillStyle = '#6a6d88';
      var lines = d.label.split('\n');
      var lineH = 11;
      var startY = H - padB + 14;
      lines.forEach(function(line, li) {
        ctx.fillText(line, x + barW / 2, startY + li * lineH);
      });
    });

    // Baseline
    ctx.strokeStyle = '#3e4060';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(padL, baseY); ctx.lineTo(W - padR, baseY); ctx.stroke();
  }
  

// ===== SHARED LINEAR BAR CHART RENDERER =====
  function drawLinearBarChart(id, opts) {
    var canvas = document.getElementById(id);
    if (!canvas) return;
    canvas.width = canvas.parentElement.clientWidth || 900;
    var ctx = canvas.getContext('2d');
    var W = canvas.width, H = canvas.height;
    var data = opts.data;
    var fmt = opts.fmt || function(v) { return v; };
    var pct = opts.pct || null;

    var padL = 60, padR = 16, padT = 24, padB = 72;
    var chartW = W - padL - padR;
    var chartH = H - padT - padB;
    var n = data.length;
    var barW = Math.floor(chartW / n * 0.62);
    var gap = (chartW - barW * n) / (n + 1);

    var maxVal = Math.max.apply(null, data.map(function(d) { return d.value; }));
    var baseY = padT + chartH;

    function yForVal(v) {
      return padT + chartH - (v / maxVal) * chartH;
    }

    // Grid lines (just top and a couple intermediary)
    var gridVals = [maxVal * 0.25, maxVal * 0.5, maxVal * 0.75, maxVal];
    ctx.font = '9px JetBrains Mono, monospace';
    ctx.textAlign = 'right';
    gridVals.forEach(function(gv) {
      var gy = yForVal(gv);
      ctx.strokeStyle = '#1a1c30';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(padL, gy); ctx.lineTo(W - padR, gy); ctx.stroke();
      ctx.fillStyle = '#6a6d88';
      ctx.fillText(fmt(gv), padL - 5, gy + 3);
    });

    // Y axis label
    ctx.save();
    ctx.translate(12, padT + chartH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#6a6d88';
    ctx.font = '9px JetBrains Mono, monospace';
    ctx.fillText(opts.yLabel || '', 0, 0);
    ctx.restore();

    // Bars
    data.forEach(function(d, i) {
      var x = padL + gap + i * (barW + gap);
      var barH = (d.value / maxVal) * chartH;
      var topY = baseY - barH;

      if (barH >= 2) {
        ctx.fillStyle = d.color;
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(x, topY, barW, barH, [3, 3, 0, 0]);
        } else {
          ctx.rect(x, topY, barW, barH);
        }
        ctx.fill();
      }

      // Value label above bar (only if bar is tall enough to not overlap baseline)
      var lbl = pct ? pct[i] : fmt(d.value);
      ctx.font = 'bold 9px JetBrains Mono, monospace';
      ctx.fillStyle = barH < 6 ? '#6a6d88' : '#d8dae8';
      ctx.textAlign = 'center';
      var labelY = barH < 6 ? baseY - 10 : topY - 5;
      ctx.fillText(lbl, x + barW / 2, labelY);

      // X axis labels
      ctx.font = '8px JetBrains Mono, monospace';
      ctx.fillStyle = '#6a6d88';
      var lines = d.label.split('\n');
      var lineH = 11;
      var startY = H - padB + 14;
      lines.forEach(function(line, li) {
        ctx.fillText(line, x + barW / 2, startY + li * lineH);
      });
    });

    // Baseline
    ctx.strokeStyle = '#3e4060';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(padL, baseY); ctx.lineTo(W - padR, baseY); ctx.stroke();
  }
  

window.addEventListener("load", function() {
  drawLinearBarChart('envDebtChart', {
            yLabel: 'Trillion Liters',
            data: [
              {label: 'Global Agriculture\n(total)', value: 2600, color: '#ff3355'},
              {label: 'Food Waste\n(28% of Ag)', value: 728, color: '#ff5577'},
              {label: 'Global Electricity\nSector', value: 378, color: '#ff4d6a'},
              {label: 'Global Coffee', value: 204.1, color: '#f0a030'},
              {label: 'US Power Grid\nAlone', value: 180, color: '#ff7799'},
              {label: 'Global Chocolate', value: 105.6, color: '#f0b030'},
              {label: 'US Pipe Leaks\n(waste)', value: 54, color: '#ff99aa'},
              {label: 'US Golf Courses', value: 24.3, color: '#8b5cf6'},
              {label: 'Global AI', value: 0.76, color: '#2dd4a8'},
            ],
            fmt: function(v) { return v < 1 ? v + 'T' : Math.round(v) + 'T'; }
          });
});

window.addEventListener("load", function() {
  drawLinearBarChart('envPromptWaterChart', {
            yLabel: 'Prompts Worth of Water',
            data: [
              {label: 'Smartphone', value: 6400000, color: '#5e7ce2'},
              {label: 'Jeans', value: 5400000, color: '#8b5cf6'},
              {label: 'Leather Shoes', value: 4000000, color: '#f0a030'},
              {label: 'T-Shirt', value: 1300000, color: '#ff7799'},
              {label: '400-Page Book', value: 1000000, color: '#2dd4a8'},
              {label: 'Single Piece\nof Paper', value: 2550, color: '#a8e84d'},
            ],
            fmt: function(v) {
              if (v >= 1000000) return (v/1000000).toFixed(1) + 'M';
              if (v >= 1000) return (v/1000).toFixed(0) + 'K';
              return v;
            }
          });
});

window.addEventListener("load", function() {
  drawLinearBarChart('envGlobalCO2Chart', {
            yLabel: 'Mt CO₂/yr',
            data: [
              {label: 'Electricity\n& Heat', value: 14800, color: '#ff3355'},
              {label: 'Transport', value: 3500, color: '#ff5577'},
              {label: 'Industry', value: 2800, color: '#ff7799'},
              {label: 'Buildings', value: 1900, color: '#f0a030'},
              {label: 'Agriculture\n& Land Use', value: 900, color: '#ffbb55'},
              {label: 'All Data\nCenters', value: 180, color: '#8b5cf6'},
              {label: 'All AI', value: 30, color: '#2dd4a8'},
            ],
            fmt: function(v) {
              if (v >= 1000) return (v/1000).toFixed(1) + 'Gt';
              return v + 'Mt';
            },
            pct: ['35.6%','8.4%','6.7%','4.6%','2.2%','0.43%','0.07%']
          });
});