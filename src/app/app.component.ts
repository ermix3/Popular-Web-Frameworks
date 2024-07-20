import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {FrameworkChartComponent} from "./framework-chart/framework-chart.component";
import {FrameworkTableComponent} from "./framework-table/framework-table.component";
import {MatIcon} from "@angular/material/icon";
import {MatList, MatListItem} from "@angular/material/list";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, FrameworkChartComponent, FrameworkTableComponent, MatIcon, MatList, MatListItem, MatButtonToggleGroup, MatButtonToggle, MatIconButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Popular-Web-Frameworks';

}
