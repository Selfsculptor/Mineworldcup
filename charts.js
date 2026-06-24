(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // --- Chart: Bracket Tree ---
  function initBracketChart() {
    var chart = echarts.init(document.getElementById('bracket-chart'), null, { renderer: 'svg' });

    var treeData = {
      name: "冠军",
      itemStyle: { color: 'rgba(255,215,0,0.2)', borderColor: '#ffd700' },
      children: [
        {
          name: "半决赛",
          itemStyle: { color: 'rgba(249,115,22,0.15)', borderColor: '#f97316' },
          children: [
            {
              name: "1/4决赛",
              itemStyle: { color: 'rgba(236,72,153,0.15)', borderColor: '#ec4899' },
              children: [
                {
                  name: "1/8决赛",
                  itemStyle: { color: 'rgba(168,85,247,0.15)', borderColor: '#a855f7' },
                  children: [
                    { name: "A2 vs B2", value: 1, itemStyle: { color: 'rgba(245,158,11,0.2)', borderColor: '#f59e0b' } },
                    { name: "E1 vs 第三", value: 1, itemStyle: { color: 'rgba(34,197,94,0.2)', borderColor: '#22c55e' } }
                  ]
                },
                {
                  name: "1/8决赛",
                  itemStyle: { color: 'rgba(168,85,247,0.15)', borderColor: '#a855f7' },
                  children: [
                    { name: "F1 vs C2", value: 1, itemStyle: { color: 'rgba(34,197,94,0.2)', borderColor: '#22c55e' } },
                    { name: "C1 vs F2", value: 1, itemStyle: { color: 'rgba(34,197,94,0.2)', borderColor: '#22c55e' } }
                  ]
                }
              ]
            },
            {
              name: "1/4决赛",
              itemStyle: { color: 'rgba(236,72,153,0.15)', borderColor: '#ec4899' },
              children: [
                {
                  name: "1/8决赛",
                  itemStyle: { color: 'rgba(168,85,247,0.15)', borderColor: '#a855f7' },
                  children: [
                    { name: "I1 vs 第三", value: 1, itemStyle: { color: 'rgba(34,197,94,0.2)', borderColor: '#22c55e' } },
                    { name: "E2 vs I2", value: 1, itemStyle: { color: 'rgba(34,197,94,0.2)', borderColor: '#22c55e' } }
                  ]
                },
                {
                  name: "1/8决赛",
                  itemStyle: { color: 'rgba(168,85,247,0.15)', borderColor: '#a855f7' },
                  children: [
                    { name: "A1 vs 第三", value: 1, itemStyle: { color: 'rgba(34,197,94,0.2)', borderColor: '#22c55e' } },
                    { name: "L1 vs 第三", value: 1, itemStyle: { color: 'rgba(34,197,94,0.2)', borderColor: '#22c55e' } }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "半决赛",
          itemStyle: { color: 'rgba(249,115,22,0.15)', borderColor: '#f97316' },
          children: [
            {
              name: "1/4决赛",
              itemStyle: { color: 'rgba(236,72,153,0.15)', borderColor: '#ec4899' },
              children: [
                {
                  name: "1/8决赛",
                  itemStyle: { color: 'rgba(168,85,247,0.15)', borderColor: '#a855f7' },
                  children: [
                    { name: "D1 vs 第三", value: 1, itemStyle: { color: 'rgba(34,197,94,0.2)', borderColor: '#22c55e' } },
                    { name: "G1 vs 第三", value: 1, itemStyle: { color: 'rgba(34,197,94,0.2)', borderColor: '#22c55e' } }
                  ]
                },
                {
                  name: "1/8决赛",
                  itemStyle: { color: 'rgba(168,85,247,0.15)', borderColor: '#a855f7' },
                  children: [
                    { name: "K2 vs L2", value: 1, itemStyle: { color: 'rgba(245,158,11,0.2)', borderColor: '#f59e0b' } },
                    { name: "H1 vs J2", value: 1, itemStyle: { color: 'rgba(34,197,94,0.2)', borderColor: '#22c55e' } }
                  ]
                }
              ]
            },
            {
              name: "1/4决赛",
              itemStyle: { color: 'rgba(236,72,153,0.15)', borderColor: '#ec4899' },
              children: [
                {
                  name: "1/8决赛",
                  itemStyle: { color: 'rgba(168,85,247,0.15)', borderColor: '#a855f7' },
                  children: [
                    { name: "B1 vs 第三", value: 1, itemStyle: { color: 'rgba(34,197,94,0.2)', borderColor: '#22c55e' } },
                    { name: "J1 vs H2", value: 1, itemStyle: { color: 'rgba(34,197,94,0.2)', borderColor: '#22c55e' } }
                  ]
                },
                {
                  name: "1/8决赛",
                  itemStyle: { color: 'rgba(168,85,247,0.15)', borderColor: '#a855f7' },
                  children: [
                    { name: "K1 vs 第三", value: 1, itemStyle: { color: 'rgba(34,197,94,0.2)', borderColor: '#22c55e' } },
                    { name: "D2 vs G2", value: 1, itemStyle: { color: 'rgba(245,158,11,0.2)', borderColor: '#f59e0b' } }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };

    var option = {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(10, 31, 10, 0.95)',
        borderColor: '#22c55e',
        textStyle: { color: '#f0fdf4', fontSize: 12 },
        formatter: function(params) {
          return '<div style="font-weight:bold;color:#4ade80">' + params.name + '</div>';
        }
      },
      series: [
        {
          type: 'tree',
          data: [treeData],
          top: '3%',
          left: '4%',
          bottom: '3%',
          right: '4%',
          symbol: 'roundRect',
          symbolSize: [78, 26],
          orient: 'TB',
          nodePadding: 6,
          layerPadding: 30,
          label: {
            position: 'inside',
            verticalAlign: 'middle',
            align: 'center',
            fontSize: 9,
            color: '#f0fdf4',
            fontFamily: 'Inter, Microsoft YaHei'
          },
          leaves: {
            label: {
              position: 'inside',
              verticalAlign: 'middle',
              align: 'center',
              fontSize: 9
            }
          },
          lineStyle: {
            color: 'rgba(74, 222, 128, 0.35)',
            width: 1.5,
            curveness: 0.3
          },
          itemStyle: {
            borderWidth: 1
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(74, 222, 128, 0.4)'
            }
          },
          expandAndCollapse: false,
          animation: false,
          animationDuration: 0,
          animationDurationUpdate: 0
        }
      ]
    };

    chart.setOption(option);
    window.addEventListener('resize', function() { chart.resize(); });
    return chart;
  }

  // --- Chart: Schedule Timeline ---
  function initScheduleChart() {
    var chart = echarts.init(document.getElementById('schedule-chart'), null, { renderer: 'svg' });

    var scheduleData = [
      { name: 'A组末轮', start: '2026-06-25', end: '2026-06-25', type: 'group', teams: '南非vs韩国 / 捷克vs墨西哥' },
      { name: 'B组末轮', start: '2026-06-25', end: '2026-06-25', type: 'group', teams: '波黑vs卡塔尔 / 加拿大vs瑞士' },
      { name: 'C组末轮', start: '2026-06-25', end: '2026-06-25', type: 'group', teams: '摩洛哥vs海地 / 苏格兰vs巴西' },
      { name: 'D组末轮', start: '2026-06-26', end: '2026-06-26', type: 'group', teams: '美国vs土耳其 / 巴拉圭vs澳大利亚' },
      { name: 'E组末轮', start: '2026-06-26', end: '2026-06-26', type: 'group', teams: '厄瓜多尔vs德国 / 库拉索vs科特迪瓦' },
      { name: 'F组末轮', start: '2026-06-26', end: '2026-06-26', type: 'group', teams: '日本vs瑞典 / 突尼斯vs荷兰' },
      { name: 'G组末轮', start: '2026-06-27', end: '2026-06-27', type: 'group', teams: '新西兰vs比利时 / 埃及vs伊朗' },
      { name: 'H组末轮', start: '2026-06-27', end: '2026-06-27', type: 'group', teams: '乌拉圭vs西班牙 / 佛得角vs沙特' },
      { name: 'I组末轮', start: '2026-06-27', end: '2026-06-27', type: 'group', teams: '挪威vs法国 / 塞内加尔vs伊拉克' },
      { name: 'J组末轮', start: '2026-06-28', end: '2026-06-28', type: 'group', teams: '阿尔及利亚vs奥地利 / 约旦vs阿根廷' },
      { name: 'K组末轮', start: '2026-06-28', end: '2026-06-28', type: 'group', teams: '哥伦比亚vs葡萄牙 / 刚果vs乌兹别克' },
      { name: 'L组末轮', start: '2026-06-28', end: '2026-06-28', type: 'group', teams: '巴拿马vs英格兰 / 克罗地亚vs加纳' },
      { name: '1/16决赛', start: '2026-06-29', end: '2026-07-03', type: 'r32', teams: '16场淘汰赛' },
      { name: '1/8决赛', start: '2026-07-05', end: '2026-07-08', type: 'r16', teams: '8场淘汰赛' },
      { name: '1/4决赛', start: '2026-07-10', end: '2026-07-12', type: 'qf', teams: '4场淘汰赛' },
      { name: '半决赛', start: '2026-07-15', end: '2026-07-16', type: 'sf', teams: '2场半决赛' },
      { name: '决赛', start: '2026-07-19', end: '2026-07-20', type: 'final', teams: '季军赛+决赛' }
    ];

    var categories = ['小组赛', '1/16决赛', '1/8决赛', '1/4决赛', '半决赛', '决赛'];
    var categoryColors = {
      'group': '#f59e0b',
      'r32': '#3b82f6',
      'r16': '#a855f7',
      'qf': '#ec4899',
      'sf': '#f97316',
      'final': '#ffd700'
    };

    var categoryIndexMap = {
      'group': 0, 'r32': 1, 'r16': 2, 'qf': 3, 'sf': 4, 'final': 5
    };

    var seriesData = scheduleData.map(function(item) {
      return {
        value: [
          categoryIndexMap[item.type],
          item.start,
          item.end,
          categoryColors[item.type]
        ],
        name: item.name,
        teams: item.teams,
        start: item.start
      };
    });

    function renderItem(params, api) {
      var categoryIndex = api.value(0);
      var start = api.coord([api.value(1), categoryIndex]);
      var end = api.coord([api.value(2), categoryIndex]);
      var height = api.size([0, 1])[1] * 0.55;

      var rectShape = echarts.graphic.clipRectByRect({
        x: start[0],
        y: start[1] - height / 2,
        width: end[0] - start[0],
        height: height
      }, {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height
      });

      return rectShape && {
        type: 'rect',
        shape: rectShape,
        style: {
          fill: api.value(3),
          stroke: 'rgba(255,255,255,0.15)',
          lineWidth: 1
        }
      };
    }

    var option = {
      backgroundColor: 'transparent',
      tooltip: {
        backgroundColor: 'rgba(10, 31, 10, 0.95)',
        borderColor: '#22c55e',
        textStyle: { color: '#f0fdf4', fontSize: 12 },
        formatter: function(params) {
          var data = params.data;
          return '<div style="font-weight:bold;color:#4ade80">' + data.name + '</div>' +
                 '<div style="font-size:12px;margin-top:4px">' + data.teams + '</div>' +
                 '<div style="font-size:11px;color:#86efac;margin-top:2px">' + data.start + '</div>';
        }
      },
      grid: {
        top: 40,
        bottom: 30,
        left: 90,
        right: 30
      },
      xAxis: {
        type: 'time',
        axisLine: { lineStyle: { color: 'rgba(255,255,255,0.2)' } },
        axisLabel: {
          color: '#86efac',
          formatter: '{MM}-{dd}',
          fontSize: 11
        },
        splitLine: {
          lineStyle: { color: 'rgba(255,255,255,0.05)', type: 'dashed' }
        }
      },
      yAxis: {
        type: 'category',
        data: categories,
        axisLine: { lineStyle: { color: 'rgba(255,255,255,0.2)' } },
        axisLabel: { color: '#86efac', fontSize: 11 },
        splitLine: { show: false }
      },
      series: [
        {
          type: 'custom',
          renderItem: renderItem,
          encode: {
            x: [1, 2],
            y: 0
          },
          data: seriesData
        }
      ]
    };

    chart.setOption(option);
    window.addEventListener('resize', function() { chart.resize(); });
    return chart;
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initBracketChart();
      initScheduleChart();
    });
  } else {
    initBracketChart();
    initScheduleChart();
  }
})();
