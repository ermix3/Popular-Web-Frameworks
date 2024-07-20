import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {FrameworkChartComponent} from "./framework-chart/framework-chart.component";
import {FrameworkTableComponent} from "./framework-table/framework-table.component";
import {MatIcon} from "@angular/material/icon";
import {MatList, MatListItem} from "@angular/material/list";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatIconButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {AboutComponent} from "./page/dialog/about/about.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, FrameworkChartComponent, FrameworkTableComponent, MatIcon, MatList, MatListItem, MatButtonToggleGroup, MatButtonToggle, MatIconButton, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public dialog = inject(MatDialog);
  title = 'Popular-Web-Frameworks';
  chartType: 'bar'|'pie'='bar';

  openDialog() {
    this.dialog.open(AboutComponent);
  }
}
