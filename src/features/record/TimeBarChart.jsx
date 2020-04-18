import React, { useRef, useEffect } from 'react'
import Chart from 'chart.js'
import moment from 'moment'
import 'chartjs-plugin-zoom'

let barChart = null
export default function TimeBarChart({ data: propData = [], centerTime }) {
  const canvas = useRef()
  const options = {
    aspectRatio: 1.4,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          id: 'barX',
          display: true,
          type: 'time',
          time: {
            minUnit: 'day',
            displayFormats: {
              day: 'D MMM',
              month: 'MMM YYYY',
            },
          },
          ticks: {
            min: moment(centerTime).clone().subtract(3, 'days').valueOf(),
            max: moment(centerTime).clone().add(3, 'days').valueOf(),
            maxRotation: 30,
          },
        },
      ],
      yAxes: [
        {
          id: 'barY',
          display: true,
          scaleLabel: {
            display: true,
          },
          ticks: {
            beginAtZero: true,
            stepSize: 1,
            maxTicksLimit: 10,
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        title: () => '',
        beforeLabel: (arg, data) => {
          const time = moment(arg.xLabel)
          const day = time.day()
          const month = time.month()
          return `${month}月${day}號`
        },
        label: (arg, data) => {
          return arg.value
        },
      },
    },
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: 'x',
          rangeMin: {
            x: null,
            y: 0,
          },
          // On category scale, factor of pan velocity
          speed: 0.5,

          // Minimal pan distance required before actually applying pan
          threshold: 10,

          // Function called while the user is panning
          onPan: function ({ chart }) {},
          // Function called once panning is completed
          onPanComplete: function ({ chart }) {},
        },
        zoom: {
          enabled: true,

          mode: 'x',
          rangeMin: {
            x: null,
            y: 0,
          },
          // Speed of zoom via mouse wheel
          // (percentage of zoom on a wheel event)
          speed: 0.1,

          // On category scale, minimal zoom level before actually applying zoom
          sensitivity: 3,

          // Function called while the user is zooming
          onZoom: function ({ chart }) {
            console.log(chart)
          },
          // Function called once zooming is completed
          onZoomComplete: function ({ chart }) {},
        },
      },
    },
  }
  const data = {
    datasets: [
      {
        yAxisID: 'barY',
        xAxisID: 'barX',
        backgroundColor: '#f4b5a5',
      },
    ],
  }
  useEffect(() => {
    const range = [
      moment(centerTime).clone().subtract(3, 'days'),
      moment(centerTime).clone().add(3, 'days'),
    ]
    const momentData = propData.map(el => {
      el.x = moment(el.x, ["DD-M-YYYY", "DD-MM-YYYY"])
      return el
    })
    if (barChart) {
      barChart.destroy()
    }
    data.datasets[0].data = momentData
    options.scales.xAxes[0].ticks.min = range[0].valueOf()
    options.scales.xAxes[0].ticks.max = range[1].valueOf()
    barChart = new Chart(canvas.current, {
      type: 'bar',
      data,
      options,
    })
  }, [propData, centerTime])

  return (
    <>
      <canvas ref={canvas}>
        Your browser does not support the canvas element.
      </canvas>
    </>
  )
}
