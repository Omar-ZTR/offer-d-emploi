import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
import * as Chart from 'chart.js';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  canvas: any;
  ctx: any;
  canvas2: any;
  ctx2: any;
  canvas3: any;
  ctx3: any;

  constructor() {}
  ngOnInit(): void {
    (function ($) {
      $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $().toggleClass('active');
        });
      });
    })(jQuery);
    this.canvas = document.getElementById('myChart');
    this.canvas2 = document.getElementById('myChart2');
    this.canvas3 = document.getElementById('myChart3');
    this.ctx = this.canvas.getContext('2d');
    this.ctx2 = this.canvas2.getContext('2d');
    this.ctx3 = this.canvas3.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: [
          'Developement',
          'Animation',
          'Sales & Marketing',
          'Design & creative',
          'Writing & Translation',
          'Cover Book',
          'Formation',
          'Music',
        ],
        datasets: [
          {
            label: 'Number of offers per category',
            data: [4, 1, 2, 2, 1, 4, 1, 2],
            
            backgroundColor: [
              'blue',
              'orange',
              'Grey',
              'Yellow',
              'navy',
              'Green',
              'steelblue',
              'sienna',
            ],
            borderWidth: 4,
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        responsive: true,
        //display:true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    let myChart2 = new Chart(this.ctx2, {
      type: 'pie',
      data: {
        labels: ['Clients', 'Freelancers'],
        datasets: [
          {
            label: 'Type of user',
            data: [29, 71],
            backgroundColor: ['limegreen', 'darkgreen'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        responsive: true,
        //display:true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    let myChart3 = new Chart(this.ctx3, {
      type: 'line',
      data: {
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '17',
          '18',
          '19',
          '20',
          '21',
          '22',
          '23',
          '24',
          '25',
          '26',
          '27',
          '28',
          '29',
          '30',
          '31',
        ],
        datasets: [
          {
            label: 'Nombre d offre par jour',
            data: [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 3, 2, 2, 1, 3, 0, 0, 0,
            ],
            backgroundColor: [],
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        responsive: true,
        //display:true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
