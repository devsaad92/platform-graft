import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  card1;
  view = [1000, 500];

  colorScheme = {
    domain: ['#2ecc71', '#6c5ce7', '#d63031']
  };

  results = [
    {
      name: 'Medecin',
      series: [
        {
          name: new Date('2018-03-01'),
          value: 2
        },
        {
          name: new Date('2018-04-04'),
          value: 6
        },
        {
          name: new Date('2018-05-01'),
          value: 9
        },
        {
          name: new Date('2018-06-01'),
          value: 11
        }
      ]
    },
    {
      name: 'Infirmier',
      series: [
        {
          name: new Date('2018-03-01'),
          value: 4
        },
        {
          name: new Date('2018-04-04'),
          value: 8
        },
        {
          name: new Date('2018-05-01'),
          value: 10
        },
        {
          name: new Date('2018-06-01'),
          value: 12
        }
      ]
    },
    {
      name: 'Patient',
      series: [
        {
          name: new Date('2018-03-01'),
          value: 2
        },
        {
          name: new Date('2018-04-04'),
          value: 5
        },
        {
          name: new Date('2018-05-01'),
          value: 8
        },
        {
          name: new Date('2018-06-01'),
          value: 10
        }
      ]
    }
  ];

}

