/**
 * @author Ahmad Tarkmani
 * @contact Tarkmani@sheridancollge.ca
 * @date 2024-07-20
 */

import {Component, inject, Input, OnInit, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatList, MatListItem} from "@angular/material/list";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatIconButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {AboutComponent} from "./page/dialog/about/about.component";
import {FormsModule} from "@angular/forms";
import {BaseChartDirective} from "ng2-charts";
import {FrameworkService} from "./services/framework.service";
import {ChartData, ChartOptions} from "chart.js";
import {Framework} from "./interfaces/framework";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatToolbar,
    MatIcon,
    MatList,
    MatListItem,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatIconButton,
    FormsModule,
    BaseChartDirective,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable, MatHeaderCellDef],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public dialog = inject(MatDialog);
  private frameworkService = inject(FrameworkService);

  title = 'Popular Web Frameworks';
  chartType: 'bar' | 'pie' = 'bar';
  frameworks: Framework[] = [];
  displayedColumns: string[] = ['framework', 'percent'];

  openDialog() {
    this.dialog.open(AboutComponent);
  }

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
    this.frameworkService
      .getFrameworks()
      .subscribe({
        next: (data: Framework[]) => {
          this.frameworks = data;

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
        },
        error: (error: any) => {
          console.error('Error loading frameworks', error);
        }
      });
  }

  generateRandomColors(data: Framework[]): string[] {
    return data.map(f => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '1')}`);
  }
}
