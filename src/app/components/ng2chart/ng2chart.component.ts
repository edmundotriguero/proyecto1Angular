import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-ng2chart',
  templateUrl: './ng2chart.component.html',
  styles: []
})
export class Ng2chartComponent implements OnInit {

  @Input() doughnutChartLabels:string[] = [];
  @Input() doughnutChartData:number[] = [];
  @Input() doughnutChartType:string = '';
  constructor() { }

  ngOnInit() {
  }

}
