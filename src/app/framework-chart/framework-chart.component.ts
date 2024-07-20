import {Component, inject, Input, OnInit, ViewChild} from '@angular/core';
import {ChartData, ChartOptions, ChartType} from "chart.js";
import {FrameworkService} from "../services/framework.service";
import {BaseChartDirective} from "ng2-charts";
import {Framework} from "../interfaces/framework";

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
  @Input() chartType: "bar" | "pie" = "bar";
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;
  chartData: ChartData<typeof this.chartType> = {
    labels: [],
    datasets: []
  };
  chartOptions: ChartOptions<typeof this.chartType> = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {display: true, text: 'Popular Web Frameworks'},
      legend: {display: true, position: 'bottom'}
    }
  };


  ngOnInit(): void {
    this.frameworkService.getFrameworks().subscribe(data => {
      this.chartData.labels = data.map(f => f.framework);
      let colors = this.generateRandomColors(data);
      this.chartData.datasets = [
        {
          label: 'Percent',
          data: data.map(f => f.percent),
          backgroundColor: colors,
          borderColor: colors,
          borderWidth: 1
        }
      ];
      this.chart?.update();
    });
  }

  generateRandomColors(data: Framework[]): string[] {
    return data.map(f => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '1')}`);
  }
}
