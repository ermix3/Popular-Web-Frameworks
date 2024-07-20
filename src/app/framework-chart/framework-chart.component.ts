import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {ChartData, ChartOptions, ChartType} from "chart.js";
import {FrameworkService} from "../services/framework.service";
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-framework-chart',
  standalone: true,
  imports: [
    BaseChartDirective
  ],
  templateUrl: './framework-chart.component.html',
  styleUrl: './framework-chart.component.css'
})
export class FrameworkChartComponent implements OnInit {
  private frameworkService = inject(FrameworkService);
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;
  chartType: "bar" = "bar";
  chartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };
  chartOptions: ChartOptions<'bar'> = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {display: true, text: 'Popular Web Frameworks'},
      legend: {display: true, position: 'bottom'}
    },
    // scales: {
    //   x: {},
    //   y: {
    //     min: 10,
    //   },
    // },
  };


  ngOnInit(): void {
    this.frameworkService.getFrameworks().subscribe(data => {
      this.chartData.labels = data.map(f => f.framework);
      this.chartData.datasets = [
        {
          label: 'Percent',
          data: data.map(f => f.percent),
          backgroundColor: '#ff3d3366',
          borderColor: '#ff3d33ff',
          borderWidth: 1
        }
      ];
      this.chart?.update();
    });
  }
}
