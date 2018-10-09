import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

  graficos: any = {
    'graficos1': {
      'labels': ['con frijoles','con natilla','con tocino'],
      'data': [20,30,46],
      'type': ['doughnut'],
      
    },
    'graficos2': {
      'labels': ['A','B','D','E'],
      'data': [20,30,46,50],
      'type': ['doughnut'],
      
    },
    'graficos3': {
      'labels': ['Aa','Bb','Dc','Ee'],
      'data': [2,3,6,5],
      'type': ['doughnut'],
      
    },
    'graficos4': {
      'labels': ['Aq','Bq','Dq','Eq'],
      'data': [202,302,462,520],
      'type': ['doughnut'],
      
    },
  }
  constructor() { }

  ngOnInit() {
  }

}
